import * as React from 'react';
import { Popover, Typography, IconButton } from '@mui/material';
import Image from "next/image";

type PopverProps = {
  top?: string | undefined,
  left?: string | undefined,
  right?: string | undefined,
  bottom?: string | undefined,
  text: string
}

export const BasicPopover = (popverProps: PopverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Image
          src={"/images/duck_blue.png"}
          alt="Map"
          width={25}
          height={16}
          style={{
            position: "absolute",
            top: popverProps.top,
            left: popverProps.left,
            right: popverProps.right,
            bottom: popverProps.bottom,
          }}
        />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{popverProps.text}</Typography>
      </Popover>
    </div>
  );
}