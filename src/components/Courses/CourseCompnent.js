import React from "react";

const CoursesComponent = ({ data, clickOnItem }) => {
  return (
    <>
      <div
        className="bg-[#FFDA78] flex flex-col items-center justify-center shadow-md rounded-lg p-3 m-3"
        onClick={() => {
          clickOnItem(data);
        }}
      >
        <div className="w-full object-cover">
          <img width={350} src={data.imageUrl} />
        </div>
        <h2 className="title">{data.courseName}</h2>
        <p className="description">{data.description}</p>
      </div>
    </>
  );
};

export default CoursesComponent;
