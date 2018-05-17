import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-assignlist',
  templateUrl: './assignlist.component.html',
  styleUrls: ['./assignlist.component.css']
})
export class AssignlistComponent implements OnInit {



student = [];

  constructor(private activatedRoute: ActivatedRoute,private http: Http){ }
  fetchData = function ()
   {

    this.http.get("http://10.10.5.4:5000/studentdetails").subscribe((res: Response)
    => {

        this.student = res.json();
       console.log(student)

}
    )
  }



addProduct = function(student) {

console.log("ioif"+ student)




var m={"studentid":student,"class":this.id,"section":this.ids,"year":2018}

   {

      const url = `${"http://10.10.5.4:5000/studenttoclasspost"}`;

      this.http.post(url, m).subscribe((res:Response) => {

        this.isAdded = true;
        console.log(res);
        alert("saved")

          })
        }

      }

  ngOnInit() {


  this.activatedRoute.params.subscribe(paramsId => {
          this.id = paramsId.class;
          this.ids = paramsId.section;

      });
      console.log("cggfhg "+this.id);
        console.log("cgg "+this.ids);











this.fetchData();
  }

}
