import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {AppService} from './../app.service';
import { AppComponent } from '../app.component';
import { Song } from '../app.model';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css'],
  providers: [AppService]
})
export class EditJobComponent implements OnInit {
  playlistObject = new Song;
  constructor(public playlistService: AppService, private router : Router, public appcomponent : AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
   

    this.playlistService.editJob(form.value.title, this.appcomponent.JobEdited).subscribe(
      res => {
    console.log(this.appcomponent.JobEdited);
    console.log(form.value.title);
        this.router.navigateByUrl('/search');
        
        this.resetForm(form);

        alert("You have edited job title!")
      },
      err => {

        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    this.playlistService.selectedSong = {
      title: '',
    company: '',
    summary: '',
   
    
    };
    form.resetForm();
  }

}
