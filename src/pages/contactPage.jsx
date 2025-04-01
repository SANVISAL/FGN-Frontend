import React from "react";
import { ContactForm, Label, GoogleMapCard } from "../components";
import contactIcon from "../assets/menuIcon/contactIcon.svg";
const ContactPage = () => {
  return (
    <div className="w-full h-auto  border  bg-gray-800 flex flex-col rounded-xl py-8 px-8 gap-10 ">
      <Label Icon={contactIcon} text="Contact Us" />
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="w-full h-auto font-bold flex flex-row gap-3">
          <h1>Contact</h1>
          <h1 className="text-green-500">Me</h1>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when first
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <div className="w-full flex justify-center">
          <ContactForm />
        </div>
        <div className="w-full h-auto">
          <GoogleMapCard />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
