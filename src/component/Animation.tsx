import { useState, useEffect } from "react";

const Animation = () => {
  const [step1, setStep1] = useState<Boolean>(true);
  const [step2, setStep2] = useState<Boolean>(false);
  const [step3, setStep3] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (step1) {
        setStep1(false);
        setStep2(true);
        setStep3(false);
      } else if (step2) {
        setStep2(false);
        setStep1(false);
        setStep3(true);
      } else {
        setStep1(true);
        setStep2(false);
        setStep3(false);
      }
    }, 2000);
  }, [step1, step2, step3]);

  return (
    <>
      <div className="p-4  w-9/12 m-auto relative mb-10">
        <div
          className={`banner flex items-center justify-between m-auto w-11/12 text-black `}
        >
          <div
            className={`absolute left-0 right-0 h-0.5 rounded-2xl  m-auto w-9/12 bg-black`}
          ></div>

          <div
            className={`step relative w-12 h-20 flex rounded-full flex-col justify-center items-center z-3 text-center rounded text-white ${
              step1 ? "bg-red-300 w-20" : ""
            }`}
            id="step1"
          >
            <i className="ri-search-2-line"></i>
            <p
              className={`font-medium ${step1 ? "animate- visible" : "hidden"}`}
            >
              Browse
            </p>
          </div>

          <div
            className={`step relative w-12 h-20 flex rounded-full flex-col justify-center items-center z-3 text-center rounded text-white ${
              step2 ? "bg-red-300 w-20" : ""
            }`}
            id="step2"
          >
            <i className="ri-shopping-cart-2-line"></i>
            <p
              className={`font-medium leading-5 ${
                step2 ? "animate- visible" : "hidden"
              }`}
            >
              Add to cart
            </p>
          </div>

          <div
            className={`step relative w-12 h-20 flex rounded-full flex-col justify-center items-center z-3 text-center rounded text-white ${
              step3 ? "bg-red-300 w-20" : ""
            }`}
            id="step3"
          >
            <i className="ri-money-rupee-circle-line"></i>
            <p
              className={`font-medium ${step3 ? "animate- visible" : "hidden"}`}
            >
              Checkout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
