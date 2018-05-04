import { Component } from '@angular/core';
import { Food } from '.model/food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vegan Food App';
  foods: Food[] = [
    new Food("tofurkey", "tofu", "protein", 450),
    new Food("lentil -stew", "lentil", "protein", 500),
    new Food("fried-spinach-mushroom", "spinach & mushroom", "carb", 400),
    new Food("fruit-salad", "mango & guava", "vitamin C", 200),
  ];

}
