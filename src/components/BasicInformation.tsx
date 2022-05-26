import React from "react";

import { Stack, Typography } from "ui";

type BasicInformationProps = {
  children: string;
  label: string;
};

const BasicInformation = ({ children, label }: BasicInformationProps): JSX.Element => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography fontWeight={600}>{label}:</Typography>
      <Typography>{children}</Typography>
    </Stack>
  );
};

export default BasicInformation;
