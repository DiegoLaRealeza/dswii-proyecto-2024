import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VehiculoService } from '../../../services/vehiculo.service';

@Component({
  selector: 'app-crud-registrar-vehiculo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crud-registrar-vehiculo.component.html',
  styleUrl: './crud-registrar-vehiculo.component.css'
})
export class CrudRegistrarVehiculoComponent {

  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService
  ) { }

  formulario: FormGroup = new FormGroup({})
  errors: string[] = []

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'darkkhaki';
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      placa: [],
      marca: [],
      modelo: [],
      anio: [],
      color: [],
      idCliente: []
    })
  }

  registrar() {
    
  }

}
