export class Nodes {
  public id: string;
  public title: string;

  constructor(partialData: Partial<Nodes>) {
    this.id = partialData.id;
    this.title = partialData.title;
  }
}