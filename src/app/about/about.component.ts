import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  goals=[];
  
  constructor(private route: ActivatedRoute,private router:Router,dataserv:DataService) {
    this.goals=dataserv.getGoal();
   }

  ngOnInit() {
  }

}
