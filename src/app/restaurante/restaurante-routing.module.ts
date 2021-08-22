import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRestaurantesComponent } from './listar-restaurantes/listar-restaurantes.component';
import { DetallarComponenteComponent } from './detallar-componente/detallar-componente.component';

const routes: Routes = [
  { path: 'restaurantes', component: ListarRestaurantesComponent },
  {path: 'restaurante/:id',component:DetallarComponenteComponent},
  {path:'',redirectTo:"restaurantes",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }