import { Component, ElementRef } from '@angular/core';
import { HistorialServicioService } from '../../../services/historial-servicio.service';
import { Router } from '@angular/router';
import { Historialservicio } from '../../../models/historialservicio';

@Component({
  selector: 'app-crud-historial-servicio',
  standalone: true,
  imports: [],
  templateUrl: './crud-historial-servicio.component.html',
  styleUrl: './crud-historial-servicio.component.css'
})
export class CrudHistorialServicioComponent {

  constructor(
    private elementRef: ElementRef,
    private servicio: HistorialServicioService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'darkkhaki';
  }

  historiales: Historialservicio[] = []
}
