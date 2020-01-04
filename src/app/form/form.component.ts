import { Component, OnInit } from '@angular/core';
import {Client} from '../interfaces/client';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  client : Client = {
  nombres: null,
	apellidos: null,
	cedula: null,
	telefono: null,
	correo: null
  }
   id: any;
   errors : '';
   editing: boolean;
   clientes: Client[];
  constructor(private clientsService : ClientsService, private activatedRute:ActivatedRoute) { 
    this.id = this.activatedRute.snapshot.params['id'];
    
    if(this.id){
      this.editing = true;
      this.clientsService.get().subscribe((data: Client[] )=>{
        this.clientes = data;
        this.client = this.clientes.find((m)=> {return m.id == this.id});
        console.log(this.client);
      }, err => {
        this.errors = err
      } );
      
    }else {
      this.editing = false;
    }
  }
  ngOnInit() {
  }

  saveClient(){
  
  if(this.editing){ 
  this.clientsService.put(this.client).subscribe( (data) => {
  	console.log(data) ; 
  }, (error) => {
  	console.log(error); 
  });
} else{
  this.errors = null;
  this.clientsService.save(this.client).subscribe( (data) => {
  	console.log(data) ; 
  }, err => {
    this.errors = err.error.data
    console.log(err)
  } );

}
}


  
}
