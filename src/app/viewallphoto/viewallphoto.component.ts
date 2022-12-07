import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallphoto',
  templateUrl: './viewallphoto.component.html',
  styleUrls: ['./viewallphoto.component.css']
})
export class ViewallphotoComponent implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi }

  dataFromApi=()=>{
    this.api.fetchPhoto().subscribe(
      (response)=>{
        this.photo=response
      }
    )
  }
  photo:any=
  []

  ngOnInit(): void {
  }

}
