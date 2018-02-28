import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input('counterIdInChild') compteur: number;

  @Output() counterEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  add(bool: boolean): void {
  if (bool) {
      this.compteur++;
    } else {
      this.compteur--;
    }
    this.counterEmitter.emit(this.compteur);
  }
  
}
