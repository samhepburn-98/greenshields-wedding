import React from "react";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
    Answer,
    Column,
    Description,
    Divider,
    FAQSContainer, GiftsContainer,
    GiftsDescription,
    HeaderContent,
    Heading,
    QuestionText,
    SectionContainer
} from "./styles";

export default ({
                    subheading = "Got any questions?",
                    heading = "Q&A",
                    description = "For all our friends and family who have lots of questions, please check out our Q&A first!",
                    faqs = [
                        {
                            question: "When is the RSVP deadline?",
                            answer:
                                "Please RSVP by 1st June 2023 so we can get an accurate headcount. The password to complete the RSVP form is on your invite."
                        },
                        {
                            question: "Is there a dress code?",
                            answer:
                                "We ask that you wear formal attire. No jeans. No trainers."
                        },
                        {
                            question: "Can I bring a +1?",
                            answer:
                                "We are restricted on numbers so unfortunately not able to offer +1s."
                        },
                        {
                            question: "Can I stay at the White Hart Inn?",
                            answer:
                                "There are a small number of rooms reserved which have been reserved for the Saturday night only. If you would like to book one of these rooms please let Mike or Mariesa know, you will not be able to book directly with the venue."
                        },
                        {
                            question: "Where should I park?",
                            answer:
                                "There is a pay and display car park opposite the church, along with free street parking in the surrounding roads. You can pay at the pay and display using the PayByPhone app. There is plenty of free parking at the venue, however any cars left overnight will need to be collected the following morning."
                        },
                        {
                            question: "Is the wedding indoors or outdoors?",
                            answer:
                                "Our wedding ceremony and reception is indoors and there is covered area outside with heaters… hopefully we won’t need them!"
                        },
                        {
                            question: "Is it okay to take pictures with our phones and cameras during the wedding?",
                            answer:
                                "We ask that the ceremony itself is 'unplugged', please do not take photos or videos - we have a wonderful photographer there for this! However, we welcome LOADS of photos throughout every other part of the day."
                        },
                        {
                            question: "Who should I call with questions?",
                            answer:
                                "Leading up to the wedding, feel free to contact Mike or Mariesa with any questions. However, if you have any problems on the day we ask that you contact Hannah or Sam using the numbers below.\n Hannah Greenshields - 07590 434561\n Sam Hepburn - 07775 730891"
                        },
                    ]
                }) => {
    return (
        <SectionContainer>
            <ContentWithPaddingXl>
                <Column>
                    <GiftsContainer style={{ width: "100%" }}>
                        <Heading>Gifts</Heading>
                        <GiftsDescription>
                            Sharing our special day with us is more than enough, however for those wishing to buy a
                            gift, a cash contribution towards making our dream honeymoon come true would be very much
                            appreciated.
                        </GiftsDescription>
                        <Divider/>
                    </GiftsContainer>

                    <HeaderContent>
                        {/*{subheading && <Subheading>{subheading}</Subheading>}*/}
                        <Heading>{heading}</Heading>
                        {description && <Description>{description}</Description>}
                    </HeaderContent>
                    <FAQSContainer>
                        {
                            faqs.map((faq, index) =>
                                <div key={index}>
                                    <QuestionText>{faq.question}</QuestionText>
                                    <Answer>{faq.answer}</Answer>
                                    {
                                        index !== faqs.length - 1 &&
                                        <Divider/>
                                    }
                                </div>
                            )
                        }
                    </FAQSContainer>
                </Column>
            </ContentWithPaddingXl>
        </SectionContainer>
    );
};
