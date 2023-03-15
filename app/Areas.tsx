import React from "react";
import { TbLocation, TbMapPin } from "react-icons/tb";
import areas from "../data/serviceAreas";

export default function Areas() {
  return (
    <div className='bg-light-300/50'>
      <div className='cont py-24'>
        
          <div className='flex flex-col justify-start items-center'>
            <div className='flex space-x-2'>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-secondary-600'></div>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-secondary-600'></div>
              <div className='h-5 w-5 rounded-r-full rounded-l-full mb-2 bg-secondary-600'></div>
            </div>
            <h3 className='h2'>
              Service Area
            </h3>
          </div>
       
        <ul className='mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center'>
          {areas.map((area) => {
            return (
              <li className='p1 flex items-center gap-1 text-light-800' key={area.id}>
                <span className="text-secondary-600"><TbMapPin /></span>
                {area.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
