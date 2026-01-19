import { MoveRight } from "lucide-react";
import React from "react";

const RightCard = (props) => {
  return (
    <div className="w-74 h-full relative bg-amber-300 overflow-hidden rounded-4xl shrink-0">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt={props.tag}
      />
      <div className="absolute top-0 p-8 left-0 h-full w-full  flex flex-col justify-between">
        <h2 className="w-[40px] h-[40px] text-center flex justify-center items-center font-semibold bg-white rounded-full">
          {props.id+1}
        </h2>
        <div>
          <p className="text-xl leading-normal mb-8 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            quisquam deleniti soluta!
          </p>
          <div className="flex justify-between items-center">
            <button style={{background:props.color}} className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
             {props.tag}
            </button>
            <button style={{background:props.color}} className="bg-blue-600 text-white font-medium px-2 py-2 rounded-full">
              <MoveRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
