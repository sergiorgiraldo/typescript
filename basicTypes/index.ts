import {showReviewTotal, populateUser, getTopTwoReviews} from './utils';
import {reviews, properties, footer, you} from './data';
import { LoyaltLevels, Permissions } from './enum';

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, `${you.firstName} ${you.lastName}`);

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
    const propertiesContainer = document.querySelector('.properties');
    const propertiesMarkup = properties.map(p => `<div class="card">${p.title}<br /><img src="${p.image}"/><br /></div>`);
    propertiesContainer.innerHTML = propertiesMarkup.join("");
}
showProperties();

function showFooter(){
    const footerContainer = document.querySelector('.footer');
    const footerMarkup = footer[0] + " | " + footer[1] + " | " + footer[2] + "°C";
    footerContainer.innerHTML = footerMarkup;
}
showFooter();

const container = document.querySelector('.container')
const reviewContainer = document.querySelector('.reviews')
const button = document.querySelector('button')

let count = 0
function addReviews(array: {
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltLevels; 
    date: string}[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}
button.addEventListener('click', () => addReviews(reviews))
