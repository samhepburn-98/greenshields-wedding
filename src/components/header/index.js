import React from "react";
import tw from "twin.macro";

import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import {
    DesktopNavLinks,
    Header,
    LogoLink,
    MobileNavLinks,
    MobileNavLinksContainer,
    NavLinks
} from "./styles";
import navyLogo from "../../images/MandM_navy.png";
import ivoryLogo from "../../images/MandM_ivory.png";

// Accepts a "links" prop: an array of NavLinks components (exported from ./styles),
// each containing any number of NavLink components. One NavLinks entry renders a
// two-column header (logo left, links right); two entries render three columns.
export default ({ logoLink, links, className, collapseBreakpointClass = "lg", color = "navy" }) => {
    const defaultLinks = [
        <NavLinks key={1}/>
    ];

    const { animation } = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

    const logo = color === "navy" ? navyLogo : ivoryLogo;
    const defaultLogoLink = (
        <LogoLink href="/">
            <img src={logo} alt="M&M logo" style={{ height: 50, width: "auto" }}/>
        </LogoLink>
    );

    logoLink = logoLink || defaultLogoLink;
    links = links || defaultLinks;

    return (
        <Header className={className || "header-light"}>
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>

            <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
                {logoLink}
                <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation}
                                css={collapseBreakpointCss.mobileNavLinks}>
                    {links}
                </MobileNavLinks>
            </MobileNavLinksContainer>
        </Header>
    );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
    sm: {
        mobileNavLinks: tw`sm:hidden`,
        desktopNavLinks: tw`sm:flex`,
        mobileNavLinksContainer: tw`sm:hidden`
    },
    md: {
        mobileNavLinks: tw`md:hidden`,
        desktopNavLinks: tw`md:flex`,
        mobileNavLinksContainer: tw`md:hidden`
    },
    lg: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    },
    xl: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    }
};
