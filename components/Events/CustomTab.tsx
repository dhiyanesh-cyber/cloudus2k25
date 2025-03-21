import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import { NextPage } from "next";
import EventCard from "./EventCard"; // Import the EventCard component

// Define TypeScript interfaces for the event data
interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
}

const technicalEvents: Event[] = [
  {
    id: "tech1",
    title: "Hackathon 2025",
    description: "A 24-hour coding marathon to build innovative solutions.",
    image: "https://img.freepik.com/premium-photo/blue-green-yellow-mixed-gradient-color-square-background_7954-28137.jpg",
    date: "April 15-16, 2025",
    location: "Engineering Block",
  },
  {
    id: "tech2",
    title: "Web Development Workshop",
    description: "Learn modern web development techniques with React and Node.js.",
    image: "https://img.freepik.com/premium-photo/blue-green-yellow-mixed-gradient-color-square-background_7954-28137.jpg",
    date: "April 20, 2025",
    location: "Computer Science Lab",
  },
  {
    id: "tech3",
    title: "AI Challenge",
    description: "Compete to build the most efficient machine learning model.",
    image: "https://img.freepik.com/premium-photo/blue-green-yellow-mixed-gradient-color-square-background_7954-28137.jpg",
    date: "May 5, 2025",
    location: "Science Building",
  },
];

const nonTechnicalEvents: Event[] = [
  {
    id: "nontech1",
    title: "Cultural Night",
    description: "Showcase your talents in music, dance, and art.",
    image: "https://img.freepik.com/premium-photo/blue-green-yellow-mixed-gradient-color-square-background_7954-28137.jpg",
    date: "April 25, 2025",
    location: "Main Auditorium",
  },
  {
    id: "nontech2",
    title: "Debate Competition",
    description: "Express your views on contemporary topics.",
    image: "https://img.freepik.com/premium-photo/blue-green-yellow-mixed-gradient-color-square-background_7954-28137.jpg",
    date: "April 30, 2025",
    location: "Seminar Hall",
  },
  {
    id: "nontech3",
    title: "Photography Contest",
    description: "Capture moments that tell a story.",
    image: "https://img.freepik.com/premium-photo/blue-green-yellow-mixed-gradient-color-square-background_7954-28137.jpg",
    date: "May 10, 2025",
    location: "Campus Grounds",
  },
];

const EventsTab: NextPage = () => {
  const [selected, setSelected] = useState("technical");
  const [isChanging, setIsChanging] = useState(false);

  const handleTabChange = (key: string) => {
    setIsChanging(true);
    setTimeout(() => {
      setSelected(key);
      setIsChanging(false);
    }, 300); // This should match the fade-out duration
  };

  return (
    <div className="w-full flex flex-col items-center justify-start gap-6 py-8 md:py-10 min-h-[90svh]">
      <div className="w-full max-w-6xl px-4">
        <Tabs
          variant="underlined"
          color="warning"
          aria-label="Event categories"
          className="flex flex-row justify-center mb-8"
          classNames={{
            tabList: "gap-6 relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
          selectedKey={selected}
          size="lg"
          onSelectionChange={(key) => handleTabChange(String(key))}
        >
          <Tab key="technical" title="Technical">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"
                }`}
            >
              {technicalEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </Tab>

          <Tab key="non-technical" title="Non-Technical">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"
                }`}
            >
              {nonTechnicalEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default EventsTab;
