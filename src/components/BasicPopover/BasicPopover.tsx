import * as React from 'react';
import { Popover, Typography, IconButton } from '@mui/material';
import Image from "next/image";

type Props = {
  left?: number | null,
  top?: number | null,
  message: string,
  visited: boolean,
}

export const BasicPopover = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  console.log(props.left);
  
  return (
    <>
      <IconButton
        style={{
          position: "absolute",
          left: props.left?.toString() + "%",
          top: props.top?.toString() + "%",
        }}
        onClick={handleClick}
      >
        <Image
          src={"/images/duck_blue.png"}
          alt="Map"
          width={25}
          height={16}
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
        <Typography sx={{ p: 2 }}>{props.message}</Typography>
      </Popover>
    </>
  );
}