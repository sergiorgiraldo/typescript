import {LoyaltLevels, Permissions} from "./enum"; 
import IReview, { IProperty } from "./interfaces"; //notice this does not have curly braces as IReview is the default
import {MainProperty} from "./interfaces"

export const reviews: IReview[] = 
[
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltLevels.GOLD_USER,
        date: '2021-04-03',
        description:'Sheia'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltLevels.BRONZE_USER,
        date: '2021-03-28',
        description:12
    },
    {
        name: 'Jane Doe',
        stars: 5,
        loyaltyUser: LoyaltLevels.GOLD_USER,
        date: '2022-01-28',
        description:true
    },
    {
        name: 'Omar',
        stars: 2,
        loyaltyUser: LoyaltLevels.SILVER_USER,
        date: '2021-03-27',
        description: LoyaltLevels.BRONZE_USER
    },
];

reviews.sort(function(a, b) {
    return Date.parse(b.date) - Date.parse(a.date);
});

export const Property:IProperty[] = 
[
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 25,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 30,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malasia.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malasya',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
];

export const you:{
    firstName: string;
    lastName: string;
    isReturning: boolean;
    permissions: Permissions;
    age:number;
    stayedAt: string[]; // you can have mixed types // stayedAt: ['florida',1] //stayedAt: (string | number)[];
} = {
firstName: 'John', 
lastName: 'Doe',
isReturning: true,
permissions: Permissions.ADMIN,
age:20,
stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

export const footer: [string, string, number] = ["Utrecht", Date(), 25]; //tuple

export const mainProperty = new MainProperty(
    'images/italian-property.jpg', 
    'Italian House',
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltLevels.GOLD_USER,
        date: '12-04-2021'
    }] )