import React from "react";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import { PrimaryBackgroundContainer, Quote, QuoteContainer, QuotesLeft, QuotesRight } from "./styles";

export default () => {
    return (
        <PrimaryBackgroundContainer>
            <ContentWithPaddingXl>
                <QuoteContainer>
                    <QuotesLeft/>
                    <Quote>
                        The most important thing to us is that you are able to celebrate with us, but should you wish
                        to give a gift as well, we would love for some money to make our dream honeymoon come true.
                    </Quote>
                    <QuotesRight/>
                </QuoteContainer>
            </ContentWithPaddingXl>
        </PrimaryBackgroundContainer>
    );
};
