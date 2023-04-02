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
                        Sharing our special day with us is more than enough, however for those wishing to buy a gift, a
                        cash contribution towards making our dream honeymoon come true would be very much appreciated.
                    </Quote>
                    <QuotesRight/>
                </QuoteContainer>
            </ContentWithPaddingXl>
        </PrimaryBackgroundContainer>
    );
};
