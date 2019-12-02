import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getInput(event){
    const data = event.target.value;
    this.router.navigate(['/item/search/', data || this.value]);
  }

  getInputValue(event){
    this.value = event.target.value;
  }

}
