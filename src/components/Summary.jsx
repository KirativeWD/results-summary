import React from "react";

function Summary({ summaryData }) {

    return (
        <section>
            <h3>Summary</h3>
            <ul>
                {summaryData.map(data => {
                    return (
                        <li>
                            <div>
                                <img src={data.icon} alt="" />
                                <h4>{data.category}</h4>
                            </div>
                            <div>
                                <span>{data.score} / 100</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button>Continue</button>
        </section>
    )

}

export default Summary;