import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
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
    SecondaryInfoContainer,
    Text,
    TextInfo,
    Title,
    TitleReviewContainer
} from "./styles";

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
            imageSrc: "hotels/horse-and-jockey.png",
            title: "Horse & Jockey",
            description: "A contemporary gastro pub and hotel located in the heart of Wessington.",
            locationText: "Brackenfield Lane, Wessington, DE55 6DW",
            url: "https://horseandjockeywessington.co.uk"
        },
        {
            imageSrc: "hotels/the-hurt-arms.jpg",
            title: "The Hurt Arms",
            description: "A perfect blend of rustic and contemporary, The Hurt Arms retains its historic charm and character, whilst offering sweeping views across the beautiful Derbyshire landscape.",
            locationText: "Derby Road, Ambergate, DE56 2EJ",
            url: "https://hurtarmsambergate.co.uk"
        },
        {
            imageSrc: "hotels/the-canal-inn.jpg",
            title: "The Canal Inn",
            description: "Country pub, kitchen & microbrewery with 7 recently renovated cosy bedroom suites.",
            locationText: "Bullbridge Hill, Ambergate, DE56 2EW",
            url: "https://thecanalatbullbridge.co.uk/rooms/"
        },
        {
            imageSrc: "hotels/premier-inn.jpg",
            title: "Premier Inn",
            description: "There are nearby Premier Inn locations in Matlock, Chesterfield and Alfreton.",
            locationText: "Matlock, Chesterfield, Alfreton",
            url: "https://www.premierinn.com/gb/en/home.html"
        },
    ]

    const handleUrlClick = (url) => {
        if (url) window.open(url, "noreferrer");
    }

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
                                </TitleReviewContainer>
                                <SecondaryInfoContainer>
                                    <IconWithText>
                                        <IconContainer>
                                            <LocationIcon/>
                                        </IconContainer>
                                        <Text>{card.locationText}</Text>
                                    </IconWithText>
                                </SecondaryInfoContainer>
                                <Description>{card.description}</Description>
                            </TextInfo>
                            <PrimaryButton onClick={() => handleUrlClick(card.url)}>View Website</PrimaryButton>
                        </Card>
                    ))}
                </CardSlider>
            </Content>
        </Container>
    );
};
