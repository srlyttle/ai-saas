"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("abc5d916-ca6c-412f-91e6-0183d47e403b");
  }, []);

  return null;
};
