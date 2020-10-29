import { Content } from './Content';

export class FileNodeDetails {
  public id: string;
  public title: string;
  public content: Content[];
  public connections: number;

  constructor(partial: Partial<FileNodeDetails>) {
    this.id = partial.id;
    this.title = partial.title;
    this.content = partial.content;
    this.connections = partial.connections;
  }
}
