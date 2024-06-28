import React, {useState} from "react";
import QuoteGeneration from "./QuoteGenerator";

const QuoteDisplay=(props)=>{
    const [quote, setQuote] =useState();
    const Generate= QuoteGeneration();
        setQuote(Generate);

    return(
        <div>
            <button onClick={Generate}>Click here to generate a random quote</button>
            <p> {quote}</p>
        </div>
    )
}

export default QuoteDisplay;