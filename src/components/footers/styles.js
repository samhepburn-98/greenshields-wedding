import tw from "twin.macro";
import styled from "styled-components";
import footerImg from "../../images/footer_pattern.svg";

export const Image = styled.div`
  ${tw`relative -mx-8 -mb-8 bg-center bg-cover min-h-144 bg-primary-500`}
  background-image: url(${footerImg});
`;
