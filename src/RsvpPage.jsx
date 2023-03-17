import AnimationRevealPage from "./helpers/AnimationRevealPage";
import tw from "twin.macro";
import Header from "./components/header";
import { DesktopNavLinks, LogoLink, NavLink, NavLinks, NavToggle } from "./components/header/styles";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { useEffect, useState } from "react";

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

const Box = tw.div`text-primary-500`;

const StyledAnimationRevealPage = styled(AnimationRevealPage)`
  ${tw`-mt-16`}
`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-xl mx-auto text-center`
const Input = tw.input`text-white mt-6 first:mt-0 border-b-2 py-3 bg-gray-900 text-4xl focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

const RsvpPage = () => {
    const navLinks = [
        <NavLinks key={1}>
        </NavLinks>,
    ];

    const [searchParams] = useSearchParams()
    const code = searchParams.get("code");

    const DAY_CODE = "letsgetmarried";
    const NIGHT_CODE = "timetoparty";

    const LoadForm = () => {
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
        if (code === DAY_CODE || code === NIGHT_CODE) LoadForm()
    }, [code, DAY_CODE, NIGHT_CODE])

    const dayForm = <div
        data-aidaform-widget="form-2019-12"
        data-url="https://samhepburn98.aidaform.com/greenshields-wedding"
        data-width="100%"
        data-height="500px"
        data-do-resize
    >
    </div>

    const nightForm = <div
        data-aidaform-widget="form-2019-12"
        data-url="https://samhepburn98.aidaform.com/greenshields-wedding-night"
        data-width="100%"
        data-height="500px"
        data-do-resize
    >
    </div>

    const [query, setQuery] = useState("");
    const handleChange = (event) => setQuery(event.target.value);

    return (
        <Container>
            <HeroContainer>
                <StyledHeader links={navLinks}/>
            </HeroContainer>
            <StyledAnimationRevealPage>
                <Box>
                    {
                        !code &&
                        <Form>
                            <Input
                                type="text"
                                name="code"
                                placeholder="Enter the RSVP code from your invite"
                                value={query}
                                onChange={handleChange}
                            />
                            <SubmitButton type="submit">Submit</SubmitButton>
                        </Form>
                    }
                    {
                        code === DAY_CODE &&
                        dayForm
                    }
                    {
                        code === NIGHT_CODE &&
                        nightForm
                    }
                </Box>
            </StyledAnimationRevealPage>
        </Container>
    )
}

export default RsvpPage;
