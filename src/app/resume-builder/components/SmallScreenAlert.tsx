"use client";
import { Alert } from "@heroui/react";
import React from "react";

const SmallScreenAlert = () => {
  return (
    <div className="flex justify-center items-center sm:hidden h-full p-4">
      <Alert color="danger" title="Please use larger screen to continue" />
    </div>
  );
};

export default SmallScreenAlert;
