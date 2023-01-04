import React from "react";
import {
    Card,
    Container,
    Content,
    Description,
    Details,
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
import churchPic from "../../images/ChurchOldPic.jpeg"
import venuePic from "../../images/huge.jpeg"

export default () => {
    const cards = [
        {
            imageSrc: churchPic,
            subtitle: "12:00",
            title: "The Ceremony",
            description:
                "Our Lady & St Joseph’s Church\nBank Road\nMatlock\nDE4 3NG",
            url: "https://goo.gl/maps/B6sFaJnn9SwHbtF7A"
        },
        {
            imageSrc: venuePic,
            subtitle: "18:00",
            title: "The Reception",
            description:
                "The White Hart Inn\nInns Lane\nMoorwood Moor\nAlfreton\nDE55 7NU",
            url: "https://goo.gl/maps/zTJ6khM2gq9Gvnkt8"
        },

    ];

    return (
        <Container>
            <SingleColumn>
                {/*<HeadingInfoContainer>*/}
                {/*<HeadingTitle>Popular Events</HeadingTitle>*/}
                {/*<HeadingDescription>*/}
                {/*    Here are some of the most popular events in New York City curated by professionals.*/}
                {/*</HeadingDescription>*/}
                {/*</HeadingInfoContainer>*/}

                <Content>
                    {
                        cards.map((card, i) => (
                            <Card key={i} reversed={i % 2 === 1}>
                                <Image imageSrc={card.imageSrc}/>
                                <Details>
                                    <Subtitle>{card.subtitle}</Subtitle>
                                    <Title>{card.title}</Title>
                                    <Description style={{ whiteSpace: "pre-wrap" }}>{card.description}</Description>
                                    <Link href={card.url}>Tap for directions</Link>
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
