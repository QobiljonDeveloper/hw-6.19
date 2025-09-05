import React from "react";
import { PulseLoader } from "react-spinners";

const UsersView = ({ data, loading, error }) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-2xl shadow-md border border-slate-200  p-6"
        >
          <div className="flex items-center">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                {user.name}
              </h2>
              <p className="text-sm text-slate-500">@{user.username}</p>
            </div>
          </div>

          <div className="mt-4 text-sm mb-5">
            <p className="text-slate-600">Email: {user.email}</p>
            <p className="text-slate-600 my-3">Phone: {user.phone}</p>
            <p className="text-slate-600">
              <p className="text-cyan-600 hover:underline cursor-pointer">
                {user.website}
              </p>
            </p>
          </div>

          <div className="mt-3 text-sm text-slate-600">
            {user.address.city}, {user.address.street}
          </div>

          <div className="mt-4 pt-3">
            <p className="text-slate-800 font-medium">{user.company.name}</p>
            <p className="text-xs text-slate-500">
              {user.company.catchPhrase}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersView;
