import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class RepositoriosService {
  constructor(private http: HttpClient) {
    
  }
  getRepos(){
    return this.http.get("https://api.github.com/users/lucasalderete/repos");
  }

}
