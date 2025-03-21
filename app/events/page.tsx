'use client'

import CustomTab from "@/components/Events/CustomTab";
import { title } from "@/components/primitives";

export default function EventsPage() {
  return (
    <div className="flex flex-col w-full min-h-svh justify-start items-center space-y-4">
      <h1 className={`${title({ color: "cyan", size: "xs" })} font-pressStart`}>Events</h1>
      <CustomTab />
    </div>
  );
}
