export class Episodes {

  id: number;
  url: string;
  name: string;
  runtime: number;
  premiered: Date;
  schedule: object;
  rating: object;
  network: object;
  image: object;
  summary: string;
  links: object;





  /*
  name: string;
  website: string;
  phone: string;
  rating: number;
  avgMealPrice: number;
  reviews: Review[];
  location: Address;


  constructor(args?) {


    if(args !== null) {


      this.name = args.name;
      this.website = args.website;
      this.phone = args.phone;
      this.rating = args.rating;
      this.avgMealPrice = args.avgMealPrice;

      // location= new Address(arguments?);
      // console.log(args.location.city);

      // I don't know why this works but it works !!!
      this.location = new Address({});
      console.log("location value is: "+args.location);

      if(args.location !== null) {
        this.location.streetNumber = args.location.streetNumber;
        this.location.streetName = args.location.streetName;
        this.location.apartment = args.location.apartment;
        this.location.city = args.location.city;
        this.location.province = args.location.province;
        this.location.country = args.location.country;
      }

      else {
        this.location = null;

      }
    }
  }*/
}
