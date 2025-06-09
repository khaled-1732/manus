import React from 'react';

const Contact = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded" />
        <button className="bg-amber text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
