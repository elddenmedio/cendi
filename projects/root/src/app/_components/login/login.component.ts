import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SecureLocalService } from 'secure-local';
import { UserInterface } from '../../_interfaces/user';
import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] })
  });

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storageService: SecureLocalService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  get form() {
    return this.loginForm.controls;
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.form['username'].value, this.form['password'].value)
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        (user: UserInterface) => {
          this.storageService.setStorage('user', { name: 'user', value: user });
          this.router.navigate(['/dashboard'], { relativeTo: this.route });
        },
        (err: any) => {
          console.error(err);
        }
      )
    }
  }
}
