import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 leader: Leader[];
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {

    this.leaderservice.getLeaders().subscribe(leader => this.leader = leader);

  }
}