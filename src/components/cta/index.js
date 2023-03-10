import React from "react";
import { Container, Content, Link, LinksContainer, Row, Subheading, Text, TextContainer } from "./styles";

export default ({
                    subheading = "Let us know if you can make it",
                    text = "Tap the button below to RSVP.",
                    link1Text = "RSVP",
                    link1Url = "/rsvp",
                }) => {
    return (
        <Container>
            <Content>
                <Row>
                    <TextContainer>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Text>{text}</Text>
                        <LinksContainer>
                            <Link href={link1Url}>
                                <span>{link1Text}</span>
                            </Link>
                        </LinksContainer>
                    </TextContainer>
                </Row>
            </Content>
        </Container>
    );
};
