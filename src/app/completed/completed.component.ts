import { compileFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../models/interfaccia';
import * as ToDoFuncion from '../todo.service'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})

export class CompletedComponent implements OnInit {
  arrCestino : Interfaccia[] = [];

  constructor() {
    ToDoFuncion.leggiCestino().then((cestino => {
      this.arrCestino = cestino;
    }))
  }

  ngOnInit(): void {
  }

  // async function completati(cestino: any) {
  //   throw new Error('Function not implemented.');
  //   await ToDoFuncion.leggiCestino(cestino)

  //   }
  // }

}
