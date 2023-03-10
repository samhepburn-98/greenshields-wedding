import AnimationRevealPage from "./helpers/AnimationRevealPage";
import tw from "twin.macro";
import Header from "./components/header";
import { DesktopNavLinks, LogoLink, NavLink, NavLinks, NavToggle } from "./components/header/styles";
import styled from "styled-components";
import { useEffect } from "react";

const RsvpPage = () => {
    const navLinks = [
        <NavLinks key={1}>
        </NavLinks>,
    ];

    function test() {
        let r, d = document, gt = d.getElementById, cr = d.createElement, tg = d.getElementsByTagName,
            id = "aidaform-embed";
        if (!gt.call(d, id)) {
            r = cr.call(d, "script");
            r.id = id;
            r.src = "https://embed.aidaform.com/embed.js";
            (d.head || tg.call(d, "head")[0]).appendChild(r);
        }
    }

    useEffect(() => {
        test()
    }, [])

    const Container = tw.div`relative min-h-screen bg-gray-900`;
    const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
    const StyledHeader = styled(Header)`
      ${tw`px-8 pt-8 max-w-none w-full`}
      ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
        ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
      }

      ${NavToggle}.closed {
        ${tw`text-gray-100 hover:text-primary-500`}
      }
    `;
    return (
        <Container>
            <HeroContainer>
                <StyledHeader links={navLinks}/>
            </HeroContainer>
            <AnimationRevealPage>
                <div data-aidaform-widget="form-2019-12"
                     data-url="https://samhepburn98.aidaform.com/greenshields-wedding"
                     data-width="100%" data-height="500px" data-do-resize>
                </div>
                {/*<script>{test()}*/}
                {/*</script>*/}
            </AnimationRevealPage>
        </Container>
    )
}

export default RsvpPage;
