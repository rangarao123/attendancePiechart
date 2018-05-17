
import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-teacherreg',
  templateUrl: './teacherreg.component.html',
  styleUrls: ['./teacherreg.component.css']
})

export class TeacherregComponent implements OnInit {

  constructor( private http: Http, private router: Router, private route: ActivatedRoute) { }
  class=[];
  section=[];
  subjects=[];
  teacherid=[];
  fetchclass=function()
  {
    this.http.get("http://10.10.5.4:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();
  
         // var classes=this.class[0].classname;
  
       // console.log("vsjfbvckjs "+this.teacherslist)
  
     
      }
  )
  }
  fetchstudentid=function()
  {
    this.http.get("http://10.10.5.54:3002/fetch").subscribe (
      (res:Response) =>{
        this.teacherid=res.json();
  
         // var classes=this.class[0].classname;
  
       // console.log("vsjfbvckjs "+this.teacherslist)
  
     
      }
  )
  }
  fetchsection=function(pro)
  {
    var hash={};
    hash['one']='onellll';
    console.log(hash['one'])
    this.http.get("http://10.10.5.4:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();
         // var classes=this.class[0].classname;
         var data = this.class;
  
         for(var i in data)
         {
              var id = data[i].classes.classid;
            hash[data[i].classes.classname]=data[i].classes.sections
         }
    
  this.section=hash[pro]
        
      }
    )
  }
  
  fetchsubjects=function(pro)
  {
    var hash={};
    
    this.http.get("http://10.10.5.4:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();
         // var classes=this.class[0].classname;
         var data = this.class;
  
         for(var i in data)
         {
              var id = data[i].classes.classid;
            hash[data[i].classes.sections[i]]=data[i].classes.subjects
         }
    
  this.subjects=hash[pro]
        
      }
    )
  }
  

  ngOnInit() {
  //  this.fetchDate();
    this.fetchclass();
  this.fetchstudentid();
    
  }
  onSubmit=function(Teacher_Info) {
    alert(JSON.stringify(Teacher_Info))
   

    if(confirm("ARE U SURE FOR ADD?"))
    {var Teacher=JSON.stringify(Teacher_Info)
      alert("SUDHER"+Teacher)
      var tname=Teacher_Info.Teacher_Id;
      console.log(Teacher)
      //const url="http://10.10.5.54:3004/update"+"/"+tname;
      const url="http://10.10.5.54:3004/add";

alert(url)

      this.http.post(url,Teacher_Info).toPromise()
      .then(res => console.log(Teacher_Info,<any[]> res.json()))
                   
      
      .then(data => { return data; });
//alert("successfully ADDED....!")
    
    }
}

}
