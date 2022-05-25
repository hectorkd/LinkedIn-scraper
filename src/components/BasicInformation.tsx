import React from "react";
import { Box, Typography } from "ui";

type BasicInformationProps = {
  children: string;
  label: string;
};

const BasicInformation = ({ children, label }: BasicInformationProps): JSX.Element => {
  return (
    <Box>
      <Typography>{label}</Typography>
      <Typography>{children}</Typography>
    </Box>
  );
};

export default BasicInformation;
