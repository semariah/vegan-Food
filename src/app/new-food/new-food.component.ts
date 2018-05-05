import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/vegan-food.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent {
  @Output() sendFood = new EventEmitter();
  submitForm(name: string, ingredient: string, diet: string, calories: string, organic: boolean) {
    let newFood: Food = new Food(name, ingredient, diet, parseInt(calories));
    this.sendFood.emit(newFood);
  }
}
