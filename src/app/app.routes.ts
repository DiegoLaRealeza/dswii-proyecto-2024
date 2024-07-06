import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CrudVehiculoComponent } from './components/crud-vehiculo/crud-vehiculo.component';
import { CrudRegistrarVehiculoComponent } from './components/crud-registrar-vehiculo/crud-registrar-vehiculo.component';
import { CrudActualizarVehiculoComponent } from './components/crud-actualizar-vehiculo/crud-actualizar-vehiculo.component';

export const routes: Routes = [
    // index
    {path: '', component:IndexComponent},

    // mantenimiento
    {path: 'verCrudVehiculo', component:CrudVehiculoComponent},
    {path: 'verCrudRegistrarVehiculo', component:CrudRegistrarVehiculoComponent},
    {path: 'verCrudActualizarVehiculo', component:CrudActualizarVehiculoComponent}
];
