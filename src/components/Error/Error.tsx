import { useContext } from "react";
import Image from "next/image";
import { DataContext } from "@/components/DataProvider";
import { Typography } from "@mui/material";
import { CustomContainer } from "../CustomContainer";

export const Error = () => {
  const { errorImg } = useContext(DataContext);

  return (
    <CustomContainer>

      <Image
        priority={false}
        src={errorImg}
        alt="designImg"
        width={200}
        height={210}
      />

      <Typography variant="h1" fontWeight="500">Ooops, somthing went wrong...</Typography>
    </CustomContainer>
  )
};