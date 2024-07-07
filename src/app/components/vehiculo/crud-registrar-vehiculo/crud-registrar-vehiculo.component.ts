import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    private servicio: VehiculoService,
    private router: Router
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
      cliente: []
    })
  }

  registrar() {
    let vehiculo = this.formulario.value;
    this.servicio.registrar(vehiculo).subscribe({
      next: (data) => {
        this.router.navigate(['/verCrudVehiculo']);
        this.alertaRegistro();
        console.log(data);
      },
      error: (response) => {
        console.log('Error: ' + response.error);
        this.errors = response.error;

      }
    });
  }

  alertaRegistro() {
    Swal.fire({
      title: 'Éxito',
      text: 'Vehículo registrado correctamente',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

}
