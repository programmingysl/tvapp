import {Episodes} from './Episodes';

export class Seasons {

  id: number;
  url: string;
  name: string;
  number: number;
  episodeorder: number;
  premierDate: string;
  endDate: string;
  summary: string;
  image: any;
  links: string;
  episodes: Episodes;


  constructor(args?) {
    this.id = args.id;
    this.url = args.url;
    this.name = args.name;
    this.episodeorder = args.episodeorder;
    this.number = args.number;
    this.premierDate = args.premierDate;
    this.endDate = args.endDate;
    this.image = (args.image) ? args.image.medium : null;
    this.summary = args.summary;
    this.links = (args._links)  ? args._links.self.href : null;
  }

  getEpisode(ep: Episodes) {
    this.episodes = ep;
  }

}

