import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:3000/api/contacts/';
  
  public getContacts(){
    return this.httpClient.get<Contact[]>(`${this.apiURL}`);
}

  constructor(private httpClient: HttpClient) { }

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

public createCustomer(contact: Contact){}

public updateCustomer(contact: Contact){}
}
