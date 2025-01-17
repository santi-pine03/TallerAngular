import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];

  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    })
  }
  ngOnInit() {
    this.getSeries();
  }

}
