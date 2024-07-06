import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-actualizar-cliente',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './crud-actualizar-cliente.component.html',
  styleUrl: './crud-actualizar-cliente.component.css'
})
export class CrudActualizarClienteComponent {

  
  formulario: FormGroup<any>;
  errors: string[] = []
  cliente:Cliente= {
    idCliente:0,
    nombre:'',
    apellido:'',
    dni:'',
    correo:'',
    telefono:'',
    direccion:''
  }
 

  constructor(
    private fb: FormBuilder,
    private servicioCli: ClienteService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      idCliente: [''],
      nombre: [''],
      apellido: [''],
      dni: [''],
      correo: [''],
      telefono: [''],
      direccion: ['']
    });
  }

  ngOnInit() {
    const codigoDocente = this.rutaActiva.snapshot.params['codigo'];
    console.log("ngOnInit iniciando");
    this.servicioCli.search(codigoDocente).subscribe(data => {
      console.log("Data: ");
      console.log(data);
      this.cliente = data.object;
      console.log("fin: ");
      // Patch values to form
      this.formulario.patchValue({
        idCliente: this.cliente.idCliente,
        nombre: this.cliente.nombre,
        apellido: this.cliente.apellido,
        dni: this.cliente.dni,
        correo: this.cliente.correo,
        telefono: this.cliente.telefono,
        direccion: this.cliente.direccion
      });
    });
  }

  update() {
    let prog = this.formulario.value
    this.servicioCli.update(prog).subscribe({
      next: (data) => {
        this.router.navigate(['/verCrudCliente'])
        this.alertaActualizacion()
      },
      error: response => {
        console.log("xxxx : " + response.error)
        this.errors = response.error
      }

    })
  }

  alertaActualizacion() {
    Swal.fire({
      title: 'Actualizado',
      text: 'Se actualizo correctamente',
      icon: 'success',
      confirmButtonText: 'ok'
    })
    
  }


}
