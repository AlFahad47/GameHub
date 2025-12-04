// src/components/Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactItems = [
    { icon: FaEnvelope, title: "Email", info: "support@gamehub.com" },
    { icon: FaPhone, title: "Phone", info: "+880 1234 567890" },
    { icon: FaMapMarkerAlt, title: "Address", info: "Dhaka, Bangladesh" },
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#DC2626]  mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-primary-content">
            We'd love to hear from you! Send us a message or reach out via the
            information below.
          </p>
        </div>

        {/* contact */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="bg-[#DC2626] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <item.icon className="text-white text-3xl mb-3" />
              <h3 className="text-xl text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white ">{item.info}</p>
            </div>
          ))}
        </div>

        {/* form */}
        <div className="bg-[#DC2626] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="textarea textarea-bordered w-full"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
