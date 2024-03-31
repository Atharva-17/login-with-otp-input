"use client";

import React, { useState } from "react";

const LoginCard = () => {
  const [focus, setFocus] = useState("");
  const [open, setOpen] = useState(false);

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

              <form class="" action="">
                {open ? (
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      onChange={(e) => setFocus(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@gg.com"
                      class="bg-gray-50 border  text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#0a0a0a] dark:border-[#2e2e2e] dark:placeholder-[#454545] dark:text-white dark:focus:ring-[#454545] dark:focus:border-[#454545]"
                      required=""
                    />
                  </div>
                ) : (
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      onChange={(e) => setFocus(e.target.value)}
                      type="number"
                      name="number"
                      id="number"
                      placeholder="+91 000-000-0000"
                      class="bg-gray-50 border focus:ring-4  text-gray-900 sm:text-sm rounded-md focus:ring-[#878787] focus:border-[#878787] block w-full p-2.5 dark:bg-[#0a0a0a] dark:border-[#2e2e2e] dark:placeholder-[#454545] dark:text-white dark:focus:ring-[#454545] dark:focus:border-[#454545]"
                      required=""
                    />
                  </div>
                )}

                <div class="flex items-center justify-end mt-2">
                  <div
                    class="cursor-pointer text-sm font-medium text-primary-600 hover:underline dark:text-[#52a8ff]"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? "Login with number?" : "Login with email?"}
                  </div>
                </div>
                <button
                  disabled={focus === "" ? true : false}
                  type="submit"
                  class="transition-all mt-6 font-medium w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787] disabled:bg-[#1a1a1a] disabled:text-[#8f8f8f] disabled:hover:bg-[#1a1a1a] disabled:cursor-not-allowed"
                >
                  Continue
                </button>

                <div className="my-6 text-[#ededed] flex items-center gap-2 opacity-40">
                  <div className="border bg-[#ededed] w-full h-[1px]"></div>
                  <p>or</p>
                  <div className="border bg-[#ededed] w-full h-[1px]"></div>
                </div>

                <div className="flex gap-3">
                  <buton className="cursor-not-allowed font-medium w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787]">
                    Google
                  </buton>
                  <buton className="cursor-not-allowed font-medium w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787]">
                    Twitter
                  </buton>
                  <buton className="cursor-not-allowed font-medium w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-md text-sm px-5 py-2.5 text-center dark:text-[#0a0a0a] dark:bg-[#ededed] dark:hover:bg-[#878787] dark:focus:ring-[#878787]">
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
