import { default as FastMarquee } from "react-fast-marquee";
import styled from "styled-components";
import marquee1 from "../../images/marquee/marquee1.JPG";
import marquee2 from "../../images/marquee/marquee2.JPG";
import marquee3 from "../../images/marquee/marquee3.jpg";
import marquee4 from "../../images/marquee/marquee4.JPG";
import marquee5 from "../../images/marquee/marquee5.jpg";
import marquee6 from "../../images/marquee/marquee6.jpg";
import marquee7 from "../../images/marquee/marquee7.JPG";
import marquee8 from "../../images/marquee/marquee8.jpg";
import marquee9 from "../../images/marquee/marquee9.jpg";
import marquee10 from "../../images/marquee/marquee10.JPG";
import marquee11 from "../../images/marquee/marquee11.jpeg";
import marquee12 from "../../images/marquee/marquee12.jpeg";

import React from "react";
import tw from "twin.macro";
import { Container as ContainerBase } from "../misc/Layouts";

export const Container = tw(ContainerBase)`bg-primary-500 -mx-8`
const Image = styled.img(props => [
    `background-image: url("${props.src}");`,
    tw`rounded flex-shrink-0 h-80 md:h-96 bg-cover bg-center`
]);

const images = [
    marquee1,
    marquee2,
    marquee3,
    marquee4,
    marquee5,
    marquee6,
    marquee7,
    marquee8,
    marquee9,
    marquee10,
    marquee11,
    marquee12
]
const Marquee = () => {
    return (
        <Container>
            <FastMarquee gradient={false}>
                {
                    images.map((img, index) => <Image alt={index} key={index} src={img}/>)
                }
            </FastMarquee>
        </Container>
    )
}

export default Marquee
