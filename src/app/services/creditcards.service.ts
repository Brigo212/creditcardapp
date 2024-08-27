import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiURL = "http://localhost:3000/creditcards";


  constructor(private httpClient: HttpClient) { }

  //methods
  //Create new credit card
  createCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.httpClient.post<CreditCard>(this.apiURL,creditCard);
  }

  //Get All Credit Cards
  getCreditcard(): Observable<CreditCard[]>{
    return this.httpClient.get<CreditCard[]>(this.apiURL);
  }

  // Get Specific Credit Card
  getCreditCardByID(id: number): Observable<CreditCard> {
    const url = `${this.apiURL}/${id}`;
    return this.httpClient.get<CreditCard>(url);
  }

  //Update Funcionality
  updateCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    const url = `${this.apiURL}/${creditCard.id}`;
    return this.httpClient.put<CreditCard>(url, creditCard);
  }

  //Delete specific Credit Card
  deleteCreditCard(id: number): Observable<void> {
    const url = `${this.apiURL}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
