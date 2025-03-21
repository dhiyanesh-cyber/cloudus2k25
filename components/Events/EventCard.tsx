import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";

// Define TypeScript interface for the event prop
interface Event {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    location: string;
}

interface EventCardProps {
    event: Event;
    index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Stagger the appearance of cards
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 100 * index); // Each card appears 100ms after the previous one

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div
            className={`transform transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 w-full pt-4 max-w-md min-h-[250px]"
                shadow="sm"
            >
                <CardBody className="text-center">
                    <h2 className="text-xl text-slate-200 font-light">{event.title}</h2>
                    <p className="py-2 text-default-500 font-light">{event.description}</p>
                    <div className="flex flex-col gap-1 mt-2">
                        <p className="text-sm text-default-500">📅 {event.date}</p>
                        <p className="text-sm text-default-500">📍 {event.location}</p>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-center gap-2">
                    <Button color="default" className="w-full" variant="flat" size="md">
                        Learn More
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default EventCard;
