"use client";

import { useQuery } from "react-query";

export default function Scientific() {
  async function getMed() {
    const res = await fetch("https://methlab.vercel.app/api/obat");
    const med = await res.json();
    console.log(med);
    return med;
  }

  const { data, isLoading, error } = useQuery("medicines", getMed);
  return <>{"ded"}</>;
}
