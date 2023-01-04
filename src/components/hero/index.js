import React from "react";
import { NavLinks } from "../header/styles";
import { Container, Content, Heading, HeroContainer, OpacityOverlay, PrimaryLink, StyledHeader, Subheading } from "./styles";

export default function Hero() {
    const navLinks = [
        <NavLinks key={1}>
        </NavLinks>,
        <NavLinks key={2}>
            <PrimaryLink href="/#">
                RSVP
            </PrimaryLink>
        </NavLinks>
    ];

    return (
        <Container>
            <OpacityOverlay/>
            <HeroContainer>
                <StyledHeader links={navLinks}/>
                <Content>
                    <Subheading>14th October 2023</Subheading>
                    <Heading>
                        The Greenshields
                        <br/>
                        Wedding
                    </Heading>
                </Content>
            </HeroContainer>
        </Container>
    );
};
