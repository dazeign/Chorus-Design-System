import { XIcon } from "lucide-react";
import { ChevronDownIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

const SharingModal = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col gap-y-8 px-8 py-6 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">Sharing</h1>
          <XIcon />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <h1 className="text-sm">Editors</h1>
          <div className="w-full flex gap-x-1.5 items-center p-2 h-fit rounded-lg border-[1] border-[E2E4E9] border-[#E2E4E9] border">
            <div className="flex items-center justify-center w-fit gap-x-1 border-[1] rounded-md border-[#E2E4E9] border bg-[F6F8FA] bg-[#F6F8FA] h-fit px-2.5 py-1">
              <h1 className={"w-fit text-[#525866]"}>User 1</h1>
              <XIcon
                xmlns={"http://www.w3.org/2000/svg"}
                width={24}
                height={24}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={2}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className="lucide lucide-x w-4 h-4"
              ></XIcon>
            </div>
            <div className="flex items-center justify-center w-fit gap-x-1 border-[1] rounded-md border-[#E2E4E9] border bg-[F6F8FA] bg-[#F6F8FA] h-fit px-2.5 py-1">
              <h1 className={"w-fit text-[#525866]"}>User 1</h1>
              <XIcon
                xmlns={"http://www.w3.org/2000/svg"}
                width={24}
                height={24}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={2}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className="lucide lucide-x w-4 h-4"
              ></XIcon>
            </div>
            <div className="flex items-center justify-center w-fit gap-x-1 border-[1] rounded-md border-[#E2E4E9] border bg-[F6F8FA] bg-[#F6F8FA] h-fit px-2.5 py-1">
              <h1 className={"w-fit text-[#525866]"}>User 1</h1>
              <XIcon
                xmlns={"http://www.w3.org/2000/svg"}
                width={24}
                height={24}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={2}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className="lucide lucide-x w-4 h-4"
              ></XIcon>
            </div>
            <ChevronDownIcon
              xmlns={"http://www.w3.org/2000/svg"}
              width={24}
              height={24}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={2}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              className="lucide lucide-chevron-down w-5 h-5"
            ></ChevronDownIcon>
          </div>
        </div>
        <div className="h-[44px] w-full border-[#e2e4e9] border rounded-lg flex items-center justify-between px-2.5 py-1.5">
          <SearchIcon />
          <h1 className={"w-fit text-[#525866]"}>User 1</h1>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <h1 className="text-sm">Viewers</h1>
          <div className="w-full flex gap-x-1.5 items-center p-2 h-fit rounded-lg border-[1] border-[E2E4E9] border-[#E2E4E9] border justify-between">
            <div className="text-[#525866]">Anyone can view</div>
            <ChevronDownIcon
              xmlns={"http://www.w3.org/2000/svg"}
              width={24}
              height={24}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={2}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              className="lucide lucide-chevron-down w-5 h-5 justify-between"
            ></ChevronDownIcon>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 bg-[#183B56]">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default SharingModal;
