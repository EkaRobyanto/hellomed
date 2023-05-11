import Link from "next/link";
import React from "react";
type Props = {
  img: string;
  title: string;
  href: string;
};

const Card = ({ img, title, href }: Props) => {
  return (
    <Link href={href}>
      <div className="relative flex items-center justify-center md:min-w-[550px] sm:min-w-[500px] sm:min-h-[200px] md:h-[300px] rounded-[24px] hover:border-4 border-cYellow cursor-pointer">
        <img
          src={img}
          alt={title}
          className="absolute w-full h-full object-cover rounded-[24px]"
        />
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.4)] rounded-b-[24px] h-[30%]">
          <h2 className="font-semibold md:text-[32px] sm:text-[24px] text-white -mt-5">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
