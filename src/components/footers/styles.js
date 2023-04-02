import tw from "twin.macro";
import styled from "styled-components";
import footerImg from "../../images/footer_pattern.svg";
//
// export const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
// export const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-12`;
//
// export const Row = tw.div`flex items-center justify-center flex-col px-8`
//
// export const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
// export const LogoImg = tw.img`w-8`;
// export const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;
//
// export const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
// export const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;
//
// export const SocialLinksContainer = tw.div`mt-10`;
// export const SocialLink = styled.a`
//   ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
//   svg {
//     ${tw`w-5 h-5`}
//   }
// `;
//
// export const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`


export const Image = styled.div`
  ${tw`relative -mx-8 -mb-8 bg-center bg-cover min-h-144`}
  background-image: url(${footerImg});
`;
