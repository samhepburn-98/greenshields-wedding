import tw from "twin.macro";
import { Container as ContainerBase, ContentWithPaddingXl } from "../misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings";
import styled from "styled-components";

export const Container = tw(ContainerBase)`bg-primary-500 -mx-8`
export const Content = tw(ContentWithPaddingXl)``
export const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center justify-center`;

export const ColumnContainer = tw.div`max-w-2xl`
export const TextContainer = tw(ColumnContainer)``;
export const Text = tw(SectionHeading)`text-gray-100 lg:text-left max-w-none text-3xl leading-snug`;
export const Subheading = tw(SubheadingBase)`text-white mb-2 tracking-wider`

export const LinksContainer = tw.div`mt-4 lg:mt-8 flex flex-col items-center sm:block`
export const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-secondary-500 hocus:bg-secondary-700 text-primary-500 hocus:text-primary-500 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }

  span {
    ${tw`leading-none inline-block`}
  }
`;
