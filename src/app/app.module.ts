import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTableModule, 
  MatPaginatorModule, 
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,  } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';
import { AddExpensesComponent } from './components/add-expenses/add-expenses.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    SidebarComponent,
    AddExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
        FormsModule,
        ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    ChartsModule,
    MatPaginatorModule,
    
  ],
entryComponents: [
 AddExpensesComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
