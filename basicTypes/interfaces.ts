import {LoyaltLevels} from "./enum"

export interface IReview {
    name: string;
    stars: number;
    loyaltyUser: LoyaltLevels;
    date: string;
    description: any; //can be anything
}