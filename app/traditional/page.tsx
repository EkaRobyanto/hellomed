"use client";

import React from "react";
import Card from "../components/Card";

const TradionalCategory = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col px-10 py-10">
        <h1 className="text-white font-bold md:text-[40px] sm:text-[20px]">
          <span className="text-cYellow font-light">| </span>
          Temukan Obat Berdasarkan Jenis
        </h1>
        <div className="flex flex-wrap gap-5 mt-5">
          <Card img="/images/etnomedisin.jpg" title="Ethnomedisin" href="#" />
          <Card img="/images/filologi.jpg" title="Filologi" href="#" />
          <Card
            img="/images/folklore.jpg"
            title="Indigenous Folklore"
            href="#"
          />
        </div>
      </div>
    </div>
  );
};

export default TradionalCategory;
