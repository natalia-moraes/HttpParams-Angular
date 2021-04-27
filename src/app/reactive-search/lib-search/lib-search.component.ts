import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly searchUrl = 'https://api.cdnjs.com/libraries';

  resultado!: any;
  total!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(){
    
    const fields = 'name, description,version,homepage';
    let value = this.queryField.value;

    if(value && (value = value.trim()) !== ''){
      this.resultado = this.http.get(this.searchUrl + '?fields=' +fields + '&search=' + value).pipe(
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)
      );
    }
  }

}
