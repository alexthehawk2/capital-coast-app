import React from "react";
import { clients } from "../contents/staticContent";
const Clients = () => {
  return (
    <section id="clients" className="flex flex-row items-center justify-evenly">
      {clients.map((client) => {
        return (
          <img
            className="w-[75px] sm:w-[200px]"
            src={client.logo}
            alt={client.id}
            key={client.id}
          />
        );
      })}
    </section>
  );
};

export default Clients;
