import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  {RepositoriosService} from './repositorios.service'
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.css']
})


export class RepositoriosComponent implements OnInit {
  repositorios: any = [];
  repositorio: IRepositorio = { name: "", description: "" };
  newRepo: IRepositorio = { name: "", description: "" };
  constructor(private repoService : RepositoriosService ) {

  }

  ngOnInit() {
    this.repoService.getRepos().subscribe((data)=>{
      this.repositorios = data
      this.repositorio = this.repositorios[0];
    });
  }

  setMainRepositorio(repo: IRepositorio) {
    this.repositorio = repo;
  }
  addNewRepo() {
    this.repositorios.unshift(this.newRepo);
    this.newRepo = { name: "", description: "" };
  }
  
}

interface IRepositorio {
  name: string,
  description: string
}
