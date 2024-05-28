import React from "react";
import "./css/Summary.css";

function Summary({ summaryData }) {

    return (
        <section className="summary">
            <h3 className="clr-brand">Summary</h3>
            <ul>
                {summaryData.map(data => {
                    return (
                        <li style={{ background: data.background }}>
                            <div className="summary__category">
                                <img src={data.icon} alt="" />
                                <h4 style={{ color: data.color }}>{data.category}</h4>
                            </div>
                            <div>
                                <span className="summary__score fw-bold">
                                    <span className="clr-brand">{data.score} </span>
                                    <span aria-hidden="true">/ </span>
                                    <span className="sr-only">out of </span>
                                    100
                                </span>
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