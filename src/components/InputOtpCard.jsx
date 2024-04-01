"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import CardFooter from "./CardFooter";

const InputOtpCard = () => {
  const inputOtpArr = ["", "", "", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(inputOtpArr);
  const [disabled, setDisabled] = useState("");
  const [missing, setMissing] = useState(inputOtpArr);
  const [loader, setLoader] = useState(false);

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    setDisabled(val);
    if (!Number(val)) {
      return;
    }
    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }

    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };

  const handleKeyDown = (e, index) => {
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setInputs(copyInputs);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (!Number(data || data.length !== inputs.length - 1)) {
      return;
    }

    const pasteCode = data.split("");
    setInputs(pasteCode);
    setDisabled(pasteCode);
    refs[inputs.length - 1].current.focus();
  };

  const router = useRouter();

  const handleOnClick = () => {
    
    const missedInput = inputs
      .map((item, index) => {
        if (item === "") {
          return index;
        }
      })
      .filter((item) => item || item === 0);
      setMissing(missedInput)

      if(missedInput.length === 0){
        setLoader(true);
        router.push("/dashboard");
      }

  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  return (
    <>
      <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#0a0a0a]">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a
                href="#"
                class="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  class="w-8 h-8 mr-2"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                />
                Flowbite
              </a>
              <div>
                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#ededed]">
                  Verify with OTP
                </p>
                <p className="text-base font-normal text-[#a1a1a1]">
                  To finish signing up, enter the code we just sent you on your
                  email.
                </p>
              </div>

              <div className="flex gap-3 justify-between">
                {inputOtpArr.map((item, index) => {
                  return (
                    <Input
                      ref={refs[index]}
                      key={index}
                      value={inputs[index]}
                      type="text"
                      className={`text-3xl text-center h-14 ${missing.includes(index) ? "dark:border-[#ff6166] border-[#ff6166]" : ""}`}
                      maxLength="1"
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleOnClick}
                disabled={disabled === "" ? true : false}
                className="transition-all mt-6 font-medium w-full text-white bg-black hover:bg-[#454545] rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787] disabled:bg-[#f2f2f2] disabled:dark:bg-[#1a1a1a] disabled:hover:bg-[#f2f2f2] disabled:dark:text-[#8f8f8f] disabled:text-[#8f8f8f] disabled:dark:hover:bg-[#1a1a1a] disabled:cursor-not-allowed"
              >
                {loader ? <Loader /> : "Continue"}
              </button>

              <CardFooter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InputOtpCard;
