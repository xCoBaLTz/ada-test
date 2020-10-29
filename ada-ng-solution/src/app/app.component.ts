import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { take } from 'rxjs/operators';
import { Nodes } from './models/Nodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public nodes: Nodes[] = [];

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit(): void {
    this._loadNodes();
  }

  private _loadNodes(): void {
    this._apiService.getNodes().pipe(take(1))
      .subscribe((response: Nodes[]) => {
        this.nodes = response;
      });
  }
}
