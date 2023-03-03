import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading as Heading } from "components/misc/Headings.js";
import {
    DecoratorBlob1,
    DecoratorBlob2,
    Image, Link,
    Quote,
    Subheading,
    Testimonial,
    TestimonialContainer,
    Testimonials
} from "./styles";
import amberLogo from "../../images/amber-logo.jpg";
import aLineLogo from "../../images/a-line-logo.png";
import galaxyLogo from "../../images/galaxy-logo.png";
import centralLogo from "../../images/central-logo.png";

export default ({
                    subheading = "Need a ride home?",
                    heading = "Local Taxi Services",
                    testimonials = [
                        {
                            imageSrc: amberLogo,
                            quote: "Amber Taxis Alfreton",
                            customerName: "01773 836100"
                        },
                        {
                            imageSrc: centralLogo,
                            quote: "Central Cars Chesterfield",
                            customerName: "01246 200500"
                            //https://door2doortaxi.co.uk
                        },
                        {
                            imageSrc: aLineLogo,
                            quote: "A Line Chesterfield",
                            customerName: "01246 555555"
                        },
                        {
                            imageSrc: galaxyLogo,
                            quote: "Galaxy Travel Chesterfield",
                            customerName: "01246 272727"
                        },
                    ]
                }) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                {subheading && <Subheading>{subheading}</Subheading>}
                <Heading>{heading}</Heading>
                <Testimonials>
                    {
                        testimonials.map((testimonial, index) => (
                            <TestimonialContainer key={index}>
                                <Testimonial>
                                    <Image src={testimonial.imageSrc}/>
                                    <Quote>{testimonial.quote}</Quote>
                                    <Link href={`tel:${testimonial.customerName}`}>{testimonial.customerName}</Link>
                                </Testimonial>
                            </TestimonialContainer>
                        ))
                    }
                </Testimonials>
            </ContentWithPaddingXl>

            <DecoratorBlob1/>
            <DecoratorBlob2/>
        </Container>
    );
};
