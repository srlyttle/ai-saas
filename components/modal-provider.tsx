"use client";
import React from "react";
import { ProModal } from "./pro-modal";

export const ModalProvider = () => {
  const [isMounted, setisMounted] = React.useState(false);

  React.useEffect(() => {
    setisMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <ProModal />
    </>
  );
};
