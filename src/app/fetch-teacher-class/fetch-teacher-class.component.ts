import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-fetch-teacher-class',
  templateUrl: './fetch-teacher-class.component.html',
  styleUrls: ['./fetch-teacher-class.component.css']
})
export class FetchTeacherClassComponent implements OnInit {
  S=[];
    Class=[];
    stu=[];
  constructor(private activatedRoute: ActivatedRoute,private http: Http,private _cookieService:CookieService) {
  }
  onClickSubmit(data) {
       }

      fetchClass=function(cls){
        console.log(cls)
          var res1 = cls.charAt(0);
          console.log(res1);
          var res2 = cls.charAt(1)
            console.log(res2);
            this.http.get("http://10.10.5.4:5000/filter/"+res1+"/"+res2).subscribe(
              (res:Response)=>{
              this.stu=res.json();
              console.log(res.json());
              }
              )
          }

  ngOnInit() {
      this.activatedRoute.params.subscribe(paramsId => {
          this.id = paramsId.id;
      });
      console.log(this.id);
      this.S=[]



      console.log("cookie "+this.getCookie("id"));

  this.http.get("http://localhost:3004/class/"+this.id).subscribe(
    (res:Response) =>{
    this.Class= res.json();

  //  console.log(res.json())

   var data=this.Class;
     for (var i in data)
       {
          console.log(data[i].Class);
          console.log(data[i].Section);
          this.S.push(data[i].Class+data[i].Section)
       }

   }
 )
}

    getCookie(key:string){
        return this._cookieService.get(key);
      }
}
