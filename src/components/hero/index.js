import React, { useEffect, useState } from "react";
import { NavLinks } from "../header/styles";
import { Container, Content, Heading, HeroContainer, StyledHeader, Subheading } from "./styles";
import tw from "twin.macro";
import { ThreeDots } from "react-loader-spinner";

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

    const [timer, setTimer] = useState({ days: -1, hours: -1, minutes: -1, seconds: -1 });

    useEffect(() => {
        const makeTimer = () => {
            const endTime = Date.parse("October 14, 2023 11:00:00 UTC") / 1000;
            const now = Date.now() / 1000;
            const timeLeft = Math.max(endTime - now, 0);

            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor((timeLeft % 86400) / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = Math.floor(timeLeft % 60);

            setTimer({
                days,
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0")
            });
        }

        makeTimer();
        const interval = setInterval(makeTimer, 1000);
        return () => clearInterval(interval);
    }, [])

    const renderTimerValue = (value) => {
        return (
            value === -1
                ? <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="#233244"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                : value
        )
    }


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
                                {renderTimerValue(timer.days)}
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
                                {renderTimerValue(timer.hours)}
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
                                {renderTimerValue(timer.minutes)}
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
                                {renderTimerValue(timer.seconds)}
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
