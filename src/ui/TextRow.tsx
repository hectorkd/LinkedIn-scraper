import React from "react";

import { Stack, Typography } from "ui";

type TextRowProps = {
  children: string;
  label: string;
};

const TextRow = ({ children, label }: TextRowProps): JSX.Element => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography fontWeight={600}>{label}</Typography>
      <Typography>{children}</Typography>
    </Stack>
  );
};

export default TextRow;
