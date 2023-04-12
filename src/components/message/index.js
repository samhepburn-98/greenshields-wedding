import React from "react";
import { Content, PrimaryBackgroundContainer, Quote, QuoteContainer, QuotesLeft, QuotesRight } from "./styles";

export default () => {
    return (
        <PrimaryBackgroundContainer>
            <Content>
                <QuoteContainer>
                    <QuotesLeft/>
                    <Quote>
                        Sharing our special day with us is more than enough, however for those wishing to buy a gift, a
                        cash contribution towards making our dream honeymoon come true would be very much appreciated.
                    </Quote>
                    <QuotesRight/>
                </QuoteContainer>
            </Content>
        </PrimaryBackgroundContainer>
    );
};
