import React from "react";
import { LoginForm, RegisterForm, CommentForm } from "@components";

function AdminPanelPage() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
      <CommentForm/>
    </>
  );
}

export default AdminPanelPage;
