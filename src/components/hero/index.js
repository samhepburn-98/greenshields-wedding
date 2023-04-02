import React from "react";
import { NavLinks } from "../header/styles";
import { Container, Content, Heading, HeroContainer, StyledHeader, Subheading } from "./styles";

export default function Hero() {
    const navLinks = [
        <NavLinks key={1}>
        </NavLinks>,
    ];

    return (
        <Container>
            {/*<OpacityOverlay/>*/}
            <HeroContainer>
                <StyledHeader color="navy" links={navLinks}/>
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
