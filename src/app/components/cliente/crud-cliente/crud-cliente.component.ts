import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crud-cliente',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './crud-cliente.component.html',
  styleUrl: './crud-cliente.component.css'
})
export class CrudClienteComponent {

  private servicioCli = inject(ClienteService)
  private router = inject(Router);
  cliente: Cliente[] = []


  ngOnInit(): void {
    this.servicioCli.get().subscribe(data => {
      console.log(data);
      this.cliente = data.object
    })
  }

  //boton actualizar
  update(bean: Cliente) {
    this.router.navigate(['/verCrudActualizarCliente', bean.idCliente])
  }



  Delete(bean: Cliente): void {
    Swal.fire({
      title: 'Eliminar',
      text: '¿Seguro que desea eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.servicioCli.delete(bean.idCliente).subscribe(data => {
          console.log(data);

          //eliminado correctamente
          Swal.fire({
            title: 'Eliminado',
            text: 'Cliente eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.ngOnInit()
        })
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/verCrudCliente']);
        });
      }
    });
  }
}
