import {showReviewTotal, populateUser, Permissions} from './utils'
import {reviews, properties, footer} from './data'

const you:{
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

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, `${you.firstName} ${you.lastName}`);

const propertiesContainer = document.querySelector('.properties');

function showDetails(authorityStatus: boolean | Permissions){   
    if (authorityStatus) {
        alert("YOU COULD SEE THE PRICES");
    }
    else{
        alert("YOU COULD NOT SEE THE PRICES");
    }
}

showDetails(you.permissions);

function showProperties(){
    const propertiesMarkup = properties.map(p => `<div class="card">${p.title}<br /><img src="${p.image}"/><br /></div>`);
    propertiesContainer.innerHTML = propertiesMarkup.join("");
}

showProperties();

const footerContainer = document.querySelector('.footer');

function showFooter(){
    const footerMarkup = footer[0] + " | " + footer[1] + " | " + footer[2] + "°C";
    footerContainer.innerHTML = footerMarkup;
}

showFooter();