import React from "react";
import Sidebar from "./Sidebar";

export default function layout({ children }) {
  return (
    <div className='cont flex flex-col-reverse sm:flex-row my-24'>
      <Sidebar />
      <div className="ml-0 sm:ml-12">{children}</div>
    </div>
  );
}
