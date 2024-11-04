import { Component } from '@angular/core';
import { AvesApiService } from '../services/aves-api.service';
import { Ave } from '../interfaces/ave';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  aves: Ave[] = [];
  constructor(private readonly service: AvesApiService) {};

  ngOnInit(): void{

    const listaAves = localStorage.getItem('aves');

    if(listaAves){
      this.aves = JSON.parse(listaAves);
      console.log('Aves desde Local Storage')
    } else {
      this.service.obtenerAves().subscribe((data: Ave[])=>{
        localStorage.setItem('aves', JSON.stringify(data));
        this.aves = data;
        console.log('Aves desde Api')
      });
    }


    
  };


}
