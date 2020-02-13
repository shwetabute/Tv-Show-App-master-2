import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ItvShow } from './itv-show';
import { ItvShowData } from './itv-show-data';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailService {

  constructor(private httpClient: HttpClient) { }

  getShowDetail(name: string): 
  Observable<ItvShow>{
    return this.httpClient.get<ItvShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`
    ).pipe(map(data => this.transformToItvshow(data)));
  }
  private transformToItvshow(data: ItvShowData) : ItvShow{
    return {
      name: data.name,
      language: data.language,
      rating: data.rating.average,
      genres: data.genres,
      summary: data.summary,
      image: data.image.medium,
      country: data.network.country.name
    }
  }
}
