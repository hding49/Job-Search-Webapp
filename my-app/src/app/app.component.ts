import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import {SongService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SongService]
})
export class AppComponent  {
  title = 'my-app';
  showSucessMessage: boolean;
  serverErrorMessages: string;
  public song : any;
  searchIF = true;
  detail = new Array;
  // judge = this.appcomponent.logged;
  //details = true;

  constructor(private songService: SongService,private router : Router) { }

  onSubmit(form: NgForm) {
    var word = document.getElementById("search")["value"];
    this.songService.searchSong(word).subscribe(
      res => {
        
        this.song = res;
        //console.log(this.song);
      
      },
      err => { 
        console.log(err);
        
      }
    );

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
  
  console.log("1");
}


}
