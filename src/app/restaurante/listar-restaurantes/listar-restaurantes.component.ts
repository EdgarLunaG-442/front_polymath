import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { start } from '@popperjs/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-listar-restaurantes',
  templateUrl: './listar-restaurantes.component.html',
  styleUrls: ['./listar-restaurantes.component.css']
})
export class ListarRestaurantesComponent implements OnInit, OnDestroy {

  restaurantes:Array<Restaurante>=[];
  sub:Subscription;
  albumAddOn:boolean = false
  createRestauranteForm:FormGroup

  get nombreRest()
  {
    return this.createRestauranteForm.get('nombre')
  }
  get descripcionRest()
  {
    return this.createRestauranteForm.get('descripcion')
  }

  get ciudadRest()
  {
    return this.createRestauranteForm.get('ciudad')
  }

  get urlFotoRest()
  {
    return this.createRestauranteForm.get('urlFoto')
  }

  constructor(private fb:FormBuilder,private router:Router,private servicioRestaurante: RestauranteService) { }

  ngOnInit(): void {
    this.sub = this.startSub()
    this.construirFormulario()
  }

  ngOnDestroy():void
  {
    this.sub.unsubscribe()
  }

  startSub(): Subscription
  {
    Swal.showLoading()
    return this.servicioRestaurante.obtenerRestaurantes().subscribe(
      rest=>
      {
        this.restaurantes = rest;
        Swal.close()
      },
      error=>
      {
        Swal.fire(
          {
            text: error
          }
        )
      }
    )
  }

  navegarDetalle(id:string):void
  {
    this.router.navigateByUrl(`restaurante/${id}`)
  }

  agregarRestauranteOn()
  {
    console.log(this.albumAddOn)
    this.albumAddOn=!this.albumAddOn
  }

  reloadComponent()
  {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  construirFormulario()
  {
    this.createRestauranteForm = this.fb.group(
      {
        nombre:['',[Validators.required,Validators.minLength(3)]],
        descripcion: ['',[Validators.required]],
        ciudad: ['', [Validators.required]],
        urlFoto:[''],
      }
    )
  }

  crearRestaurante()
  {
    let restNuevo =
    {
      nombre: this.nombreRest?.value,
      descripcion: this.descripcionRest?.value,
      ciudad: this.ciudadRest?.value,
      direccion: this.descripcionRest?.value,
      urlFoto: this.urlFotoRest?.value
    }
    if(restNuevo.urlFoto=="")
    {
      delete restNuevo.urlFoto
    }
    this.servicioRestaurante.agregarRestaurante(restNuevo).subscribe(done=>
      {
        this.reloadComponent()
      })
  }
}
