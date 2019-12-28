import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount: number=4;
  btnText: string='Add anItem';
  goalText:string= 'My first life goal';
  goals= [];

  constructor(private router:Router,private Dataserv:DataService) { 
    this.goals=this.Dataserv.getGoal();
    }

  ngOnInit() {
    this.itemCount =this.goals.length;
  }
  
  addItem(){
    this.Dataserv.goals.push(this.goalText);
    this.goalText ='';
    this.itemCount = this.Dataserv.goals.length;
  }

}
