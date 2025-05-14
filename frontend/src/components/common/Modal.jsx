import * as Dialog from "@radix-ui/react-dialog";
import { RiCloseLargeFill } from "react-icons/ri";

const Modal = ({ open, onOpenChange, title, description, children }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 dark:bg-tertiary/50 backdrop-blur-sm z-40" />
        <Dialog.Content
          aria-describedby="modal-desc"
          className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg
         translate-x-[-50%] translate-y-[-50%] rounded-xl bg-light p-6 shadow-xl dark:bg-dark"
        >
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-semibold">
              {title}
            </Dialog.Title>
            <Dialog.Close className="text-dark dark:text-light hover:scale-125 transition">
              <RiCloseLargeFill />
            </Dialog.Close>
          </div>

          {description && (
            <Dialog.Description id="modal-desc" className="sr-only">
              {description}
            </Dialog.Description>
          )}

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
