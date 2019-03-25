import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangsiwtch',
  templateUrl: './ejdirectivangsiwtch.component.html',
  styleUrls: ['./ejdirectivangsiwtch.component.css']
})
export class EjdirectivangsiwtchComponent implements OnInit {

  jugadores: any [] = [
    { nombre: 'Earving Magic Johnson', equipo: 'L.A. Lakers' },
    { nombre: 'Michael Jordan ', equipo: 'Chicago Bulls' },
    { nombre: 'Larry Bird ', equipo: 'Boston Celtics' },
    { nombre: 'Kareem Abdul Jabbar', equipo: 'L.A. Lakers' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
