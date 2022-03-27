import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../models/interfaccia';
import * as ToDoFuncion from '../todo.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  arr: Interfaccia[]= [];
  text!: string;
  id!: number;
  title: any;

  constructor() {
    ToDoFuncion.leggi().then((contenitore => {
      this.arr = contenitore;
    }))


  }


  ngOnInit(): void {
  }

  async aggiungi() {
    const compito = await ToDoFuncion.add( {
      title: this.text,
      completed: false
    })
  }

  // async cambia() {
  //   const cambiaStato = await ToDoFuncion.changeStatus( {
  //     completed: true
  //   })
  // }

  async cancella(cliccato: any) {
    const cancellaClick = await ToDoFuncion.canc({

      id: cliccato.id,
      title: cliccato.title,
      completed: true
    })
    // console.log(cliccato.id)   //// ooooookkkk
    // console.log(this.arr.indexOf(cliccato))   ///// ooooookkk
  }

}



