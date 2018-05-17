import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';



@Component({
  selector: 'app-assignclasstostudent',
  templateUrl: './assignclasstostudent.component.html',
  styleUrls: ['./assignclasstostudent.component.css']
})
export class AssignclasstostudentComponent implements OnInit {



student=[];
stu=[];
    constructor(private http: Http) { }


ngOnInit()

     {


          this.http.get("http://10.10.5.4:5000/getClass").subscribe((res: Response)
           => {
              this.student = res.json();
             console.log(this.student)


var data=this.student

 for (var i in data)
 {


  for(var k=0; k<data[i].classes.sections.length;k++){

 var msg2 = {

  classes:data[i].classes.classid,
   section:data[i].classes.sections[k]

 }
 console.log(msg2)
 this.stu.push(msg2);

 }

 }


   )}





}
}
