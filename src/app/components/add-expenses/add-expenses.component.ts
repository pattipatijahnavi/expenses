import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExpensesDataService } from "src/app/services/expenses-data.service";

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  modalTitle: string;
  categoryData: any = [];
  selectedCategory: any = 'category';
  enteredItemName: any = '';
  expensesPrice: any = '';
  constructor(public dialogRef: MatDialogRef<AddExpensesComponent>, 
  public expensesData: ExpensesDataService,
   @Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    console.log(data, expensesData.getCategoryData())
    this.categoryData = expensesData.getCategoryData();

  }
  ngOnInit() {
  }

  addExpenses() {
    if (this.selectedCategory === 'category') {
      alert('Please select category');
    } else if (this.enteredItemName === '') {
      alert('please enter Item Name');
    } else if (this.expensesPrice === '') {
      alert('please enter price');
    } else {
      let expenses = { id: Math.floor(10000 + Math.random() * 90000), categoryType: this.selectedCategory, category: this.getSelectedCatName(this.selectedCategory).category, itemName: this.enteredItemName, price: this.expensesPrice, date: this.getCurrentDate() }
      this.expensesData.addExpenses(expenses);
      this.dialogRef.close('added');
    }
  }
  getSelectedCatName = (type) => this.categoryData.find(catData => catData.categoryType === type)

  getCurrentDate = () => {
    const today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy;
  }
}
