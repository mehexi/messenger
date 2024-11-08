import React from "react";
import ChatHeading from "./components/ChatHeading";
import ChatBody from "./components/ChatBody";

const page = async ({ params }) => {
  const url = process.env.URL;

  const id = await params.id;
  const res = await fetch(`${url}api/user/?id=${id}`);
  const data = await res.json();

  console.log(data);

  return (
    <section className="flex flex-col h-screen justify-between">
      <ChatHeading data={data} />
      <ChatBody/>
    </section>
  );
};

export default page;
