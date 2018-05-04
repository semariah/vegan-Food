import { Component } from '@angular/core';
import { Food } from './model/vegan-food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vegan Food App';
  masterFoodList: Food[] = [
    new Food("tofurkey", "tofu", "protein", 450),
    new Food("lentil -stew", "lentil", "protein", 500),
    new Food("fried-spinach-mushroom", "spinach & mushroom", "carb", 400),
    new Food("fruit-salad", "mango & guava", "vitamin C", 200),
  ];

  selectedFood = null;

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
 }
