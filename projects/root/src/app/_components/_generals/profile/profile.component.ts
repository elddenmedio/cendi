import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'opera-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = {
    name: 'Alina Liset',
    lastName: 'Martinez',
    secondLastName: 'gonzalez',
    // avatar: 'avatar.png'
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  getLabelName(): string {
    let _name: string;
    _name = (this.user?.name) ? this.user.name.substring(0, 1) : '';
    _name += (this.user?.lastName) ? this.user.lastName.substring(0, 1) : '';

    if(_name.length < 2) {
      _name += (this.user?.secondLastName) ? this.user.secondLastName.substring(0, 1) : '';
    }

    return _name;
  }

  getFullName(): string {
    let _name: string;
    _name = (this.user?.name) ? this.user.name + ' ' : '';
    _name += (this.user?.lastName) ? this.user.lastName + ' ' : '';
    _name += (this.user?.secondLastName) ? this.user.secondLastName + ' ' : '';

    return _name;
  }

  jumpTo(jump: string): void {
    this.router.navigate([`/${jump}`], { relativeTo: this.route });
  }
}
