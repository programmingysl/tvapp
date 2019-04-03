import {Episodes} from './Episodes';

export class Shows {
 // properties
  id: number;
  name: string;
  runtime: number;
  premiered: string;
  status: string;
  image: any;
  summary: string;
  prevEpUrl: string;
  nextEpUrl: string;
  prevEpisode: Episodes;
  nextEpisode: Episodes;

  // constructor
  constructor(args?) {


    if (args) {
    // this refers to item.show in the shows component and we are assigning to the class properties
      this.id = args.id;
      this.name = args.name;
      this.premiered = args.premiered;
      this.status = args.status;
      this.image = (args.image) ? args.image.medium : null;


      this.summary = args.summary;

       this.prevEpUrl = (args._links.previousepisode) ?  args._links.previousepisode.href : null;
       this.nextEpUrl = (args._links.nextepisode) ? args._links.nextepisode.href : null;
    }
  }


  setPrevEpisode(ep: Episodes) {
    this.prevEpisode = ep;
  }

setNextEpisode(ep: Episodes) {
  this.nextEpisode = ep;

}

}
