import * as RadixToast from "@radix-ui/react-toast";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const Toast = ({ message }) => {
  const [open, setOpen] = useState(!!message);

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        open={open}
        onOpenChange={setOpen}
        className="bg-secondary text-white px-4 py-2 rounded shadow-md fixed bottom-4 right-4 z-50"
      >
        <RadixToast.Close>
          <RiCloseLargeFill />
        </RadixToast.Close>
        <RadixToast.Description>{message}</RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport />
    </RadixToast.Provider>
  );
};

export default Toast;
