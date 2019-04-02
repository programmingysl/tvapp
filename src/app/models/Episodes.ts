export class Episodes {

  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  runtime: number;
  summary: unknown;
  image: any;
  links: string;


  constructor(args?) {
    this.id = args.id;
    this.url = args.url;
    this.name = args.name;
    this.season = args.season;
    this.number = args.number;
    this.airdate = args.airdate;
    this.airtime = args.airtime;
    this.runtime = args.runtime;
    this.image = (args.image) ? args.image.medium : null;
    this.summary = args.summary;
    this.summary = this.summary as HTMLInputElement;
    this.links = (args._links)  ? args._links.self.href : null;
  }

}
