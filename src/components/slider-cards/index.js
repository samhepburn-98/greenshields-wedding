import React, { useState } from "react";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import {
    Card,
    CardImage,
    CardSlider,
    Container,
    Content,
    Controls,
    Description,
    Heading,
    HeadingWithControl,
    IconContainer,
    IconWithText,
    NextButton,
    PrevButton,
    PrimaryButton,
    Rating,
    RatingsInfo,
    SecondaryInfoContainer,
    Text,
    TextInfo,
    Title,
    TitleReviewContainer
} from "./styles";
import { css } from "styled-components/macro"; //eslint-disable-line

export default function ThreeColSliderCards() {
    // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
    const [sliderRef, setSliderRef] = useState(null);
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    /* Change this according to your needs */
    const cards = [
        {
            imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
            title: "Wyatt Residency",
            description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
            locationText: "Rome, Italy",
            pricingText: "USD 39/Day",
            rating: "4.8",
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
            title: "Soho Paradise",
            description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
            locationText: "Ibiza, Spain",
            pricingText: "USD 50/Day",
            rating: 4.9,
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
            title: "Hotel Baja",
            description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
            locationText: "Palo Alto, CA",
            pricingText: "USD 19/Day",
            rating: "5.0",
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
            title: "Hudak Homes",
            description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
            locationText: "Arizona, RAK",
            pricingText: "USD 99/Day",
            rating: 4.5,
        },
    ]

    return (
        <Container>
            <Content>
                <HeadingWithControl>
                    <Heading>Nearby Hotels</Heading>
                    <Controls>
                        <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
                        <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
                    </Controls>
                </HeadingWithControl>
                <CardSlider ref={setSliderRef} {...sliderSettings}>
                    {cards.map((card, index) => (
                        <Card key={index}>
                            <CardImage imageSrc={card.imageSrc}/>
                            <TextInfo>
                                <TitleReviewContainer>
                                    <Title>{card.title}</Title>
                                    <RatingsInfo>
                                        <StarIcon/>
                                        <Rating>{card.rating}</Rating>
                                    </RatingsInfo>
                                </TitleReviewContainer>
                                <SecondaryInfoContainer>
                                    <IconWithText>
                                        <IconContainer>
                                            <LocationIcon/>
                                        </IconContainer>
                                        <Text>{card.locationText}</Text>
                                    </IconWithText>
                                    <IconWithText>
                                        <IconContainer>
                                            <PriceIcon/>
                                        </IconContainer>
                                        <Text>{card.pricingText}</Text>
                                    </IconWithText>
                                </SecondaryInfoContainer>
                                <Description>{card.description}</Description>
                            </TextInfo>
                            <PrimaryButton>Book Now</PrimaryButton>
                        </Card>
                    ))}
                </CardSlider>
            </Content>
        </Container>
    );
};
