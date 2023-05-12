"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Image from "next/image";
import { api } from "../util/api";
import { MedicineDetail } from "@/types/types";
import Link from "next/link";

const MedDetail = () => {
  const param = useSearchParams();
  const name = param.get("name");
  const id = param.get("id");
  const domain = `${api[name]}api/medicine/${id}`;
  if (!name) return <div className="text-8xl">error</div>;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<MedicineDetail>();
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(domain)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        console.log(data.description);
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
      <div className="min-h-screen max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-5 justify-center pt-9 pl-48">
          <div className="text-white font-semibold md:text-[30px] h-10 ">
            <span className="text-cYellow font-light">| </span>
            {data!.name}
          </div>
          <div className="flex flex-row gap-5">
            <Image
              src={data?.image == null ? "/images/404.png" : data?.image}
              alt={data!.name}
              width={400}
              height={250}
              quality={100}
              className="rounded-lg w-[400px] h-[250px] border-white border-2"
            />
            <div className="flex flex-col gap-2">
              <div className="text-white font-normal md:text-[30px] h-10 ">
                <span className="text-cYellow font-light">| </span>
                Deskripsi
              </div>
              <div className="text-white font-normal md:text-[20px] h-10 pl-5">
                {data?.description === ""
                  ? "Belum ada data"
                  : data?.description}
              </div>
              <div className="text-white font-normal md:text-[30px] h-10">
                <span className="text-cYellow font-light">| </span>
                Bahan
              </div>
              <div className="text-white font-normal md:text-[20px] h-10 pl-3 ">
                <ul>
                  {data!.ingredients.length === 0
                    ? "Belum ada data"
                    : data?.ingredients.map((item) => {
                        return <li>- {item.name}</li>;
                      })}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white font-normal md:text-[30px] h-10 pt-4">
            <span className="text-cYellow font-light">| </span>
            Cara Pemakaian
          </div>
          <div className="text-white font-normal md:text-[20px] h-10 pl-5 pt-2">
            {data?.usage_rules}
            <p>
              {data?.ways_to_use === "" ? "Belum ada data" : data?.ways_to_use}
            </p>
          </div>
          <div className="text-white font-normal md:text-[30px] h-10 pt-10">
            <span className="text-cYellow font-light">| </span>
            Ingin Berkontribusi?
            <Link
              href={
                name === "Filologi"
                  ? "https://github.com/r-G7D/ailment_alleviate/releases"
                  : api[name]
              }
            >
              <span className="text-cYellow font-light cursor-pointer pl-2">
                Klik disini{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto text-center">
      error
    </div>
  );
};

export default MedDetail;
