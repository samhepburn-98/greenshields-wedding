import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components/macro"; //eslint-disable-line
import { Container } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

export const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-500 text-gray-100`;

export const HeadingContainer = tw.div``;
export const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
export const Heading = tw(SectionHeading)``;
export const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

export const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
export const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
export const Faq = tw.div`select-none cursor-pointer border-b-2 border-primary-300 hover:border-primary-500 transition-colors duration-300 py-6`;
export const Question = tw.div`flex justify-between items-center`;
export const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
export const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
export const Answer = tw(motion.div)`hidden text-base font-normal mt-4 text-gray-300`;
