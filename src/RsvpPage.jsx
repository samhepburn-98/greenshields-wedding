import { useNavigate, useSearchParams } from "react-router-dom";
import tw from "twin.macro";
import { PrimaryButton as PrimaryButtonBase } from "./components/misc/Buttons";
import { useEffect, useState } from "react";
import FormComponent from "./components/aidaform/FormComponent";
import styled from "styled-components";
import { DesktopNavLinks, LogoLink, NavLink, NavLinks, NavToggle } from "./components/header/styles";
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Header from "./components/header";

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-xl mx-auto text-center`
const Input = tw.input`text-white mt-6 first:mt-0 border-b-2 py-3 bg-gray-900 text-4xl focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
const Description = tw.p`mt-4 text-center text-red-500 md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed`


const RadioTitle = tw.h3`text-3xl text-gray-300`;
const RadioGroupContainer = tw.div`flex content-center justify-center`;
const RadioBox = tw.div`flex items-center mr-4`;
const RadioOption = tw.input`w-6 h-4 text-gray-100 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2`;
const RadioLabel = tw.label`ml-2 text-3xl font-medium text-gray-300`;

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

const RsvpPage = () => {
    const navLinks = [
        <NavLinks key={1}>
        </NavLinks>,
    ];

    const [searchParams] = useSearchParams()
    const code = searchParams.get("code");
    const vegan = searchParams.get("vegan");
    const error = searchParams.get("error");

    const [query, setQuery] = useState("");
    const handleChange = (event) => setQuery(event.target.value);

    const [radio, setRadio] = useState("no");
    const onChangeRadio = (event) => setRadio(event.target.value);

    const DAY_CODE = "letsgetmarried";
    const NIGHT_CODE = "timetoparty";

    const navigate = useNavigate();
    useEffect(() => {
            const codeExists = code !== "" && code !== null;
            const codeIsValid = code === DAY_CODE || code === NIGHT_CODE;
            if (codeExists && !codeIsValid) navigate("/rsvp?error=true")
        },
        [code, navigate, DAY_CODE, NIGHT_CODE]
    );

    return (
        <Container>
            <HeroContainer>
                <StyledHeader color="ivory" links={navLinks}/>
            </HeroContainer>
            <StyledAnimationRevealPage>
                <Box>
                    {
                        !code && !vegan &&
                        <Form>
                            <Input
                                type="text"
                                name="code"
                                placeholder="Enter the RSVP code from your invite"
                                value={query}
                                onChange={handleChange}
                            />
                            <SubmitButton type="submit">Submit</SubmitButton>
                            {error && <Description>Unknown invite code, please try again</Description>}
                        </Form>
                    }

                    {
                        code === DAY_CODE &&
                        <Form>
                            <RadioTitle>Are you vegan?</RadioTitle>
                            <RadioGroupContainer>
                                <RadioBox>
                                    <RadioOption
                                        checked={radio === "no"}
                                        id="inline-radio"
                                        type="radio"
                                        value="no"
                                        onChange={onChangeRadio}
                                        name="vegan"
                                    />
                                    <RadioLabel
                                        htmlFor="inline-radio"
                                    >
                                        No
                                    </RadioLabel>
                                </RadioBox>
                                <RadioBox>
                                    <RadioOption
                                        checked={radio === "yes"}
                                        id="inline-2-radio"
                                        type="radio"
                                        value="yes"
                                        onChange={onChangeRadio}
                                        name="vegan"
                                    />
                                    <RadioLabel
                                        htmlFor="inline-2-radio"
                                    >
                                        Yes
                                    </RadioLabel>
                                </RadioBox>
                            </RadioGroupContainer>
                            <SubmitButton type="submit">Submit</SubmitButton>
                        </Form>
                    }

                    {
                        code === NIGHT_CODE &&
                        <FormComponent form="night"/>
                    }

                    {
                        vegan === "yes" &&
                        <FormComponent form="vegan"/>
                    }

                    {
                        vegan === "no" &&
                        <FormComponent form="day"/>
                    }

                </Box>
            </StyledAnimationRevealPage>
        </Container>
    )
}

export default RsvpPage;
