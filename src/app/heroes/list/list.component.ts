import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroeNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman']

  public heroeDeleted?: string;

  deleteLastHeroe():void{
    this.heroeDeleted = this.heroeNames.pop();
  }
}
