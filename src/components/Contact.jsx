import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import Swal from "sweetalert2"; // Import SweetAlert2

const Contact = () => {
  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100008913103776"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/_dhils12/"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/siti-nur-fadhilah-31378932b/"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email_user"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    email_user: e.target.email_user.value,
    message: e.target.message.value,
  };

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "Cool",
        background: "#fefefe", // light background
        color: "#4CAF50", // Green for success
        showClass: {
          popup: "animate__animated animate__fadeInDown", // Add animation
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp", // Add exit animation
        },
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Something went wrong while sending your message.",
        icon: "error",
        confirmButtonText: "Try Again",
        background: "#fff1f1", // light red background
        color: "#FF3B30", // Red for error
        showClass: {
          popup: "animate__animated animate__shakeX", // Add shaking effect
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp", // Add exit animation
        },
      });
    }
  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      title: "Error",
      text: "There was an error sending your message.",
      icon: "error",
      confirmButtonText: "OK",
      background: "#fff1f1",
      color: "#FF3B30",
    });
  }
};

export default Contact;
