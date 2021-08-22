import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-detallar-componente',
  templateUrl: './detallar-componente.component.html',
  styleUrls: ['./detallar-componente.component.css']
})
export class DetallarComponenteComponent implements OnInit,OnDestroy {

  idRestaurante:string
  sub1:Subscription
  restaurante: Restaurante
  totalReservas:Array<any>
  hoy:boolean = false
  createReservaForm:FormGroup

  get nombreRest()
  {
    return this.createReservaForm.get('nombre')
  }
  get descripcionRest()
  {
    return this.createReservaForm.get('descripcion')
  }

  get ciudadRest()
  {
    return this.createReservaForm.get('ciudad')
  }

  get urlFotoRest()
  {
    return this.createReservaForm.get('urlFoto')
  }

  constructor(private fb:FormBuilder,private ar:ActivatedRoute, private servicioRestaurante: RestauranteService, private router:Router) {
    this.idRestaurante = ar.snapshot.params.id
  }

  ngOnInit(): void {
    this.sub1 = this.startSub1()
    this.construirFormulario()
  }

  ngOnDestroy():void{
    this.sub1.unsubscribe()
  }

  startSub1()
  {
    return this.servicioRestaurante.obtenerRestaurante(this.idRestaurante,this.hoy).subscribe(
      (rest)=>
      {
        this.restaurante = rest
        this.totalReservas = rest.reservas
      }
    )
  }

  mostrarHoy()
  {
    this.hoy=!this.hoy
    this.sub1.unsubscribe()
    this.sub1 = this.startSub1()
  }

  eliminarRest(id:string)
  {
    this.servicioRestaurante.eliminarRestaurante(id).subscribe(()=>
    {
      this.router.navigateByUrl('/')
    })
  }

  anadirReserva()
  {
    let fechaReserva={
      "dia":21,
      "mes":8,
      "anio":2021,
      "hora":11,
      "minuto":0
  
    }
  }

  crearReserva()
  {
    let restNuevo =
    {
      anio: Number(this.nombreRest?.value) ,
      mes: Number(this.descripcionRest?.value),
      dia: Number(this.ciudadRest?.value),
      hora: Number(this.urlFotoRest?.value),
      minuto:0
    }
    console.log(restNuevo)

    this.servicioRestaurante.agregarReserva(this.idRestaurante,restNuevo).subscribe()
  }

  construirFormulario()
  {
    this.createReservaForm = this.fb.group(
      {
        nombre:['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        ciudad: ['', [Validators.required]],
        urlFoto:[''],
      }
    )
  }

}
