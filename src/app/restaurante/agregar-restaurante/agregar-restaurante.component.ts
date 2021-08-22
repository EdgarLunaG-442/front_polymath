import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-restaurante',
  templateUrl: './agregar-restaurante.component.html',
  styleUrls: ['./agregar-restaurante.component.css']
})
export class AgregarRestauranteComponent implements OnInit {

  @Output() cancelEvent = new EventEmitter()
  @Output() finishCreation = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log('se crea')
  }

  cancelModal()
  {
    this.cancelEvent.emit()
  }
}
