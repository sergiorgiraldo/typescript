import {LoyaltLevels} from "./enum"
import {Countries, Prices} from "./types";
export default interface IReview { //use default to signal this is the main thing exported in this module. there can be only one default export per module
    name: string;
    stars: number;
    loyaltyUser: LoyaltLevels;
    date: string;
    description: any; //can be anything
}

export interface IProperty{
    image: string;
    title:string;
    price: Prices;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Countries; //called Type alias, like a domain
    };
    contact: [number,string];
    isAvailable: boolean;
}

export class MainProperty {
    src: string
    title: string
    reviews: IReview[]
    constructor(src, title, reviews) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}