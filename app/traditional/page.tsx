"use client";

import React from "react";
import Card from "../components/card";

const TradionalCategory = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      <div className="flex flex-col px-20">
        <h1 className="text-white font-semibold md:text-[40px] sm:text-[20px]">
          <span className="text-cYellow font-light">| </span>
          Kategori Obat Tradisional
        </h1>
        <div className="flex flex-wrap py-5 gap-5">
          <Card
            img="/images/etnomedisin.jpg"
            title="Ethnomedisin"
            href="/findmed"
          />
          <Card img="/images/filologi.jpg" title="Filologi" href="/findmed" />
          <Card
            img="/images/folklore.jpg"
            title="Indigenous Folklore"
            href="/findmed"
          />
        </div>
      </div>
    </div>
  );
};

export default TradionalCategory;
