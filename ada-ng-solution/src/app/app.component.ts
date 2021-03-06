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


  constructor(private apiService: ApiService) {
  }


  public ngOnInit(): void {
    this._getNodes();
  }

  public onTitleClicked(id: string): void {
    this._getNode(id);
  }


  public onSearchChanged(search: string): void {
    this.fullNodeDetails = null;
    !!search ? this._getNodesBySearchTerm(search) : this._getNodes();
  }

  private _getNodesBySearchTerm(search: string): void {
    this.apiService.getNodesBySearchTerm(search).pipe(take(1))
      .subscribe((response: FileNode[]) => {
        this.titleNodes = response.map(value => {
          return {
            id: value.id,
            title: value.title
          } as FileNode;
        });
      }, (error: HttpErrorResponse) => {
        alert(`Error: ${error.message}, Status: ${error.status}: ${error.statusText}`);
      });
  }


  private _getNodes(): void {
    this.apiService.getNodes().pipe(take(1))
      .subscribe((response: FileNode[]) => {
        this.titleNodes = response.map(value => {
          return {
            id: value.id,
            title: value.title
          } as FileNode;
        });
      }, (error: HttpErrorResponse) => {
        alert(`Error: ${error.message}, Status: ${error.status}: ${error.statusText}`);
      });
  }

  private _getNode(id: string): void {
    this.apiService.getNodeById(id).pipe(take(1))
      .subscribe((response: FileNodeDetails[]) => {
        if (!response || response.length === 0) {
          alert(`Error: No node found with id: ${id}`);
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
        alert(`Error: ${error.message}, Status: ${error.status}: ${error.statusText}`);
      });
  }
}
