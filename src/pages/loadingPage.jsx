import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { state: { fromLoading: true } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
