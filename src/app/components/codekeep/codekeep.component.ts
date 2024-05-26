import { Component } from '@angular/core';
import { Validators,FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from './../../models/snippet';

@Component({
  selector: 'app-codekeep',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './codekeep.component.html',
  styleUrl: './codekeep.component.css'
})
export class CodekeepComponent {
  constructor(private db:DbService){}
  title = new FormControl('',[
    Validators.required
  ])
  code = new FormControl('',[
    Validators.required
  ])
  codeKeepForm = new FormGroup({
    title: this.title,
    code:this.code
  })
  keep(){
    console.log(this.codeKeepForm.value)
    this.db.addSnippets(this.codeKeepForm.value as Snippet);
  }
  reset(){
    this.codeKeepForm.reset();
  }
}
