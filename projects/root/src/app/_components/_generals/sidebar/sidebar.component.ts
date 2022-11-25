import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { MenuService } from '../../../_services/menu.service';

@Component({
  selector: 'opera-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges, OnDestroy {

  @Input() innerWidth!: number;

  itemsSidevar!: MenuItem[];
  itemsSidevarMobile: MenuItem[] = [];
  displayMobile!: boolean;
  displayMenu: boolean = false;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.displayMenu = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this._getOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['innerWidth']?.currentValue) {
      this.displayMobile = (changes['innerWidth']?.currentValue > 770) ? false : true;
      this.innerWidth = changes['innerWidth']?.currentValue;
    }
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getOptions(): void {
    this.menuService.getSidebar().pipe(takeUntil(this.unSubscribe$)).subscribe(
      (menu) => {
        this.itemsSidevar = menu;
        menu.forEach(el => {
          this.itemsSidevarMobile.push({label: '', title: el.title, icon: el.icon, routerLink: el.routerLink, disabled: el.disabled});
        });
      },
      err => {
        console.error(err);
      }
    );
  }
}
