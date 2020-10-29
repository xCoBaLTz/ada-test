import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { take } from 'rxjs/operators';
import { FileNode } from './models/FileNode';
import { HttpErrorResponse } from '@angular/common/http';
import { FileNodeDetails } from './models/FileNodeDetails';
import { Content } from './models/Content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public titleNodes: FileNode[] = [];
  public fullNodeDetails: FileNodeDetails;


  constructor(private _apiService: ApiService) {
  }


  public ngOnInit(): void {
    this._getNodes();
  }

  public onTitleClicked(id: string) {
    this._getNode(id);
  }


  private _getNodes(): void {
    this._apiService.getNodes().pipe(take(1))
      .subscribe((response: FileNode[]) => {
        this.titleNodes = response.map(value => {
          return {
            id: value.id,
            title: value.title
          } as FileNode;
        });
      }, (error: HttpErrorResponse) => {
        console.log(`Error: ${error.message}, Status: ${error.status}: ${error.statusText}`);
      });
  }

  private _getNode(id: string): void {
    this._apiService.getNodeById(id).pipe(take(1))
      .subscribe((response: FileNodeDetails[]) => {
        if (!response || response.length === 0) {
          console.log(`Error: No node found with id: ${id}`);
          return;
        }

        this.fullNodeDetails = new FileNodeDetails({
          id: response[0]?.id,
          title: response[0]?.title,
          connections: response[0]?.connections,
          content: response[0]?.content.map((value: Content) => {
            return {
              type: value.type,
              body: value.body,
              url: value.url
            } as Content;
          })
        });
      }, (error: HttpErrorResponse) => {
        console.log(`Error: ${error.message}, Status: ${error.status}: ${error.statusText}`);
      });
  }
}
