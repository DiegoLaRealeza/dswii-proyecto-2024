import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crud-registrar-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './crud-registrar-cliente.component.html',
  styleUrl: './crud-registrar-cliente.component.css'
})
export class CrudRegistrarClienteComponent {

  private fb = inject(FormBuilder)
  private servicioCli = inject(ClienteService);
  private router = inject(Router)
  formulario: FormGroup = new FormGroup({})
  errors: string[] = []

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: [],
      apellido: [],
      dni: [],
      correo: [],
      telefono: [],
      direccion: []
    })
  }

  create() {
    let prog = this.formulario.value
    console.log(prog)
    this.servicioCli.save(prog).subscribe({
      next: (data) => {
        this.router.navigate(['/verCrudCliente'])
        this.alertRegistro();
        console.log(data);
      },
      error: response => {
        console.log("xxxx : " + response.error)
        this.errors = response.error
        console.log(prog)
      }
    })
  }


  alertRegistro() {
    Swal.fire({
      title: 'Registro Exitoso',
      text: 'El cliente ' + this.formulario.value.nombre + ' ' + this.formulario.value.apellido + ' fue registrado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }


}
