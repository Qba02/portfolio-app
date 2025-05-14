import * as RadixToast from "@radix-ui/react-toast";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const Toast = ({ message, error = false }) => {
  const [open, setOpen] = useState(!!message);

  return (
    open && (
      <RadixToast.Provider swipeDirection="left">
        <RadixToast.Root
          open={open}
          onOpenChange={(open) => setOpen(open)}
          className={error ? "error-toast" : "success-toast"}
          duration={3000}
        >
          <RadixToast.Close className="absolute right-2 text-white hover:scale-125 transition">
            <RiCloseLargeFill />
          </RadixToast.Close>
          <RadixToast.Description>{message}</RadixToast.Description>
        </RadixToast.Root>
        <RadixToast.Viewport />
      </RadixToast.Provider>
    )
  );
};

export default Toast;
