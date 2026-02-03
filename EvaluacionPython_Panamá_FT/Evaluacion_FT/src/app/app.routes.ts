import { Routes } from '@angular/router';
import { RegistroVehiculo } from '../pages/registro-vehiculo/registro-vehiculo';
import { ListadoVehiculo } from '../pages/listado-vehiculo/listado-vehiculo';
import { Formulario } from '../components/formulario/formulario';

export const routes: Routes = [
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: Formulario },
  { path: 'vehiculo/registrar', component: RegistroVehiculo },
  { path: 'vehiculo/listado',component: ListadoVehiculo },
];
