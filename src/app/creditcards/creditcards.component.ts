import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service';


@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  creditcards: CreditCard[] = [];

  constructor(private creditcardService: CreditcardsService) {
    this.creditcardService.getCreditcard().subscribe((data:CreditCard[]) => {
      this.creditcards = data;
      this.dataSource = new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log()
    })
  
  }
  dataSource = new MatTableDataSource(this.creditcards);
  displayCoulmns = ["select", "cardName", "bankName", "description", "maxCredit", "active", "annualFee", "interestRate", "introOffer", "recommendedCreditScore", "numberOfApplications", "termsAndConditions", "actions"];

  

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }

}
