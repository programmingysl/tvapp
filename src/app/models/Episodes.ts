export class Episodes {

  // properties
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

 // args is the JSON object containing properties ; the same ones as listed here to assign to them (from json properties to local class properties)
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
    this.summary = this.summary as HTMLInputElement; // tried something for innerHTML tooltip but not succesful
    this.links = (args._links)  ? args._links.self.href : null;
  }

}
