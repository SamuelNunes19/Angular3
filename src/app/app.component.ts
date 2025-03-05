import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //empty array for storing students' data
  students: any[] = [];

  weather: any[] = [];
  
  temparature: any = "";

  // Inject the DataService to fetch the necessary data
  constructor(private dataService: DataService) { }

  // ngOnInit lifecycle hook runs when the component is initialized
  ngOnInit(): void {
    
    // Get student data from the data service
    this.dataService.getStudentData().subscribe((data) => {
      console.log(data); // Log the fetched data to the console for debugging
      // students array from the fetched data to the students property
      this.students = data.students;
    });

    // Get weather data from the data service
    this.dataService.getWeatherData().subscribe((data) => {
      console.log(data); // Log the fetched weather data to the console for debugging
      // Assign the weather array from the fetched data to the weather property
      this.weather = data.weather;
      // Convert the temperature from Kelvin to Celsius and round it to 2 decimal places
      this.temparature = (data.main.temp - 273.15).toFixed(2);
    });
  }
}

