import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: any;

  constructor(private restService: RestService,  private datosRec: ActivatedRoute) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      const parametros = this.datosRec.snapshot.params;

      this.data = await this.restService
      .getDetail(parametros.id)
      .toPromise();

    } catch (error) {}
  }

}
