import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CardOptionInterface } from '../../../_interfaces/card-options';
import { ResourcesService } from '../../../_services/resources.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  providers: [ResourcesService]
})
export class DefaultComponent implements OnInit, OnDestroy {

  cardOptions!: CardOptionInterface[];

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private resourcesServices: ResourcesService
  ) { }

  ngOnInit(): void {
    this._generateOptionCards();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _generateOptionCards(): void {
    this.resourcesServices.getResourcesFiles().pipe(takeUntil(this.unSubscribe$)).subscribe(
      files => {
        this.cardOptions = files;
      },
      err => {
        debugger
      }
    );
    /*this.cardOptions = [
      { icon: 'pi-file-excel', title: 'altas bajas correcciones', description: 'VU-X-SIP-0307 SIIE WEB ALTAS BAJAS CORRECCIONES', buttons: [{ label: 'crear correcciones', styleClass: 'p-button-outlined p-button-rounded', action: 'resources/files/corrections' }] },
      { icon: 'pi-file', title: 'antrevistas', description: 'Formato de entrevistas para aspirantes.', buttons: [{ label: 'crear entrevista', styleClass: 'p-button-outlined p-button-rounded', action: 'resoruces/all' }] },
      { icon: 'pi-file-pdf', title: 'minutas', description: 'Formato de minutas.', buttons: [{ label: 'crear minuta', styleClass: 'p-button-outlined p-button-rounded', action: 'resoruces/all' }] },
      { icon: 'pi-file', title: 'antrevistas', description: 'Formato de crear nota buena.', buttons: [{ label: 'crear nota buena', styleClass: 'p-button-outlined p-button-rounded', action: 'resoruces/all' }] },
      { icon: 'pi-file-excel', title: 'notas buenas', description: 'Formato de control de notas buenas.', buttons: [{ label: 'control notas', styleClass: 'p-button-outlined p-button-rounded', action: 'resoruces/all' }] },
      { icon: 'pi-file-excel', title: 'asistencia alumnos', description: 'Llevar control de asistencia por grupo.', buttons: [{ label: 'asistencia alumnos', styleClass: 'p-button-outlined p-button-rounded', action: '/resourcesparents' }] },
      { icon: 'pi-file-excel', title: 'asistencia trabajadores', description: 'Llevar control de asistencia de trabajadores.', buttons: [{ label: 'asistencia trabajadores', styleClass: 'p-button-outlined p-button-rounded', action: 'resources/groups' }] },
      { icon: 'pi-file-pdf', title: 'planeaciones', description: 'Llenar formato de planeacion.', buttons: [{ label: 'crear planeacion', styleClass: 'p-button-outlined p-button-rounded', action: 'resources/groups' }] }
    ]*/
  }
}
