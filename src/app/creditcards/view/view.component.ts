import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

    creditCardDetails!: CreditCard;

    constructor(private creditCardServices: CreditcardsService) {
      this.creditCardServices.getCreditCardByID(3).subscribe((data:CreditCard) => {
        this.creditCardDetails = data;
      })
    }
}
