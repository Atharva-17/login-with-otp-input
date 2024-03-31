"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const [focus, setFocus] = useState("");
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const router = useRouter();
 
  const handleClick = () => {
    setLoader(true);
    router.push("/otp");
  };

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
                  Sign in to your account
                </p>
                <p className="text-base font-normal text-[#a1a1a1]">
                  Let's create your account and get you started.
                </p>
              </div>

              <form>
                {open ? (
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="example@gg.com"
                      onChange={(e) => setFocus(e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <Label htmlFor="number">Phone Number</Label>
                    <Input
                      type="number"
                      placeholder="+91 000-000-0000"
                      onChange={(e) => setFocus(e.target.value)}
                    />
                  </div>
                )}

                <div class="flex items-center justify-end mt-2">
                  <div
                    class="cursor-pointer text-sm font-medium hover:underline text-[#52a8ff]"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? "Login with number?" : "Login with email?"}
                  </div>
                </div>
                <button
                  onClick={handleClick}
                  type="button"
                  disabled={focus === "" ? true : false}
                  className="transition-all mt-6 font-medium w-full text-white bg-black hover:bg-[#454545] rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787] disabled:bg-[#f2f2f2] disabled:dark:bg-[#1a1a1a] disabled:hover:bg-[#f2f2f2] disabled:dark:text-[#8f8f8f] disabled:text-[#8f8f8f] disabled:dark:hover:bg-[#1a1a1a] disabled:cursor-not-allowed"
                >
                  {loader ? <Loader /> : "Continue"}
                </button>

                <div className="my-6 text-[#ededed] flex items-center gap-2 opacity-40">
                  <div className="border bg-[#ededed] w-full h-[1px]"></div>
                  <p className="text-black dark:text-white">or</p>
                  <div className="border bg-[#ededed] w-full h-[1px]"></div>
                </div>

                <div className="flex gap-3">
                  <buton className="cursor-not-allowed bg-black font-medium w-full text-white  rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787]">
                    Google
                  </buton>
                  <buton className="cursor-not-allowed bg-black font-medium w-full text-white rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787]">
                    Twitter
                  </buton>
                  <buton className="cursor-not-allowed bg-black font-medium w-full text-white rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787]">
                    Facebook
                  </buton>
                </div>

                <p class="mt-6 text-sm font-light text-gray-500 dark:text-[#a1a1a1]">
                  By continuing, you agree to our{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-white"
                  >
                    Term
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-white"
                  >
                    Privacy Policy.
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginCard;
