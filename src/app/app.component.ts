import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { firebaseConfig } from './../firebaseConfig';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    initializeApp(firebaseConfig);
  }
}