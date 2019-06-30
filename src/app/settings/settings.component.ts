import { Component, OnInit } from '@angular/core';
import { ExpensesDataService } from "src/app/services/expenses-data.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  ingrName = '';
  catName: any = '';
  amount: any = 0;
  constructor(private expensesData: ExpensesDataService) {
    this.amount = expensesData.getBurget();
  }

  ngOnInit() {
  }
  addCategary() {
    let catData = { categoryType: this.catName.substring(0, 3).toUpperCase(), category: this.catName };
    this.expensesData.addCategory(catData);
    alert("Catagery Added");
    this.catName = '';
  }
  updateBudget() {
    this.expensesData.updateBurget(this.amount);
    alert('Budget Updated');
    this.amount = this.expensesData.getBurget();
  }

}
