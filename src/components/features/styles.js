import styled from "styled-components";
import tw from "twin.macro";

export const Container = tw.div`relative`;

export const SingleColumn = tw.div`max-w-screen-xl mx-auto py-10 lg:py-12`;

export const HeadingInfoContainer = tw.div`flex flex-col items-center`;
export const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

export const Content = tw.div`mt-8`;

export const Card = styled.div(props => [
    tw`mt-12 md:flex justify-center items-center`,
    props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
export const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded md:w-1/2 lg:w-1/4 xl:w-1/4 flex-shrink-0 h-80 md:h-96 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
export const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
export const Subtitle = tw.div`font-bold tracking-wide text-primary-500`;
export const Title = tw.h4`text-3xl font-bold text-primary-500`;
export const Description = tw.p`mt-2 text-sm leading-loose text-primary-500`;
export const Link = tw.a`inline-block mt-4 text-sm text-primary-400 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent border-primary-400`;
