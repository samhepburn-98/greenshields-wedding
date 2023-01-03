import React from "react";
import tw from "twin.macro";
import appleIconImageSrc from "images/apple-icon.png";
import {
    Container,
    Content,
    DecoratorBlob1,
    DecoratorBlob2,
    DecoratorBlobContainer,
    Link,
    LinksContainer,
    Row,
    Subheading,
    Text,
    TextContainer
} from "./styles";

export default ({
                    subheading = "Download App",
                    text = "Tap the button below to RSVP.",
                    link1Text = "App Store",
                    link1Url = "http://apple.com",
                    link1IconSrc = appleIconImageSrc,
                    pushDownFooter = false,
                }) => {
    return (
        <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
            <Content>
                <Row>
                    <TextContainer>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Text>{text}</Text>
                        <LinksContainer>
                            <Link href={link1Url}>
                                <img src={link1IconSrc} alt=""/>
                                <span>{link1Text}</span>
                            </Link>
                        </LinksContainer>
                    </TextContainer>
                </Row>
                <DecoratorBlobContainer>
                    <DecoratorBlob1/>
                    <DecoratorBlob2/>
                </DecoratorBlobContainer>
            </Content>
        </Container>
    );
};
