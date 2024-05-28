# Frontend Mentor - Results summary component solution

This is my solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links

- Live Site URL: [GH Pages](https://kirativewd.github.io/results-summary/)
- Solutions List: [KirativeWD - Solutions](https://www.frontendmentor.io/profile/KirativeWD/solutions)

## My process

I took some creative liberties with how the component rendered on screen depending on the data.json file.

As an example, the following code changes what the rating is depending on the calculated average. This is why the component shows "good" instead of "great."

```js
let resultRating = "";

if (averageScore >= 90) {
    resultRating = "Excellent";
} else if (averageScore >= 80) {
    resultRating = "Very Good";
} else if (averageScore >= 70) {
    resultRating = "Good";
} else if (averageScore >= 60) {
    resultRating = "Average";
} else if (averageScore >= 50) {
    resultRating = "Below Average";
} else {
    resultRating = "Needs Improvement";
};
```

### Built with

- CSS custom properties
- [React](https://reactjs.org/) - JS library

## Author

- Website - [Kirative Designs](https://kirativedesigns.com)
- Frontend Mentor - [KirativeWD](https://www.frontendmentor.io/profile/KirativeWD)
- LinkedIn - [Kira Tantari](https://www.linkedin.com/in/kira-tantari/)
