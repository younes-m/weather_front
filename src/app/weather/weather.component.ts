import { Component, OnInit } from '@angular/core';
import { WeatherService} from './weather.service';
import {City} from '../city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: []
})
export class WeatherComponent implements OnInit {
  cities: City[] = [];
  error = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.weatherService.getCities()
      .subscribe((data: any[]) => {
        this.cities = data.map((element) => new City(element.name, element.temp_c, element.temp_k));
        console.log(this.cities);
      });
  }

  addCity(name) {
    this.weatherService.addCity(name)
      .subscribe(
        () => {
          this.getCities();
          this.error = '';
          },
        (error) => this.error = 'Could not add this city');
  }
}
