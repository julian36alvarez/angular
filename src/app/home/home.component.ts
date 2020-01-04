import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../services/clients.service';
import {HttpClient} from '@angular/common/http';
import {Client} from '../interfaces/client';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  API_ENDPOINT = 'http://pruebas.test/api';
  clients : Client[];
  constructor(private clientService: ClientsService, private httpClient: HttpClient) { 
  	httpClient.get( this.API_ENDPOINT + '/client').subscribe((data:Client[]) =>{ this.clients = data;
  	});
  }

  ngOnInit() {
  }

}
