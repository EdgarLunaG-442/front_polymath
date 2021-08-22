import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteService } from './restaurante.service';
import { ListarRestaurantesComponent } from './listar-restaurantes/listar-restaurantes.component';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetallarComponenteComponent } from './detallar-componente/detallar-componente.component';
import { AgregarRestauranteComponent } from './agregar-restaurante/agregar-restaurante.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarRestaurantesComponent,
    DetallarComponenteComponent,
    AgregarRestauranteComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers:[RestauranteService],
  exports:[ListarRestaurantesComponent,AgregarRestauranteComponent,DetallarComponenteComponent]
})
export class RestauranteModule { }
