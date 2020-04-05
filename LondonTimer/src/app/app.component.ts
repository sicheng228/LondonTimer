import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'London Clock';
  timeZone=new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
  date=new Date(this.timeZone);

  second=this.date.getSeconds();
  minute=this.date.getMinutes();
  hour=this.date.getHours()%12;
  day=this.date.getHours()>= 12 ? 'PM' : 'AM';
  clock=setInterval( () => {
         this.second = (this.second+1)%60;
         if (this.second==0){
           this.minute = (this.minute+1)%60;
         }
         if (this.minute==0&&this.second==0){
           this.hour = (this.hour+1)%12;
         }
         if(this.hour==0&&this.day=='PM'){
           this.day='AM';
         }else if(this.hour==0&&this.minute==0&&this.second==0&&this.day=='AM'){
           this.day='PM';
         }
  }, 1000);

  auth_second=false;
  auth_minute=false;
  auth_day=false;
  auth_hour=false;
  auth_enter=false;

  stop_second(){
      clearInterval(this.clock);
      this.auth_second=true;
      this.auth_enter=true;
  };
  stop_minute(){
      clearInterval(this.clock);
      this.auth_minute=true;
      this.auth_enter=true;
  };
  stop_day(){
      clearInterval(this.clock);
      this.auth_day=true;
      this.auth_enter=true;
  };
  stop_hour(){
      clearInterval(this.clock);
      this.auth_hour=true;
      this.auth_enter=true;
  };
  enter(){
    this.clock=setInterval( () => {
           this.second = (this.second+1)%60;
           if (this.second==0){
             this.minute = (this.minute+1)%60;
           }
           if (this.minute==0&&this.second==0){
             this.hour = (this.hour+1)%12;
           }
           if(this.hour==0&&this.minute==0&&this.second==0&&this.day=='PM'){
             this.day='AM';
           }else if(this.hour==0&&this.minute==0&&this.second==0&&this.day=='AM'){
             this.day='PM';
           }
    }, 1000);
    this.auth_minute=false;
    this.auth_second=false;
    this.auth_hour=false;
    this.auth_day=false;
    this.auth_enter=false;
  }
}
