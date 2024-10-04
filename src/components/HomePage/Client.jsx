import React from "react";
import "./styles/Client.css";
const Clients = () => {
  const clients = [
    { id: 1, logo: "/logos/logo1.png", name: "Client 1" },
    { id: 2, logo: "/logos/logo2.png", name: "Client 2" },
    { id: 3, logo: "/logos/logo3.png", name: "Client 3" },
    { id: 4, logo: "/logos/logo8.png", name: "Client 4" },
    { id: 5, logo: "/logos/logo5.png", name: "Client 5" },
    { id: 6, logo: "/logos/logo6.png", name: "Client 6" },
    { id: 7, logo: "/logos/logo7.png", name: "Client 7" },
    { id: 8, logo: "/logos/logo8.png", name: "Client 8" },
    { id: 9, logo: "/logos/logo9.jpg", name: "Client 9" },
    { id: 10, logo: "/logos/logo10.png", name: "Client 10" },
  ];

  return (
    <section id="clients" className="clients">
      <h2 className="client-heading">Our Clients</h2>
      <div className="client-logos">
        <div className="logos-container">
          {clients.concat(clients).map(
            (
              client // Duplicate the list for seamless scrolling
            ) => (
              <div key={client.id} className="client-logo">
                <img className="client-logo-img" src={client.logo} alt={client.name} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
