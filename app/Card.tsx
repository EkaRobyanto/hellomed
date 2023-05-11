import React from "react";
type Props = {
  img: string;
  title: string;
  href: string;
};

const Card = ({ img, title, href }: Props) => {
  return (
    <div
      className="relative flex items-center justify-center min-w-[600px] h-[200px] cursor-pointer">
      <img
        src={img}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px] hover:border-4 border-cYellow "
      />
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.4)] rounded-b-[24px] h-[30%]">
        <h2 className="font-semibold sm:text-[32px] text-[24px] text-white -mt-5">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
