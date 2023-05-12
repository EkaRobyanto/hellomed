"use client";
import { MedicineTypes } from "@/types/types";
import Image from "next/image";
import React from "react";

const FindMedCard = ({ name, image, id }: MedicineTypes) => (
  <div className="flex flex-col rounded-lg w-[160px] h-[220px] md:w-[180px] md:h-[240px] bg-white cursor-pointer">
    <Image
      src={image ?? "/images/404.png"}
      alt={name}
      height={250}
      width={350}
      className="rounded-t-lg object-contain w-full"
    />
    <div className="flex flex-col p-2 pt-2 justify-between">
      <div className=" md:text-[20px] text-[15px] font-bold text-black truncate">
        {name}
      </div>
      <div className="mt-8 bg-cYellow border border-black rounded-lg flex flex-row max-w-fit">
        <div className="mx-3 text-black">Detail Obat</div>
        <div className="mx-3 text-black font-bold ">></div>
      </div>
    </div>
  </div>
);

export default FindMedCard;
