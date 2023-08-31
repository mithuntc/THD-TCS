import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class DashboadComponent implements OnInit {
  dashboard;
  loaded:boolean = false;
  constructor(private router:Router, private dashboardService: DashboardService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loaded = false;
    this.dashboardService.getData().subscribe(res=>{
      
      this.dashboard = res;
      
      
      this.loaded = true;
    })

  }

  logout(){
    localStorage.removeItem('usersData');
    this.router.navigateByUrl('/login');
  }
}
