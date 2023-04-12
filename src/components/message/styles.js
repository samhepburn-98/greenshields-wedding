import tw from "twin.macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";

export const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-500 text-gray-100`;
export const Content = tw(ContentWithPaddingXl)`pb-0!`;
export const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
export const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
export const Quote = tw.blockquote`text-center font-medium text-xl lg:text-2xl xl:text-3xl`;
export const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-white absolute top-0 left-0`;
export const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-white absolute bottom-0 right-0`;
