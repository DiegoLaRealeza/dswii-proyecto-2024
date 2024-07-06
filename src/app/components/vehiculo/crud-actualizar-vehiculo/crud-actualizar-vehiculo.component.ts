import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crud-actualizar-vehiculo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './crud-actualizar-vehiculo.component.html',
  styleUrl: './crud-actualizar-vehiculo.component.css'
})
export class CrudActualizarVehiculoComponent {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'darkkhaki';
  }

}
