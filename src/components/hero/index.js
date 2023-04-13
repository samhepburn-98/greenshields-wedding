import React, { useEffect, useState } from "react";
import { NavLinks } from "../header/styles";
import { Container, Content, Heading, HeroContainer, StyledHeader, Subheading } from "./styles";
import tw from "twin.macro";

const Footer = tw.div`flex items-center justify-center absolute text-primary-500 text-center sm:-mx-8 -mx-4 bottom-0 px-8 pb-8 max-w-none w-full`;
const TimerContainer = tw.div`flex items-center justify-center rounded border border-solid border-primary-500 p-2 pb-4`
const TimerElement = tw.div`md:px-6 sm:px-4 px-1`;
const TimerLabel = tw.div`text-xs`;
const TimerValue = tw.div`md:text-5xl sm:text-4xl text-2xl`;
const TimerSeparator = tw.div`text-2xl sm:px-2 px-1`;

export default function Hero() {
    const navLinks = [
        <NavLinks key={1}>
        </NavLinks>,
    ];

    const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const makeTimer = () => {
        let endTime = new Date("October 14, 2023 11:00:00 UTC");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        setTimer({
            days, hours, minutes, seconds
        });
    }

    useEffect(() => {
        setInterval(() => {
            makeTimer();
        }, 1000);
    }, [])

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
                <Footer>
                    <TimerContainer>
                        <TimerElement>
                            <TimerValue>
                                {timer.days}
                            </TimerValue>
                            <TimerLabel>
                                Days
                            </TimerLabel>
                        </TimerElement>
                        <TimerSeparator>
                            :
                        </TimerSeparator>
                        <TimerElement>
                            <TimerValue>
                                {timer.hours}
                            </TimerValue>
                            <TimerLabel>
                                Hours
                            </TimerLabel>
                        </TimerElement>
                        <TimerSeparator>
                            :
                        </TimerSeparator>
                        <TimerElement>
                            <TimerValue>
                                {timer.minutes}
                            </TimerValue>
                            <TimerLabel>
                                Minutes
                            </TimerLabel>
                        </TimerElement>
                        <TimerSeparator>
                            :
                        </TimerSeparator>
                        <TimerElement>
                            <TimerValue>
                                {timer.seconds}
                            </TimerValue>
                            <TimerLabel>
                                Seconds
                            </TimerLabel>
                        </TimerElement>
                    </TimerContainer>
                </Footer>
            </HeroContainer>
        </Container>
    );
};
