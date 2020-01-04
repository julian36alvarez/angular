import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../interfaces/client';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/client');
  }
  API_ENDPOINT = 'http://pruebas.test/api';
  constructor(private httpClient: HttpClient) { }
  save(client: Client) {
  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  return this.httpClient.post( this.API_ENDPOINT + '/client', client, {headers: headers} );
  }

  put(client) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put( this.API_ENDPOINT + '/client/' + client.id, client, {headers: headers} );
    }
   
}
