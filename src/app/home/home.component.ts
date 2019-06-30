import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddExpensesComponent } from '../components/add-expenses/add-expenses.component';
import { ExpensesDataService } from '../services/expenses-data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['category', 'itemName', 'price', 'date'];
  dataSource = new MatTableDataSource([]);
  public pieChartLabels = ['Expenses Amount', 'Remaning amount'];
  public pieChartData = [];
  public expChartLabels = [];
  public expChartData = [];
  public chartType = 'doughnut';
  totalBurget: any = 0;
  expensesAmouont: any = 0;
  showChart: any = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialog: MatDialog, public expensesData: ExpensesDataService) {
    console.log(this.expensesData.getExpensesData())
    this.dataSource = new MatTableDataSource(this.expensesData.getExpensesData());
    this.getChartData();
  }
  getChartData() {
    this.expensesAmouont = this.expensesData.getTotalExpenses();
    this.totalBurget = this.expensesData.getBurget();
    this.pieChartData = [this.expensesAmouont, this.totalBurget - this.expensesAmouont];
    let expByCategary = this.expensesData.getDataByCategary();

   this.expChartLabels =expByCategary.category;
  this.expChartData = expByCategary.amount;
    this.showChart = true;
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  onAddExpenses() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Add Expenses'
    };
    const dialogRef = this.dialog.open(AddExpensesComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'added') {
        this.dataSource = new MatTableDataSource(this.expensesData.getExpensesData());
        this.getChartData();
      }
    });
  }

}
