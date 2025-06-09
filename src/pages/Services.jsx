import React from 'react';

const Services = () => {
  const services = [
    "Classic Cut",
    "Fade Master",
    "Kids Cut",
    "Traditional Hot Lather Shave",
    "Beard Trim",
    "Head Shave"
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <ul className="space-y-4">
        {services.map(service => (
          <li className="bg-white text-black p-4 rounded shadow" key={service}>
            <strong>{service}</strong>
            <button className="ml-4 px-4 py-1 bg-amber text-white rounded">Book This Service</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
