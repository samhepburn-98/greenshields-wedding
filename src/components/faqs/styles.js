import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components/macro"; //eslint-disable-line
import { Container } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

export const Heading = tw(SectionHeading)`w-full`;
export const Description = tw(SectionDescription)`w-full text-primary-500 text-center`;

export const Column = tw.div`flex flex-col items-center`;
export const HeaderContent = tw.div``;

export const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
export const QuestionText = tw.div`text-center text-primary-600 text-lg lg:text-xl font-semibold`;
export const Answer = motion(tw.p`text-primary-500 text-center pointer-events-none text-sm sm:text-base leading-relaxed whitespace-pre-wrap`);

export const SectionContainer = tw.div`relative -mx-8 bg-secondary-500`;

export const Divider = tw.hr`h-px my-8 bg-primary-300 border-0`;

export const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-500 text-gray-100`;

export const HeadingContainer = tw.div``;
export const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
export const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
export const Faq = tw.div`select-none cursor-pointer border-b-2 border-primary-300 hover:border-primary-500 transition-colors duration-300 py-6`;


