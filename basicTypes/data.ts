import {LoyaltLevels, Permissions} from "./enum"; 

export const reviews: {
    name: string;
    stars:number;
    loyaltyUser: LoyaltLevels;
    date: string;
    description: any; //can be anything
}[] = 
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
        stars: 3,
        loyaltyUser: LoyaltLevels.GOLD_USER,
        date: '2022-01-28',
        description:true
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltLevels.SILVER_USER,
        date: '2021-03-27',
        description: LoyaltLevels.BRONZE_USER
    },
];

reviews.sort(function(a, b) {
    return Date.parse(b.date) - Date.parse(a.date);
});

type Countries = 'Colombia' | 'Poland' | 'United Kingdom';
export const properties:{
    image: string;
    title:string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Countries; //called Type alias, like a domain
    };
    contact: [number,string];
    isAvailable: boolean;
}[] = 
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
        price: 34,
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
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
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
