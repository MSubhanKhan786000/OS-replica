import React from "react";
import { Button } from "antd";

const CustomButton = ({ text, ...props }) => {
  return (
    <Button style={{ width: "8rem" }} {...props}>
      {text}
    </Button>
  );
};

export default CustomButton;
