import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-task',
  templateUrl: './criar-task.component.html',
  styleUrls: ['./criar-task.component.css']
})
export class CriarTaskComponent implements OnInit {

  grupos: { id: number, nome: string }[] = [
    { id: 1, nome: 'Grupo 1' },
    { id: 2, nome: 'Grupo 2' },
    { id: 3, nome: 'Grupo 3' },
    { id: 4, nome: 'Grupo 4' },
    { id: 5, nome: 'Grupo 5' },
    { id: 6, nome: 'Grupo 6' },
    { id: 7, nome: 'Grupo 7' },
    { id: 8, nome: 'Grupo 8' },
    { id: 9, nome: 'Grupo 9' },
    { id: 10, nome: 'Grupo 10' }
  ];

  task = {
    id: '1',
    titulo:'angular',
    descricao:'dev',
    group:'',
    status:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarTask(){
    alert("salvo");
  }

  cancelar(){
    alert("cancelado");
  }

}
