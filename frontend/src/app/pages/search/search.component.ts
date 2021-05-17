import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from 'src/app/models/technology.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  technologies: Technology[] = [];
  query: string;

  constructor(
    private _activateRoute: ActivatedRoute, 
    private _http_service: HttpService) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      this.query = params['query'];
      this._http_service
        .searchTecnology(this.query)
        .subscribe((technologies: Technology[]) => {
          this.technologies = technologies["data"];
        });
    });
  }

}
