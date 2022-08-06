var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '2021-04-03'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '2021-03-28'
    },
    {
        name: 'John',
        stars: 3,
        loyaltyUser: false,
        date: '2022-01-28'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '2021-03-27'
    },
];
function showReviewTotal(total, lastReviewer, loyal) {
    reviewTotalDisplay.innerHTML = 'review total ' + total.toString() + '-last by ' + lastReviewer + (loyal ? "⭐" : "");
}
reviews.sort(function (a, b) {
    return Date.parse(b.date) - Date.parse(a.date);
});
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    userName: { firstName: 'Bobby', lastName: 'Brown' },
    isReturning: true
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, "".concat(you.userName.firstName, " ").concat(you.userName.lastName));
