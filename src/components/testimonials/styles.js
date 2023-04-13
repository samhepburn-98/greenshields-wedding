import tw from "twin.macro";
import { Subheading as SubheadingBase } from "../misc/Headings";

export const Subheading = tw(SubheadingBase)`text-center`;
export const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
export const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
export const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
export const Image = tw.img`w-20 h-20 rounded-full drop-shadow object-contain`;
export const Quote = tw.blockquote`mt-5 text-primary-500 font-medium text-xl leading-loose`;
export const Link = tw.a`inline-block text-base text-primary-400 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent border-primary-400`;
