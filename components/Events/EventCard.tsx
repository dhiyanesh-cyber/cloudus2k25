import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Button, useDisclosure, Image, Drawer, DrawerContent, DrawerFooter, Link, DrawerBody, AvatarGroup, Tooltip, Avatar, DrawerHeader } from "@heroui/react";
import { CardSpotlight } from "../ui/card-spotlight";

// Define TypeScript interface for the event prop
interface Event {
    id: string;
    title: string;
    description: string;
    image: string;
    time: string;
    date: string;
    location: string;
}

interface EventCardProps {
    event: Event;
    index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        // Stagger the appearance of cards
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 100 * index); // Each card appears 100ms after the previous one

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        // <div
        //     className={`transform transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        //         }`}
        // >
        //     <Card
        //         isBlurred
        //         className="border-none bg-background/60 dark:bg-default-100/50 w-full pt-4 max-w-md min-h-[250px]"
        //         shadow="sm"
        //     >
        //         <CardBody className="text-center">
        //             <h2 className="text-xl text-slate-200 font-light">{event.title}</h2>
        //             <p className="py-2 text-default-500 font-light">{event.description}</p>
        //             <div className="flex flex-col gap-1 mt-2">
        //                 <p className="text-sm text-default-500">📅 {event.date}</p>
        //                 <p className="text-sm text-default-500">📍 {event.location}</p>
        //             </div>
        //         </CardBody>
        //         <CardFooter className="flex justify-center gap-2">
        //             <Button color="default" className="w-full" variant="flat" size="md">
        //                 Learn More
        //             </Button>
        //         </CardFooter>
        //     </Card>
        // </div>

        <div
            className={`transform transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <CardSpotlight>
                <h2 className="text-xl text-white font-bold relative z-20">{event.title}</h2>
                <p className="py-2 text-white font-light relative z-20">{event.description}</p>
                <div className="flex flex-col gap-1 mt-2 relative z-20">
                    <p className="text-sm text-white">📅 {event.date}</p>
                    <p className="text-sm text-white">📍 {event.location}</p>
                </div>

                <Button color="default" className="w-full relative mt-6 z-20" variant="solid" size="md" onPress={onOpen}>
                    Learn More
                </Button>


                <Drawer
                    hideCloseButton
                    backdrop="blur"
                    classNames={{
                        base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
                    }}
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="right"
                >
                    <DrawerContent>
                        {(onClose) => (
                            <>
                                <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                                    <Tooltip content="Close">
                                        <Button
                                            isIconOnly
                                            className="text-default-400"
                                            size="sm"
                                            variant="light"
                                            onPress={onClose}
                                        >
                                            <svg
                                                fill="none"
                                                height="20"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                                            </svg>
                                        </Button>
                                    </Tooltip>
                                </DrawerHeader>
                                <DrawerBody className="pt-16">
                                    <div className="flex w-full justify-center items-center pt-4">
                                        <Image
                                            isBlurred
                                            isZoomed
                                            alt="Event image"
                                            className="aspect-square w-full hover:scale-110"
                                            height={300}
                                            src="/Events/image.png"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 py-4">
                                        <h1 className="text-2xl font-bold leading-7">{event.title}</h1>
                                        <p className="text-sm text-default-500">
                                            {event.description}
                                        </p>
                                        <div className="mt-4 flex flex-col gap-3">
                                            <div className="flex gap-3 items-center">
                                                <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                                                    <div className="text-tiny bg-default-100 py-0.5 text-default-500">April</div>
                                                    <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                                                        12
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <p className="text-medium text-foreground font-medium">
                                                        {event.date}
                                                    </p>
                                                    <p className="text-small text-default-500">{event.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 items-center">
                                                <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                                                    <svg
                                                        className="text-default-500"
                                                        height="20"
                                                        viewBox="0 0 16 16"
                                                        width="20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        >
                                                            <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                                                            <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <p className="group gap-x-0.5 text-medium text-foreground font-medium">{event.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col mt-4 gap-3 items-start">
                                                <span className="text-medium font-medium">About the event</span>
                                                <div className="text-medium text-default-500 flex flex-col gap-2">
                                                    <p>
                                                        Hey Bay Area! We are excited to announce our next meetup on Tuesday,
                                                        November 19th.
                                                    </p>
                                                    <p>
                                                        Join us for an evening of insightful discussions and hands-on workshops
                                                        focused on the latest developments in web development and design. Our
                                                        featured speakers will share their experiences with modern 1
                                                        frameworks, responsive design patterns, and emerging web technologies.
                                                        You&apos;ll have the opportunity to network with fellow developers and
                                                        designers while enjoying refreshments and snacks.
                                                    </p>
                                                    <p>
                                                        During the main session, we&apos;ll dive deep into practical examples of
                                                        building scalable applications, exploring best practices for component
                                                        architecture, and understanding advanced state management techniques. Our
                                                        interactive workshop portion will let you apply these concepts directly,
                                                        with experienced mentors available to provide guidance and answer your
                                                        questions. Whether you&apos;re a seasoned developer or just starting your
                                                        journey, you&apos;ll find valuable takeaways from this session.
                                                    </p>

                                                    <p className="mt-4">
                                                        Brought to you by the{" "}
                                                        <Link className="text-default-700" href="https://heroui.com">
                                                            HeroUI team
                                                        </Link>
                                                        .
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col mt-4 gap-3 items-start">
                                                <span className="text-small text-default-500">Hosted By</span>
                                                <div className="flex gap-2 items-center">
                                                    <Avatar
                                                        name="HeroUI"
                                                        size="sm"
                                                        src="https://heroui.com/android-chrome-192x192.png"
                                                    />
                                                    <span className="text-small text-default-500">HeroUI Team</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </DrawerBody>
                                <DrawerFooter className="flex flex-col gap-1">
                                    <Link className="text-default-400" href="mailto:hello@heroui.com" size="sm">
                                        Contact the host
                                    </Link>
                                    <Link className="text-default-400" href="mailto:hello@heroui.com" size="sm">
                                        Report event
                                    </Link>
                                </DrawerFooter>
                            </>
                        )}
                    </DrawerContent>
                </Drawer>


            </CardSpotlight>
        </div>

    );
};

export default EventCard;


const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-500 mt-1 shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};