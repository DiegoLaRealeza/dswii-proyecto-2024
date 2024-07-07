import { Component, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { Vehiculo } from '../../../models/vehiculo';
import Swal from 'sweetalert2';
import { VehiculoService } from '../../../services/vehiculo.service';

@Component({
  selector: 'app-crud-vehiculo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './crud-vehiculo.component.html',
  styleUrl: './crud-vehiculo.component.css'
})
export class CrudVehiculoComponent {

  constructor(
    private elementRef: ElementRef,
    private servicio: VehiculoService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'darkkhaki';
  }

  clientes: Cliente[] = [
    // {
    //   idCliente: 1, nombre: "Juan", apellido: "Perez", dni: "12345678", direccion: "Calle Falsa 123", telefono: "987654321", correo: "juan.perez@example.com"
    // },
    // {
    //   idCliente: 2, nombre: "Maria", apellido: "Gonzalez", dni: "87654321", direccion: "Avenida Siempre Viva 456", telefono: "912345678", correo: "maria.gonzalez@example.com"
    // },
    // {
    //   idCliente: 3, nombre: "Carlos", apellido: "Lopez", dni: "23456789", direccion: "Jiron de la Union 789", telefono: "998877665", correo: "carlos.lopez@example.com"
    // }
  ];

  vehiculos: Vehiculo[] = [
    // {
    //   idVehiculo: 1, placa: "ABC-123", marca: "Toyota", modelo: "Corolla", anio: 2020, color: "Rojo", cliente: this.clientes[0]
    // },
    // {
    //   idVehiculo: 2, placa: "DEF-456", marca: "Honda", modelo: "Civic", anio: 2019, color: "Azul", cliente: this.clientes[1]
    // },
    // {
    //   idVehiculo: 3, placa: "GHI-789", marca: "Ford", modelo: "Focus", anio: 2018, color: "Negro", cliente: this.clientes[2]
    // }
  ];

  ngOnInit(): void {
    this.servicio.listar().subscribe(
      data => {
        console.log(data);
        this.vehiculos = data.object
      }
    )
  }

  actualizar(bean: Vehiculo) {
    this.router.navigate(['/verCrudActualizarVehiculo', bean.idVehiculo]);
  }

  eliminar(bean: Vehiculo): void {
    Swal.fire({
      title: 'Eliminar',
      text: '¿Seguro que desea eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.servicio.eliminar(bean.idVehiculo).subscribe(
          data => {
            console.log(data);

            // Eliminado correctamente
            Swal.fire({
              title: 'Eliminado',
              text: 'Vehículo eliminado correctamente',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.ngOnInit()
          }
        )
        this.router.navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/verCrudVehiculo']);
          });
      }
    });
  }

}
