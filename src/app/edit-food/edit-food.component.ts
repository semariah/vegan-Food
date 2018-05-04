import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/vegan-food.model';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

  constructor() { }



}
