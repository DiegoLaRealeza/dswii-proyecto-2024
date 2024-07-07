import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ServicioService } from '../../../services/servicio.service';

import { ResponseList } from '../../../models/response-list';
import { Vehiculo } from '../../../models/vehiculo';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Servicio } from '../../../models/servicio';


@Component({
  selector: 'app-crud-registrar-servicio',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './crud-registrar-servicio.component.html',
  styleUrl: './crud-registrar-servicio.component.css'
})
export class CrudRegistrarServicioComponent {

  


  private fb = inject(FormBuilder)
  private servicioSer = inject(ServicioService);
  private router = inject(Router)
  formulario: FormGroup = new FormGroup({})
  errors: string[] = []
  lstVehiculos: Vehiculo[] = []

  ngOnInit() {
    this.servicioSer.getVehi().subscribe(data => {
      console.log("cargando vehiculos");
      this.lstVehiculos = data.object;
      console.log("fin de carga de vehiculos")
    })
    this.formulario = this.fb.group({
      //formulario para registrar un servicio
      descripcion: [''],
      costo: [0],
      fecha: [''],
      estado: [''],
      idVehiculo: [0],
    })
    
  }

  create() {
    let prog = this.formulario.value
    console.log(prog)
    this.servicioSer.save(prog).subscribe({
      next: (data) => {
        this.router.navigate(['/verCrudServicio'])
        this.alertRegistro();
        console.log(data);
      },
      error: response => {
        console.log("xxxx : " + response.error)
        console.log(prog)
        this.errors = response.error
      }
    })
  }

  alertRegistro() {
    Swal.fire({
      title: 'Registro Exitoso',
      text: 'El servicio fue registrado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

}
