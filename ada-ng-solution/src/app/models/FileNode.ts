export class FileNode {
  public id: string;
  public title: string;

  constructor(partial: Partial<FileNode>) {
    this.id = partial.id;
    this.title = partial.title;
  }
}
