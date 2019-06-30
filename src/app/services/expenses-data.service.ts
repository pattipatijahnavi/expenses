import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesDataService {
  constructor() { }
  totalBurget: number = 20000;
  groceryData = [
    { id: 1, categoryType: 'GRO', category: 'Grocery', itemName: 'Bread', price: 3500, date: '23/3/2019' },
    { id: 1, categoryType: 'FD', category: 'Food and Drinks', itemName: 'Dinner', price: 2500, date: '28/3/2019' }
  ]
  categoryData = [
    { categoryType: 'GRO', category: 'Grocery' },
    { categoryType: 'FD', category: 'Food and Drinks' }
  ]
  addExpenses = expensesItem => {
    console.log(expensesItem);
    this.groceryData.push(expensesItem);
  }
  getExpensesData = () => this.groceryData;

  addCategory = category => {
    this.categoryData.push(category);
  }
  getCategoryData = () => this.categoryData;

  updateBurget = (amount) => {
    this.totalBurget = amount;
  }
  getBurget = () => this.totalBurget;



  getTotalExpenses = () => {
    let totalExpenses = 0;
    this.groceryData.forEach(function (element) {
      totalExpenses = totalExpenses + element.price
    });
    return totalExpenses;
  }


  getDataByCategary() {
    let dataByCategary = {
      category:[],
      amount:[]
    };
    this.categoryData.forEach((cat) => {
      let catTotalAmount = 0;
      this.groceryData.forEach((element) => {
        if(element.categoryType===cat.categoryType){
          catTotalAmount = catTotalAmount + element.price;
        }
      });
      dataByCategary.category.push(cat.categoryType)
      dataByCategary.amount.push(catTotalAmount)
    });
    return dataByCategary;
  }
}
