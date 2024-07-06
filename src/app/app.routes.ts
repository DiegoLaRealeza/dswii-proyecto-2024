import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CrudVehiculoComponent } from './components/vehiculo/crud-vehiculo/crud-vehiculo.component';
import { CrudRegistrarVehiculoComponent } from './components/vehiculo/crud-registrar-vehiculo/crud-registrar-vehiculo.component';
import { CrudActualizarVehiculoComponent } from './components/vehiculo/crud-actualizar-vehiculo/crud-actualizar-vehiculo.component';
import { CrudClienteComponent } from './components/cliente/crud-cliente/crud-cliente.component';
import { CrudRegistrarClienteComponent } from './components/cliente/crud-registrar-cliente/crud-registrar-cliente.component';
import { CrudActualizarClienteComponent } from './components/cliente/crud-actualizar-cliente/crud-actualizar-cliente.component';
import { CrudHistorialServicioComponent } from './components/historial-servicio/crud-historial-servicio/crud-historial-servicio.component';
import { CrudRegistrarHistorialServicioComponent } from './components/historial-servicio/crud-registrar-historial-servicio/crud-registrar-historial-servicio.component';
import { CrudActualizarHistorialServicioComponent } from './components/historial-servicio/crud-actualizar-historial-servicio/crud-actualizar-historial-servicio.component';
import { CrudServicioComponent } from './components/servicio/crud-servicio/crud-servicio.component';
import { CrudRegistrarServicioComponent } from './components/servicio/crud-registrar-servicio/crud-registrar-servicio.component';
import { CrudActualizarServicioComponent } from './components/servicio/crud-actualizar-servicio/crud-actualizar-servicio.component';

export const routes: Routes = [
    // index
    {path: '', component:IndexComponent},

    //// CRUDs
    // Cliente
    {path: 'verCrudCliente', component:CrudClienteComponent},
    {path: 'verCrudRegistrarCliente', component:CrudRegistrarClienteComponent},
    {path: 'verCrudActualizarCliente/:codigo', component:CrudActualizarClienteComponent},

    // HistorialServicio
    {path: 'verCrudHistorialServicio', component:CrudHistorialServicioComponent},
    {path: 'verCrudRegistrarHistorialServicio', component:CrudRegistrarHistorialServicioComponent},
    {path: 'verCrudActualizarHistorialServicio/:codigo', component:CrudActualizarHistorialServicioComponent},

    // Servicio
    {path: 'verCrudServicio', component:CrudServicioComponent},
    {path: 'verCrudRegistrarServicio', component:CrudRegistrarServicioComponent},
    {path: 'verCrudActualizarServicio/:codigo', component:CrudActualizarServicioComponent},

    // Vehículo
    {path: 'verCrudVehiculo', component:CrudVehiculoComponent},
    {path: 'verCrudRegistrarVehiculo', component:CrudRegistrarVehiculoComponent},
    {path: 'verCrudActualizarVehiculo/:codigo', component:CrudActualizarVehiculoComponent}
];
