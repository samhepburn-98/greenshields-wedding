import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";

export const Container = tw.div`relative -mx-8 bg-secondary-500`;
export const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 overflow-hidden`;

export const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
export const Heading = tw(SectionHeading)`text-primary-500`;
export const Controls = tw.div`flex items-center`;
export const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
export const PrevButton = tw(ControlButton)``;
export const NextButton = tw(ControlButton)``;

export const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }

  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
export const Card = tw.div`h-full flex! flex-col sm:border border-primary-500 max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
export const CardImage = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

export const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
export const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
export const Title = tw.h5`text-2xl font-bold text-primary-500`;

export const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
export const Rating = tw.span`ml-2 font-bold`;

export const Description = tw.p`text-sm text-primary-500 leading-loose mt-2 sm:mt-4`;

export const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
export const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
export const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-primary-500 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
export const Text = tw.div`ml-2 text-sm font-semibold text-primary-500`;

export const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
