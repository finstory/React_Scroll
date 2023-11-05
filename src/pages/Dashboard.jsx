import React, { useEffect, useState } from "react";
import { useRedux } from "../context/useRedux";
import { useCustomizeServices } from "../services/useCustomizeServices";
import { useHomeServices } from "../services/useHomeServices";

export const Dashboard = () => {
  const { home } = useHomeServices();

  return <div></div>;
};
