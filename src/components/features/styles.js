import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

export const Container = tw.div`relative`;

export const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

export const HeadingInfoContainer = tw.div`flex flex-col items-center`;
export const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

export const Content = tw.div`mt-16`;

export const Card = styled.div(props => [
    tw`mt-24 md:flex justify-center items-center`,
    props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
export const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
export const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
export const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
export const Title = tw.h4`text-3xl font-bold text-gray-900`;
export const Description = tw.p`mt-2 text-sm leading-loose`;
export const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export const SvgDotPattern1 = tw(
    SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
export const SvgDotPattern2 = tw(
    SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
export const SvgDotPattern3 = tw(
    SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
export const SvgDotPattern4 = tw(
    SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
