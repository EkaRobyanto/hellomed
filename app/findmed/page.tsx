"use client";
import { useSearchParams } from "next/navigation";
import { MedicineTypes } from "@/types/types";
import { api } from "../util/api";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import Image from "next/image";
import FindMedCard from "../components/findmed-card";

export default function FindMedicine() {
  const param = useSearchParams();
  const title = param.get("title");
  if (!title) return <div className="text-8xl">kate lapo kon cok</div>;
  const domain = `${api[title]}api/medicine`;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [err, setErr] = useState("");

  const filtered = data.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    fetch(domain)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setErr(err);
        console.log("error :", err);
      });
  }, []);

  if (isLoading) return <Loading />;

  if (!err)
    return (
      <div className="min-h-screen max-w-screen-xl mx-auto bg-transparent">
        <div className="flex flex-row gap-5 justify-center pt-9">
          <div className="p-2.5 text-sm font-medium text-white bg-cYellow rounded-lg w-10 h-10">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            value={query}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg h-10 block w-[40%] p-2.5"
            placeholder="Masukan nama obat yang ingin dicari"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <div className="text-white font-semibold md:text-[30px] h-10 ">
            <span className="text-cYellow font-light">| </span>
            {title}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 pt-10 justify-center">
          {filtered.length === 0 && query !== "" ? (
            <div className="flex flex-col gap-3">
              <Image
                src="images/mednotfound.png"
                alt="not found"
                className="w-[220px] h-[350px] self-center"
              />
              <div className="w-[40%] text-lg text-white text-center  self-center">
                Sepertinya kami tidak dapat menemukan obat dengan kata kunci
                anda, coba cek kembali kata kunci yang anda masukan
              </div>
            </div>
          ) : (
            filtered.map((element: MedicineTypes, index: any) => {
              return (
                <FindMedCard
                  name={element.name}
                  image={element.image}
                  id={element.id}
                  title={title}
                />
              );
            })
          )}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto text-center">
      error
    </div>
  );
}
