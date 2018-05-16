//import 'rxjs/add/operator/toPromise';
//import 'rxjs/Rx';
//import {Observable} from "rxjs/Rx";


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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private http: Http, private router: Router, private route: ActivatedRoute) { 
  }
  private headers =new Headers({'ContentType':'application/json'})
   teacher=[];
   class=[];
   section=[];
   subjects=[];
   timein=[];
   timeout=[];
   day=[];
   fetchDate=function()
   {

     this.http.get("http://10.10.5.54:3004/fetch").subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)

         
         console.log(this.Teacher_Name)

      
       }
  )
   }
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


/*fetchtimein=function()
{
  var hash={};

  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timein)
     
     
   
    }
)
}
fetchtimeout=function()
{
  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timeout)

     
   
    }
)
}*/

/*fetchday=function()
{
  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.day=res.json();
      console.log(this.day)

     
   
    }
)
}*/


  ngOnInit() {
    this.fetchDate();
this.fetchclass();
 // this.fetchsection();
//this.fetchtimein();
 //this.fetchtimeout();
 //this.fetchday();
  }
  onSubmit=function(Teacher_Name) {
    alert(JSON.stringify(Teacher_Name))
   

    if(confirm("ARE U SURE FOR UPDATE?"))
    {
      alert(Teacher_Name.Teacher_Name)
      var tname=Teacher_Name._id;
      console.log(Teacher_Name)
      const url="http://10.10.5.54:3004/update"+"/"+tname;
      //const url="http://10.10.5.54:3004/post";

alert(url)

      return this.http.put(url,Teacher_Name).toPromise()
      .then(res => console.log(<any[]> res.json()))
                   
      
      .then(data => { return data; });
     // alert("successfully updated....!")
    
    }
}


}