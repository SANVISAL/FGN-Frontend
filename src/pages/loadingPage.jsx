import "../../src/index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../assets";

export default function Loading() {
  const navigate = useNavigate();
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { state: { fromLoading: true } });
      setShowMain(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-screen h-screen">
      {!showMain && (
        <div className="intro">
          <div className="fadeIn flex flex-row items-center">
            <img src={profile} alt="logo" width={50} height={50} />
            <h2 className="fadeIn">First Gen Net</h2>
          </div>
        </div>
      )}
      {showMain && (
        <main className="animate">
          <div className="content"></div>{" "}
        </main>
      )}
    </div>
  );
}
