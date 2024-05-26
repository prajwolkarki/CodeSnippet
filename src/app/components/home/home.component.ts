import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  constructor(private db:DbService) { }
  snippets:any = [];
  ngOnInit(){
    this.db.getAllSnippets().then((data:any)=>{
      this.snippets = data;
    });
  }
}
