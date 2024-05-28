import React from "react";
import Summary from "./Summary";
import Result from "./Result";

function SummaryCard({ summaryData }) {

    return (
        <article>
            <Result summaryData={summaryData} />
            <Summary summaryData={summaryData} />
        </article>
    )

}

export default SummaryCard;