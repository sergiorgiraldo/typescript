import {LoyaltLevels} from "./enum"

export default interface IReview { //use default to signal this is the main thing exported in this module. there can be only one default export per module
    name: string;
    stars: number;
    loyaltyUser: LoyaltLevels;
    date: string;
    description: any; //can be anything
}