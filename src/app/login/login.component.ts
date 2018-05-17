import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule,Router , ActivatedRoute, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cookieService:CookieService,private router: Router) { }
  onClickSubmit(data) {
    this._cookieService.put('id', data.uname);
        console.log("Set Test Cookie as Test");
  console.log("cookie "+this.getCookie("id"));
  this.router.navigate(['/teacherdashboard']);
      }
  ngOnInit() {

}
getCookie(key: string){
    return this._cookieService.get(key);
  }
}
