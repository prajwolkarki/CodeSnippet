import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewsnippet',
  standalone: true,
  imports: [],
  templateUrl: './viewsnippet.component.html',
  styleUrl: './viewsnippet.component.css'
})
export class ViewsnippetComponent {
    
  codeSnippet = {
    title:"",
    code:""
  }
  constructor(private db:DbService,private activatedRoute :ActivatedRoute) { }
  ngOnInit(){
    const snippetId = this.activatedRoute.snapshot.paramMap.get('id');
    this.db.getSnippet(snippetId!).then((data:any)=>{
      console.log(data);
      this.codeSnippet = data;
    });

  }
}
