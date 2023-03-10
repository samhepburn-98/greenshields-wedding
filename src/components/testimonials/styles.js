import tw from "twin.macro";
import { Subheading as SubheadingBase } from "../misc/Headings";
import styled from "styled-components";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

export const Subheading = tw(SubheadingBase)`text-center`;
export const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
export const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
export const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
export const Image = tw.img`w-20 h-20 rounded-full drop-shadow object-contain`;
export const Quote = tw.blockquote`mt-5 text-primary-500 font-medium text-xl leading-loose`;
export const Link = tw.a`inline-block text-base text-primary-400 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent border-primary-400`;

export const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-secondary-400`}
`;
export const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-secondary-500`}
`;
