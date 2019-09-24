import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get('http://localhost:5000/cities');
  }

  addCity(name) {
    return this.http.put('http://localhost:5000/cities', {name});
  }
}
