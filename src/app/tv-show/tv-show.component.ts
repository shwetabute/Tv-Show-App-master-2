import { Component, OnInit } from '@angular/core';
import { ItvShow } from '../itv-show';
import { ShowDetailService } from '../show-detail.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  current: ItvShow
  constructor(private showDetail: ShowDetailService) { }

  ngOnInit(): void {
    this.showDetail.getShowDetail('Gilmore Girls')
    .subscribe(data => this.current = data)
  }

}
