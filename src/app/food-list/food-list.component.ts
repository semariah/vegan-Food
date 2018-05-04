import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from '../model/vegan-food.model';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
  
  // foods: Food[] = [
  //   new Food("tofurkey", "tofu", "protein", 450),
  //   new Food("lentil -stew", "lentil", "protein", 500),
  //   new Food("fried-spinach-mushroom", "spinach & mushroom", "carb", 400),
  //   new Food("fruit-salad", "mango & guava", "vitamin C", 200),
  // ];

  dietColor(currentFood){
    if (currentFood.diet === "protein"){
      return "bg-danger";
    } else if (currentFood.diet === "carb") {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  constructor() { }


}
