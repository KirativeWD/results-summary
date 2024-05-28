import React from "react";
import './css/Result.css';

function Result({ summaryData }) {

    const scoreList = summaryData.map(data => {
        return data.score;
    });

    const totalScore = scoreList.reduce((acc, score) => acc + score, 0);

    const averageScore = Math.round(totalScore / scoreList.length);

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

    return (
        <section className="results">
            <h2>Your Result</h2>
            <div className="results__average-score-container">
                <span>
                    <span className="results__average fw-black">{averageScore}</span>
                    of 100
                </span>
            </div>
            <span className="results__rating clr-white fw-bold">{resultRating}</span>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </section>
    )

}

export default Result;