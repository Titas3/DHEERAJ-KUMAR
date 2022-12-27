import React from "react";
// import { IoIosAirplane } from "react-icons/io";
import { IoShirtOutline, IoGlassesSharp, IoWatch, IoGlobeSharp, IoAdd } from "react-icons/io5";
const Categories = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="mt-10 grid grid-cols-4 lg:grid-cols-6 justify-item-center">
        <div className="space-y-2 text-center">
        <div className="w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md">
        <IoShirtOutline size={'2.5rem'}/>
        </div>
        <h1 className="font-semibold">Shirts</h1>
        </div>
        <div className="space-y-2 text-center">
        <div className="w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md">
        <IoGlassesSharp size={'2.5rem'}/>
        </div>
        <h1 className="font-semibold">Shirts</h1>
        </div>
        <div className="space-y-2 text-center">
        <div className="w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md">
        <IoWatch size={'2.5rem'}/>
        </div>
        <h1 className="font-semibold">Shirts</h1>
        </div>
        <div className="space-y-2 text-center">
        <div className="w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md">
        <IoShirtOutline size={'2.5rem'}/>
        </div>
        <h1 className="font-semibold">Shirts</h1>
        </div>
        <div className="space-y-2 text-center">
        <div className="w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md">
        <IoGlobeSharp size={'2.5rem'}/>
        </div>
        <h1 className="font-semibold">Shirts</h1>
        </div>
        <div className="space-y-2 text-center">
        <div className="w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md">
        <IoAdd size={'2.5rem'}/>
        </div>
        <h1 className="font-semibold">Shirts</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
