import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

interface Profile {
  name: string;
}

@Component({
  selector: 'ps-http',
  templateUrl: './http.component.html'
})
export class HTTPComponent implements OnInit {
  profile: Profile;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // this.http.get<Profile>('http://localhost:3000/pofile').subscribe({
    //   next:  this.onData.bind(this),
    //   error: this.onError
    // });
    this.http.get<Profile>('http://localhost:3000/pofile').toPromise().then(this.onData.bind(this)).catch(this.onError);
  }
  private onData(data) {
    this.profile = data;
  }
  private onError(error){
    alert(error);
  }
}
