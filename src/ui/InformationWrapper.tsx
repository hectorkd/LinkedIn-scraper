import React, { ReactNode } from "react";
import { Box, Typography } from "ui";

type InformationWrapperProps = {
  label: string;
  children: ReactNode;
};

const InformationWrapper = ({ label, children }: InformationWrapperProps): JSX.Element => {
  return (
    <Box>
      <Typography fontWeight={600}>{label}</Typography>
      {children}
    </Box>
  );
};

export default InformationWrapper;
