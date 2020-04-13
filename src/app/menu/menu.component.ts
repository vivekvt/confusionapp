import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { baseURL } from '../shared/baseurl';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  dishes: Dish[];
  baseURL=baseURL;

 constructor(private dishService: DishService
   // , private baseURL: baseURL
   ) { }
  
  ngOnInit() {
     this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
                 err => console.log('HTTP Error', err));
  }

}
