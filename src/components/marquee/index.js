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

import React, { memo, Suspense, useState } from "react";
import tw from "twin.macro";
import { Container as ContainerBase } from "../misc/Layouts";
import { useImage } from "react-image";
import PageVisibility from 'react-page-visibility'
import { ThreeDots } from "react-loader-spinner";

export const Container = tw(ContainerBase)`bg-primary-500 -mx-8`
const Image = styled.img(props => [
    `background-image: url("${props.src}");`,
    tw`rounded flex-shrink-0 h-80 md:h-96 bg-cover bg-center`
]);

const MarqueeImage = ({ imgSrc, index }) => {
    const { src } = useImage({
        srcList: imgSrc,
    })
    return <Image src={src} alt="marquee img" key={index}/>
}

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
    const renderImages = () => images.map((img, index) =>
        <Suspense fallback={<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#D9DBD3"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />}>
            <MarqueeImage alt={index} key={index} imgSrc={img}/>
        </Suspense>
    )

    const [pageIsVisible, setPageIsVisible] = useState(true)

    const handleVisibilityChange = (isVisible) => {
        setPageIsVisible(isVisible)
    }

    return (
        <Container>
            <PageVisibility onChange={handleVisibilityChange}>
                {
                    pageIsVisible &&
                    <FastMarquee gradient={false} gradientWidth={0} speed={40}>
                        {renderImages()}
                    </FastMarquee>
                }
            </PageVisibility>
        </Container>
    )
}

export default memo(Marquee)
