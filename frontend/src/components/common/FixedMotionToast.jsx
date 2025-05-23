import { MotionToast, Toast } from "@components";

function FixedMotionToast({ error, message }) {
  return (
    <MotionToast>
      <Toast message={message} error={error} />
    </MotionToast>
  );
}

export default FixedMotionToast;
