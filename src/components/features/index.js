import React from "react";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import {
    Card,
    Container,
    Content,
    Description,
    Details,
    HeadingDescription,
    HeadingInfoContainer,
    Image,
    Link,
    SingleColumn,
    Subtitle,
    SvgDotPattern1,
    SvgDotPattern2,
    SvgDotPattern3,
    SvgDotPattern4,
    Title
} from "./styles";

export default () => {
    const cards = [
        {
            imageSrc:
                "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
            subtitle: "Paid",
            title: "Loachella, NYC",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            url: "https://timerse.com"
        },

        {
            imageSrc:
                "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            subtitle: "Free",
            title: "Rock In Rio, Upstate",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            url: "https://timerse.com"
        },
    ];

    return (
        <Container>
            <SingleColumn>
                <HeadingInfoContainer>
                    <HeadingTitle>Popular Events</HeadingTitle>
                    <HeadingDescription>
                        Here are some of the most popular events in New York City curated by professionals.
                    </HeadingDescription>
                </HeadingInfoContainer>

                <Content>
                    {
                        cards.map((card, i) => (
                            <Card key={i} reversed={i % 2 === 1}>
                                <Image imageSrc={card.imageSrc}/>
                                <Details>
                                    <Subtitle>{card.subtitle}</Subtitle>
                                    <Title>{card.title}</Title>
                                    <Description>{card.description}</Description>
                                    <Link href={card.url}>See Event Details</Link>
                                </Details>
                            </Card>
                        ))
                    }
                </Content>
            </SingleColumn>
            <SvgDotPattern1/>
            <SvgDotPattern2/>
            <SvgDotPattern3/>
            <SvgDotPattern4/>
        </Container>
    );
};
