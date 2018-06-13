import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';



@Component({
  selector: 'app-assignmentview',
  templateUrl: './assignmentview.component.html',
  styleUrls: ['./assignmentview.component.css']
})
export class AssignmentviewComponent implements OnInit {
  class=[];
  student=[];
  stu=[];
cln:any;
sec:any;
section=[];
subject=[];
    hash={};
    hash1={};


  constructor(private http: Http) { }



  class=[];
  student=[];
  stu=[];
cln:any;
sec:any;
section=[];
subject=[];



  constructor(private http: Http) { }

  fetchclasses=function()
  {
    this.http.get("http://10.10.5.69:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();
        var data=this.class;
        console.log(JSON.stringify(data))
        for(var i in data){
        this.cln=data[i].classes.classname;
        console.log(this.cln)

this.student.push(this.cln)

}
})
}

  fetchsection=function(pro)
  {
    var hash={};

    this.http.get("http://10.10.5.69:5000/getClass").subscribe (
      (res:Response) =>{
        this.class=res.json();
         // var classes=this.class[0].classname;
         var data = this.class;

         for(var i in data)
         {
           this.cln = data[i].classes.classname;
         hash[this.cln]=data[i].classes.sections

        this.section=hash[pro]
}
      }
    )
  }

  fetchsubject=function(sub)
  {
    var hash={};

    this.http.get("http://10.10.5.69:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();
         // var classes=this.class[0].classname;
         var data = this.class;

         for(var i in data)
         {
             this.cln = data[i].classes.classname;
              hash[this.cln] = data[i].classes.subjects;

         }

  this.subject=hash[this.cln]
  console.log(this.subject)

      }
    )
  }





  onSubmit(f1)
{
  console.log(f1)
  var cls=document.getElementById("class").value;
  var sec=document.getElementById("section").value;
  var sub=document.getElementById("subject").value;
  var  title=document.getElementById("title").value;
  var des=document.getElementById("description").value;
console.log(cls)
console.log(sec)
console.log(sub)
console.log(title)
console.log(des)
  var a=(JSON.stringify(f1))
  var b=[];
  var ass={
    "subject":sub,
    "description":des,
    "title":title
    "file":"rt.pdf"
  }
  b.push(ass);
  console.log(b)
  var m={
    "teacherid":"101",
    "schoolid":"ex1",
    "class":cls,
    "section":sec,
    "assignment":b

  }
  console.log(m)


  this.http.post("http://localhost:3000/post",m).subscribe(
    (res:Response)=>{
    //  console.log(Subject)



      console.log(m+"nwL")
    this.a=res.json();
    console.log(res.json());

  })

    console.log("dsbAL")
  }


  ngOnInit() {
this.fetchclasses();

}
}
