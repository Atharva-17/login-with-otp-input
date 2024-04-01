import React from "react";

const CardFooter = () => {
  return (
    <>
      <p class="mt-6 text-sm font-light text-gray-500 dark:text-[#a1a1a1]">
        By continuing, you agree to our{" "}
        <a
          href="#"
          class="font-medium text-black hover:underline dark:text-white"
        >
          Term
        </a>{" "}
        and{" "} 
        <a
          href="#"
          class="font-medium text-black hover:underline dark:text-white"
        >
          Privacy Policy.
        </a>
      </p>
    </>
  );
};

export default CardFooter;
