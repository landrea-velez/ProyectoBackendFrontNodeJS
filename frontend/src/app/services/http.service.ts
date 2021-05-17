import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Technology } from "../models/technology.model";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly _http: HttpClient) {}

  public getTecnologies(){
    return this._http.get<Technology[]>(this.baseUrl + "/technologies");
  }

  public getTecnology(id: string){
    return this._http.get<Technology>(this.baseUrl + "/technology/" + id);
  }

  public searchTecnology(query: string){
    return this._http.get<Technology[]>(this.baseUrl + "/technology/search" + query);
  }
}
