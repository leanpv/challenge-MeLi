import { Component, OnInit} from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent  } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: any;
  parametros: any;

  constructor(private restService: RestService, private route: ActivatedRoute, private router:Router) {
    this.router.events
    .subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationStart) {
        this.route.params.subscribe(routeParams => {
          if(routeParams!=this.parametros){
            this.getData();
          }
        });
      }
    });
   }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.parametros = this.route.snapshot.params;
      this.data = await this.restService
      .getMeli(this.parametros.param)
      .toPromise();
    } catch (error) {}
  }

}