import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Song } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedSong: Song = {
    title: '',
    company: '',
    summary: '',

  };

  constructor(private http: HttpClient) { }

  searchSong(word){
    //console.log(word);
    return this.http.get(environment.apiBaseUrl+'/jobsearch/' +word);
    console.log(word);
  }

  editJob(newName,oldName){
    return this.http.post(environment.apiBaseUrl+'/jobedit',{old: oldName, new:newName});
  }

  show(obj)
  {  
      var ele1 = document.createElement("p")
      var node1 =document.createTextNode("Title:" + obj.Title);
      ele1.appendChild(node1);
      document.getElementById("info").appendChild(ele1);

      var ele2 = document.createElement("p")
      var node2 =document.createTextNode("type:" + obj.type);
      ele2.appendChild(node2);
      document.getElementById("info").appendChild(ele2);
  
      var ele3 = document.createElement("p")
      var node3 =document.createTextNode("loan:" + obj.loan);
      ele3.appendChild(node3);
      document.getElementById("info").appendChild(ele3);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("quantity:" + obj.quantity);
      ele4.appendChild(node4);
      document.getElementById("info").appendChild(ele4);

      var ele5 = document.createElement("p")
      var node5 =document.createTextNode("name:" + obj.name);
      ele5.appendChild(node5);
      document.getElementById("info").appendChild(ele5);
  
      var ele2 = document.createElement("p")
      var node2 =document.createTextNode("type:" + obj.type);
      ele2.appendChild(node2);
      document.getElementById("info").appendChild(ele2);
  
      var ele3 = document.createElement("p")
      var node3 =document.createTextNode("loan:" + obj.loan);
      ele3.appendChild(node3);
      document.getElementById("info").appendChild(ele3);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("quantity:" + obj.quantity);
      ele4.appendChild(node4);
      document.getElementById("info").appendChild(ele4);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("***********");
      ele4.appendChild(node4);
      document.getElementById("info").appendChild(ele4);
  
  
    }
}
