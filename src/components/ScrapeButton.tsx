import React from "react";

import { Box, Button } from "ui";

type ScrapeButtonProps = {
  onClick: () => void;
  children: string;
};

const ScrapeButton = ({ onClick, children }: ScrapeButtonProps): JSX.Element => {
  return (
    <Box width="100%" display="flex" justifyContent="center" marginBottom={4}>
      <Button variant="contained" color="primary" onClick={onClick}>
        {children}
      </Button>
    </Box>
  );
};

export default ScrapeButton;
