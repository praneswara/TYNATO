import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // replace with your service ID
        "YOUR_TEMPLATE_ID",  // replace with your template ID
        e.target,
        "YOUR_PUBLIC_KEY"    // replace with your public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear the form
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="p-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4">
            <img src="./images/TYNATO_LOGO.png" alt="TYNATO Logo" className="h-12" />
            <span className="text-2xl font-bold text-gray-900">TYNATO</span>
          </div>

          {/* Address */}
          <p className="text-gray-700">
            No.00, 11th Cross, Thillai Nagar, <br />
            Near Max fashion, Woraiyur, <br />
            Trichy – 620003, Tamilnadu, India
          </p>

          {/* Phones */}
          <p className="flex items-center text-gray-700 space-x-2">
            <FaPhone className="text-gray-900" />
            <span>010 9999 9999</span>
          </p>
          <p className="flex flex-col text-gray-700 space-y-1">
            <span className="flex items-center space-x-2">
              <FaPhone className="text-gray-900" /> <span>+91 73975 87108</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaPhone className="text-gray-900" /> <span>+91 73975 87108</span>
            </span>
          </p>

          {/* Email */}
          <p className="flex items-center space-x-2 text-gray-700">
            <FaEnvelope className="text-gray-900" />
            <span>support@tynato.com</span>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-900 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaWhatsapp />
            <FaPinterestP />
            <FaLinkedinIn />
          </div>

          {/* Careers Info */}
          <div className="mt-6 text-gray-700">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Careers</h3>
            <p className="italic">
              Openings:{" "}
              <span className="font-normal">
                Web Designer / UI/UX Designer / Mobile App Developer / SEO Analysis / Digital Marketing
              </span>
            </p>
            <p className="mt-2">
              We are looking to strengthen our Innovation Community. Send your resume & best works to{" "}
              <span className="text-gray-900 font-semibold">support@tynato.com</span>. You will be hearing from us soon!
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="w-full px-4 py-2 rounded bg-gray-50 border border-gray-200 focus:outline-none"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile*"
                required
                className="w-full px-4 py-2 rounded bg-gray-50 border border-gray-200 focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-Mail*"
              required
              className="w-full px-4 py-2 rounded bg-gray-50 border border-gray-200 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message*"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-50 border border-gray-200 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
