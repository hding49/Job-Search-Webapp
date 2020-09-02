import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import {AppService} from './../app.service';
import { AppComponent } from '../app.component';
import { Song } from '../app.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'my-app';
  showSucessMessage: boolean;
  serverErrorMessages: string;
  public song : any;
  searchIF = true;
  detail = new Array;
  public JobEdited : String;
  details = true;

  ngOnInit() {
  }

  constructor(private songService: AppService,private router : Router) { }

  onSubmit(form: NgForm) {
    var word = document.getElementById("search")["value"];
    console.log(word);
    this.songService.searchSong(word).subscribe(
      res => {
        console.log(1);
        this.song = res;
        console.log(this.song);
      
      },
      err => { 
        console.log(2);
        console.log(err);
        
      }
    );

}

edit(object2) {
  this.JobEdited = object2;
  console.log(object2);
  this.router.navigateByUrl('/edit-job');
  
}


getdetails(i) {
  if (this.detail[i] == true)
  {
    this.detail[i] = false;
  }

  else
  {
    this.detail[i] = true;
  }
  
  console.log("3");
}

  

}
