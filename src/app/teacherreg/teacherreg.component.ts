
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

  ngOnInit() {
  }
  onSubmit=function(Teacher_Info) {
    alert(JSON.stringify(Teacher_Info))
   

    if(confirm("ARE U SURE FOR ADD?"))
    {var Teacher=JSON.stringify(Teacher_Info)
      alert("SUDHER"+Teacher)
      var tname=Teacher_Info._id;
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
