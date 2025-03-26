import React, { useState } from "react";
import mapIcon from "../../assets/menuIcon/mapIcon.svg";
import InputField from "../../components/inputs/input";
import emailIcon from "../../assets/menuIcon/mailIcon.svg";
import phoneIcon from "../../assets/menuIcon/phoneIcon.svg";
import SeeMoreButton from "../buttons/seeMore";

const ContactForm = () => {
  const handleClick = () => {
    e.preventDefault();
    alert(`Email: ${email}\nLocation: ${Location} \nMessage: ${message}`);
  };
  const [email, setEmail] = useState("");
  const [Location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="w-auto h-auto flex lg:flex-row flex-col rounded-xl  py-8 px-4 lg:gap-4 gap-6 lg:justify-center justify-start ">
      <div className="w-auto lg:h-[300px] h-auto flex flex-col lg:gap-6 gap-2 items-start justify-start ">
        <div className="w-auto h-auto flex flex-row items-center justify-center gap-4">
          <img src={mapIcon} alt="image01" width={40} height={40} />
          <div className="w-auto h-auto flex flex-col items-start">
            <p className="text-xl font-bold">Location</p>
            <p>Melbourne Street. No 20</p>
          </div>
        </div>
        <div className="w-auto h-auto  flex flex-row lg:justify-center justify-start gap-4">
          <img src={emailIcon} alt="image01" width={40} height={40} />
          <div className="w-auto h-auto flex flex-col items-start">
            <p className="text-xl font-bold">E-mail</p>
            <p>sanvisal@gmail.com</p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row justify-start gap-4">
          <img src={phoneIcon} alt="image01" width={40} height={40} />
          <div className="w-auto h-auto flex flex-col items-start">
            <p className="text-xl font-bold">Phone</p>
            <p>+855 1234 5678</p>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto flex flex-col items-start gap-4">
        <InputField
          width="w-[400px]"
          height="h-12"
          type="location"
          value={Location}
          onChange={handleChangeLocation}
          placeholder="Enter Name ..."
        />
        <InputField
          width="w-[400px]"
          height="h-12"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Enter Email ..."
        />
        <InputField
          width="w-[400px]"
          height="h-[100px]"
          type="message"
          value={message}
          onChange={handleChangeMessage}
          placeholder="Enter Message ..."
        />
        <SeeMoreButton text="Submit" onClick={handleClick} />
      </div>
    </div>
  );
};
export default ContactForm;
