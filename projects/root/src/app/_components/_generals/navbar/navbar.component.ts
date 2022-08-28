import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { MenuService } from '../../../_services/menu.service';

@Component({
  selector: 'opera-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MenuService]
})
export class NavbarComponent implements OnInit, OnDestroy {

  items!: MenuItem[];

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this._getMenu();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getMenu() {
    this.menuService.getMenu().pipe(takeUntil(this.unSubscribe$)).subscribe(
      (menu) => {
        this.items = menu;
      },
      err => {
        console.error(err);
      }
    );
  }
}
