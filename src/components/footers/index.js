import React from "react";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import {
    Container,
    Content,
    CopyrightText,
    Link,
    LinksContainer,
    LogoText,
    Row,
    SocialLink,
    SocialLinksContainer
} from "./styles";

export default () => {
    return (
        <Container>
            <Content>
                <Row>
                    <LogoText>M&M</LogoText>
                    <LinksContainer>
                        <Link href="#">Home</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Reviews</Link>
                    </LinksContainer>
                    <SocialLinksContainer>
                        <SocialLink href="https://facebook.com">
                            <FacebookIcon/>
                        </SocialLink>
                    </SocialLinksContainer>
                    <CopyrightText>
                        &copy; Copyright 2020 Sam Hepburn. All Rights Reserved.
                    </CopyrightText>
                </Row>
            </Content>
        </Container>
    );
};
