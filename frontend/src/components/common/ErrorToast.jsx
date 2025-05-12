import * as RadixToast from "@radix-ui/react-toast";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const ErrorToast = ({ message }) => {
  const [open, setOpen] = useState(!!message);

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        open={open}
        onOpenChange={setOpen}
        className="relative bg-secondary text-white px-4 py-2 rounded-sm shadow-md z-50"
      >
        <RadixToast.Close className="absolute right-2 text-dark dark:text-light hover:scale-125 transition">
          <RiCloseLargeFill />
        </RadixToast.Close>
        <RadixToast.Description>{message}</RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport />
    </RadixToast.Provider>
  );
};

export default ErrorToast;
