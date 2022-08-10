import { LoyaltLevels } from "./enum";
import  IReview  from "./interfaces";

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement

export function showReviewTotal(total: number, lastReviewer: string, loyal: LoyaltLevels){
    reviewTotalDisplay.innerHTML = 'review total ' + total.toString() + '-last by ' + lastReviewer + (loyal == LoyaltLevels.GOLD_USER ?"⭐":""); 
}

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        if (returningUserDisplay != null) {returningUserDisplay.innerHTML};
    }
    if (userNameDisplay != null) {userNameDisplay.innerHTML = userName};
}

export function getTopTwoReviews(reviews : IReview[]) : IReview[]  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0,2);
}

// **************
// se how you can have more than one type for the parameters
/*
function add(firstValue : (number | string), secondValue: (number | string)) {
    let result
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition')
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition')
    }
}

const combinedReviews = add(5,1)
const firstNameLastName = add('Ania', 'Kubow')
*/

// ***************

/*
function addWithReturnType( firstValue: number, secondValue: number ) : number {
    return firstValue + secondValue
}
*/