import { default as FastMarquee } from "react-fast-marquee";
import styled from "styled-components";
import marquee1 from "../../images/marquee/marquee1.webp";
import marquee2 from "../../images/marquee/marquee2.webp";
import marquee3 from "../../images/marquee/marquee3.webp";
import marquee4 from "../../images/marquee/marquee4.webp";
import marquee5 from "../../images/marquee/marquee5.webp";
import marquee6 from "../../images/marquee/marquee6.webp";
import marquee7 from "../../images/marquee/marquee7.webp";
import marquee8 from "../../images/marquee/marquee8.webp";
import marquee9 from "../../images/marquee/marquee9.webp";
import marquee10 from "../../images/marquee/marquee10.webp";
import marquee11 from "../../images/marquee/marquee11.webp";
import marquee12 from "../../images/marquee/marquee12.webp";

import React, { memo } from "react";
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

export default memo(Marquee)
