import React from "react";
import { useFetch } from "../../hooks/useFetch";
import UsersView from "../../components/usersView";

const Home = () => {
  const { data, loading, error } = useFetch("/users");
  return (
    <section className="flex items-center justify-center">
      <div className="container">
        <h2 className="text-3xl text-[#0EA5E9]">Users</h2>

        <UsersView data={data} loading={loading} error={error} />
      </div>
    </section>
  );
};

export default Home;
