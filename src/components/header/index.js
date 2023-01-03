import React from "react";
import tw from "twin.macro";

import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import {
  DesktopNavLinks,
  Header,
  LogoLink,
  MobileNavLinks,
  MobileNavLinksContainer,
  NavLink,
  NavLinks,
  NavToggle,
  PrimaryLink
} from "./styles";

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
    /*
     * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
     * This links props should be an array of "NavLinks" components which is exported from this file.
     * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
     * This allows this Header to be multi-column.
     * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
     * Left part will be LogoLink, and the right part will be the NavLinks component you
     * supplied.
     * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
     * You can also choose to directly modify the links here by not passing any links from the parent component and
     * changing the defaultLinks variable below.
     * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
     */
    const defaultLinks = [
        <NavLinks key={1}>
            <NavLink href="/#">About</NavLink>
            <NavLink href="/#">Blog</NavLink>
            <NavLink href="/#">Pricing</NavLink>
            <NavLink href="/#">Contact Us</NavLink>
            <NavLink href="/#" tw="lg:ml-12!">
                Login
            </NavLink>
            <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="/#">Sign Up</PrimaryLink>
        </NavLinks>
    ];

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

    const defaultLogoLink = (
        <LogoLink href="/">
            M&M
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
                <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
                    {showNavLinks ? <CloseIcon tw="w-6 h-6"/> : <MenuIcon tw="w-6 h-6"/>}
                </NavToggle>
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
