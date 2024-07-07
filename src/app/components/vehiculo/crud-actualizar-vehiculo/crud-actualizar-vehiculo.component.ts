import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-actualizar-vehiculo',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './crud-actualizar-vehiculo.component.html',
  styleUrl: './crud-actualizar-vehiculo.component.css'
})
export class CrudActualizarVehiculoComponent {

  formulario: FormGroup<any>;
  errors: string[] = []
  vehiculo: Vehiculo = {
    idVehiculo: 0,
    placa: '',
    marca: '',
    modelo: '',
    anio: 0,
    color: '',
    cliente: {
      idCliente: 0,
      nombre: '',
      apellido: '',
      dni: '',
      direccion: '',
      telefono: '',
      correo: ''
    }
  }

  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private servicio: VehiculoService
  ) {
    this.formulario = this.formBuilder.group({
      idVehiculo: [''],
      placa: [''],
      marca: [''],
      modelo: [''],
      anio: [''],
      color: [''],
      cliente: ['']
    })
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'darkkhaki';
  }

  ngOnInit() {
    const codigoVehiculo = this.rutaActiva.snapshot.params['codigo'];
    console.log("ngOnInit iniciando");
    this.servicio.buscar(codigoVehiculo).subscribe(data => {
      console.log("Data: ");
      console.log(data);
      this.vehiculo = data.object;
      console.log("fin: ");
      // Patch values to form
      this.formulario.patchValue({
        idVehiculo: this.vehiculo.idVehiculo,
        placa: this.vehiculo.placa,
        marca: this.vehiculo.marca,
        modelo: this.vehiculo.modelo,
        anio: this.vehiculo.anio,
        color: this.vehiculo.color,
        cliente: this.vehiculo.cliente.idCliente
      });
    });
  }

  actualizar() {
    let vehiculo = this.formulario.value;
    this.servicio.actualizar(vehiculo).subscribe({
      next: (data) => {
        this.router.navigate(['/verCrudVehiculo'])
        this.alertaActualizacion()
      },
      error: response => {
        console.log("xxxx : " + response.error)
        this.errors = response.error
      }
    });
  }

  alertaActualizacion() {
    Swal.fire({
      title: 'Actualizado',
      text: 'Vehículo actualizado correctamente',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

}
