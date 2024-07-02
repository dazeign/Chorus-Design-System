import React from "react";

const CampaignCard = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col items-start rounded-xl py-2.5 gap-y-3.5 border-[#E2E4E9] border shadow-md">
        <div className="flex items-center justify-between px-6 w-full">
          <h1 className="text-lg">Beshear</h1>
          <div className="w-5 h-5">
            <img
              src={"/images/tempo-image-20240701T211423908Z.png"}
              alt={"Pasted Image"}
              width={40}
              height={40}
              className={"w-full h-full"}
            />
          </div>
        </div>
        <div className="flex justify-between px-6 w-full">
          <div className="flex items-center gap-x-1 border w-28 justify-center rounded-xl px-7 py-1.5 shadow-sm">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T222623849Z.png"}
                alt={"Pasted Image"}
                width={40}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs text-[#525866]">Docs</h1>
          </div>
          <div className="flex items-center gap-x-1 border px-6 py-1 w-28 justify-center rounded-xl shadow-sm">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T222442844Z.png"}
                alt={"Pasted Image"}
                width={41}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs text-[#525866]">News</h1>
          </div>
        </div>
        <div className="flex justify-between px-6 w-full">
          <div className="flex items-center gap-x-1 border w-28 justify-center px-6 py-1.5 rounded-xl shadow-sm">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T222715120Z.png"}
                alt={"Pasted Image"}
                width={41}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs text-[##525866] text-[#525866]">Config</h1>
          </div>
          <div className="flex items-center gap-x-1 border px-6 py-1 w-28 justify-center rounded-xl shadow-sm">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T223222531Z.png"}
                alt={"Pasted Image"}
                width={40}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs text-[#525866866] text-[#525866]">Social</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white py-3">
        <div className="flex items-center justify-between px-6">
          <h1>Beshear</h1>
          <div className="w-5 h-5">
            <img
              src={"/images/tempo-image-20240701T211423908Z.png"}
              alt={"Pasted Image"}
              width={40}
              height={40}
              className={"w-full h-full"}
            />
          </div>
        </div>
        <div className="flex justify-between px-6">
          <div className="flex items-center gap-x-1 border rounded-lg px-6 py-1 w-28 justify-center">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T211423908Z.png"}
                alt={"Pasted Image"}
                width={40}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs">Docs</h1>
          </div>
          <div className="flex items-center gap-x-1 border rounded-lg px-6 py-1 w-28 justify-center">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T211423908Z.png"}
                alt={"Pasted Image"}
                width={40}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs">News</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white py-3">
        <div className="flex items-center justify-between px-7">
          <h1>Beshear</h1>
          <div className="w-5 h-5">
            <img
              src={"/images/tempo-image-20240701T211423908Z.png"}
              alt={"Pasted Image"}
              width={40}
              height={40}
              className={"w-full h-full"}
            />
          </div>
        </div>
        <div className="flex justify-between px-7">
          <div className="flex items-center justify-between gap-x-1 w-fit border rounded-lg px-6 py-1">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T211423908Z.png"}
                alt={"Pasted Image"}
                width={40}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs">Docs</h1>
          </div>
          <div className="flex items-center justify-between gap-x-1 w-fit border rounded-lg px-6 py-1">
            <div className="w-5 h-5">
              <img
                src={"/images/tempo-image-20240701T211423908Z.png"}
                alt={"Pasted Image"}
                width={40}
                height={40}
                className={"w-full h-full"}
              />
            </div>
            <h1 className="text-xs">News</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignCard;
