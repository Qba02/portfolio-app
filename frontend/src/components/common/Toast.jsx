import * as RadixToast from "@radix-ui/react-toast";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const Toast = ({ message, error = false }) => {
  const [open, setOpen] = useState(!!message);

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        open={open}
        onOpenChange={setOpen}
        className={error ? "error-toast" : "success-toast"}
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

export default Toast;
