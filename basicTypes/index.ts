import {showReviewTotal, populateUser, getTopTwoReviews} from './utils';
import {reviews, Property, footer, you, mainProperty} from './data';
import { LoyaltLevels, Permissions } from './enum';
import {IProperty} from './interfaces';

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, `${you.firstName} ${you.lastName}`);

function showDetails(authorityStatus: boolean | Permissions, property: IProperty): string{   
    if (authorityStatus) {
        return property.price + "/night";
    }
    else{
        return "";
    }
}

function showProperties(){
    const propertiesContainer = document.querySelector('.properties');
    const propertiesMarkup = Property.map(p => 
        `<div class="card">${p.title}<br /><img src="${p.image}"/><br />${showDetails(you.permissions, p)}</div>`);
    if (propertiesContainer != null) propertiesContainer.innerHTML = propertiesMarkup.join("");
}
showProperties();

function showFooter(){
    const footerContainer = document.querySelector('.footer');
    const footerMarkup = footer[0] + " | " + footer[1] + " | " + footer[2] + "°C";
    if (footerContainer != null) footerContainer.innerHTML = footerMarkup;
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
            if (reviewContainer != null) reviewContainer.appendChild(card)
        }
        if (container != null && button != null) container.removeChild(button) 
    }
}
if (button != null) button.addEventListener('click', () => addReviews(reviews))

function showMainImage(){
    const mainImageContainer = document.querySelector('.main-image')
    const image = document.createElement('img')
    image.setAttribute('src', mainProperty.src)
    if (mainImageContainer != null) mainImageContainer.appendChild(image)
}

showMainImage()