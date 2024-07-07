import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServicioService } from '../../../services/servicio.service';
import { Servicio } from '../../../models/servicio';
import Swal from 'sweetalert2';
import { AppMaterialModule } from '../../../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-servicio',
  standalone: true,
  imports: [RouterModule,AppMaterialModule,ReactiveFormsModule,CommonModule],
  templateUrl: './crud-servicio.component.html',
  styleUrl: './crud-servicio.component.css'
})
export class CrudServicioComponent {

  private servicioSer = inject(ServicioService)
  private router = inject(Router);
  servicio: Servicio[] = []

  ngOnInit(): void {
    this.servicioSer.get().subscribe(data => {
      console.log(data);
      this.servicio = data.object
    })

    //imprimir la lista de servicios
    console.log(this.servicio)
  }

  update(bean: Servicio) {
    this.router.navigate(['/verCrudActualizarServicio', bean.idServicio])
  }

  Delete(bean: Servicio): void {
    Swal.fire({
      title: 'Eliminar',
      text: '¿Seguro que desea eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.servicioSer.delete(bean.idServicio).subscribe(data => {
          console.log(data);

          //eliminado correctamente
          Swal.fire({
            title: 'Eliminado',
            text: 'Servicio eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.ngOnInit()
        })
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/verCrudServicio']);
        });
      }
    })
  }

  updateEstado(bean: Servicio) {
    bean.estado = bean.estado == 1 ? 0 : 1
    this.servicioSer.update(bean).subscribe(data => {
      console.log(data);
      this.ngOnInit()
    })
  }

}
