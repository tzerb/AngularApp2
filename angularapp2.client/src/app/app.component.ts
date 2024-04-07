import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface LoanCriteria {
  name: string;
  description: string;
  loanNumber: string;
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  public loans: LoanCriteria[] = [];
  public tester:any = "";
  toppings = new FormControl('');
  disableSelect = new FormControl(false);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
    this.getLoans();
    this.getLoansSSS();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast1').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getLoans() {
    this.http.get<LoanCriteria[]>('/weatherforecastLoans').subscribe(
      (result) => {
        this.loans = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getLoansSSS() {
    this.http.get<any>('/weatherforecast/ABC12345ABC').subscribe(
      (result) => {
        this.tester = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'angularapp2.client';
}
