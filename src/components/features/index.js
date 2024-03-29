import React from "react";
import { Card, Container, Content, Description, Details, Image, Link, SingleColumn, Subtitle, Title } from "./styles";
import churchPic from "../../images/ChurchOldPic.jpeg"
import venuePic from "../../images/TM-1002.jpg"

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
            subtitle: "Daytime Reception - Following ceremony\nEvening Reception - From 18:30",
            title: "The Reception",
            description:
                "The White Hart Inn\nInns Lane\nMoorwood Moor\nAlfreton\nDE55 7NU",
            url: "https://goo.gl/maps/zTJ6khM2gq9Gvnkt8"
        },
    ];

    return (
        <Container>
            <SingleColumn>
                <Content>
                    {
                        cards.map((card, i) => (
                            <Card key={i} reversed={i % 2 === 1}>
                                <Image imageSrc={card.imageSrc}/>
                                <Details>
                                    <Subtitle style={{ whiteSpace: "pre-wrap" }}>{card.subtitle}</Subtitle>
                                    <Title>{card.title}</Title>
                                    <Description style={{ whiteSpace: "pre-wrap" }}>{card.description}</Description>
                                    <Link href={card.url}>Tap for directions</Link>
                                </Details>
                            </Card>
                        ))
                    }
                </Content>
            </SingleColumn>
        </Container>
    );
};
