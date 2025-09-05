import React from "react";
import { PulseLoader } from "react-spinners";

const PostsView = ({ data, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center">
        <PulseLoader color="#0EA5E9" size={12} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-medium mt-10">
        Ma'lumotlar topilmadi xatolik yuz berdi
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.map((item) => (
        <div
          className="bg-white rounded-2xl shadow-md border border-slate-200  p-6"
          key={item.id}
        >
          <h2 className="text-slate-700 text-xl capitalize mb-5">{item.title}</h2>
          <p className="text-slate-500 ">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsView;
