import styled from "styled-components";
import tw from "twin.macro";
import { DesktopNavLinks, LogoLink, NavLink, NavToggle, PrimaryLink as PrimaryLinkBase } from "../header/styles";
import bgPattern from "../../images/bg-pattern.jpg";
import Header from "../header";
import { Subheading as SubheadingBase } from "../misc/Headings";

export const StyledHeader = styled(Header)`
  ${tw`absolute left-0 top-0 px-8 pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }

  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

export const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
export const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${bgPattern});
`;

export const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

export const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
export const Content = tw.div`-mt-24 px-4 flex flex-1 flex-col justify-center items-center`;

export const Subheading = tw(SubheadingBase)`text-base md:text-2xl text-secondary-400 mb-2 tracking-wider`

export const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
