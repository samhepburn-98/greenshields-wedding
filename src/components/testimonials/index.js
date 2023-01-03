import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading as Heading } from "components/misc/Headings.js";
import {
    CustomerName,
    DecoratorBlob1,
    DecoratorBlob2,
    Image,
    Quote,
    Subheading,
    Testimonial,
    TestimonialContainer,
    Testimonials
} from "./styles";

export default ({
                    subheading = "Need a ride home?",
                    heading = "Local Taxi Services",
                    testimonials = [
                        {
                            imageSrc:
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            quote:
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                            customerName: "Charlotte Hale"
                        },
                        {
                            imageSrc:
                                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
                            quote:
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                            customerName: "Adam Cuppy"
                        },
                        {
                            imageSrc:
                                "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
                            quote:
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                            customerName: "Steven Marcetti"
                        }
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
                                    <Quote>"{testimonial.quote}"</Quote>
                                    <CustomerName>- {testimonial.customerName}</CustomerName>
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
