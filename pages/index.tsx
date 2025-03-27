import { Card, CardBody } from "@heroui/card";


import { title, subtitle } from "@/components/primitives";

import Background from "@/components/background";
import EventsPage from "@/components/Events/Events";
import FAQPage from "@/components/FaQ/FaQ";
import ContactUsPage from "@/components/ContactUs/Contact";


import { HiCalendarDays } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { Divider } from "@heroui/divider";
import { motion } from "motion/react";

import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export default function Home() {
    return (
        <div >
            <Background />

            <section className="flex flex-col items-center justify-start gap-4 py-8 md:py-10 min-h-[90svh]" >

                <div className="inline-block max-w-xl text-center justify-center">


                    <TextGenerateEffect words="School of computing" />

                    <br />

                    <span className={`text-slate-300 font-light`}>
                        proudly presents
                    </span>
                    <br />
                    <br />
                    <span
                        className={`${title({ color: "cyan" })} font-pressStart`}
                    >
                        Cloudus
                    </span>

                    <br />
                    <span
                        className={`text-3xl font-pressStart`}
                    >
                        2k25
                    </span>

                    <br />
                    <br />

                    <span className="text-slate-300 font-light">
                        9th National Level Technical Symposium
                    </span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[510px] gap-8 py-8">
                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[610px]"
                        shadow="sm">
                        <CardBody className="flex flex-row items-center justify-center gap-2">
                            <HiCalendarDays />
                            <p>April 12th</p>
                        </CardBody>
                    </Card>

                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[610px]"
                        shadow="sm">
                        <CardBody className="flex flex-row items-center justify-center gap-2">
                            <FaLocationDot />
                            <p>SSMIET Campus</p>
                        </CardBody>
                    </Card>
                </div>
                <h1>Registration fee : ₹200 Only !!!!!!</h1>
            </section>


            <Divider />

            <section id="events" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <EventsPage />
            </section>

            <section id="contactUs" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <ContactUsPage />
            </section>

            <section id="faq" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <FAQPage />
            </section>

        </div>
    );
}