import React from "react";
import NumberComponent from "../number/number";

const ServiceCard = ({ number, text, Icon }) => {
  return (
    <div className="lg:w-80 w-full border-1 border-orange-500 bg-gray-800 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative flex flex-col gap-4  overflow-hidden">
      <div className="w-full h-[20%] flex flex-row justify-between">
        <NumberComponent number={number} />
        <div className="fill-violet-500 w-12">
          <img src={Icon} alt="Icon" className="w-full h-auto" />
        </div>
      </div>
      <h2 className="font-bold text-xl text-white">{text}</h2>
      <p className="text-sm text-gray-100 text-zinc-500 leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
        adipisicing elit
      </p>
    </div>
  );
};

export default ServiceCard;
{
  /* <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
          </svg> */
}
