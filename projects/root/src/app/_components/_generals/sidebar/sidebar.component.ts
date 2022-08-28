import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this._getOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['innerWidth']?.currentValue) {
      this._getOptions();
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
      },
      err => {
        console.error(err);
      }
    );
    /*
    this.itemsSidevar = [
      {
        label: (this.innerWidth > 1000) ? 'Trabajadores' : '',
        icon: 'pi pi-fw pi-users',
        routerLink: '/workers'
      },
      {
        label: (this.innerWidth > 1000) ? 'Alumnos' : '',
        icon: 'pi pi-fw pi-users',
        routerLink: '/students'
      },
      {
        label: (this.innerWidth > 1000) ? 'Archivos' : '',
        icon: 'pi pi-fw pi-folder',
        routerLink: '/files'
      },
      // {
      //   label: 'Grupos',
      //   icon: 'pi pi-fw pi-clone',
      //   routerLink: '/messages'
      // },
      {
        label: (this.innerWidth > 1000) ? 'Calendario' : '',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/calendar'
      },
      {
        label: (this.innerWidth > 1000) ? 'TrackLog' : '',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/messages'
      },
      {
        label: (this.innerWidth > 1000) ? 'Messages' : '',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/messages'
      }
    ];
    */
  }
}
