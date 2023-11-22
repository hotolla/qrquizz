import { useContext } from "react";
import Image from "next/image";
import Link from 'next/link'
import { DataContext } from "@/components/DataProvider";
import { Typography } from "@mui/material";
import { AuthButtons } from "../Button";
import { CustomContainer } from "../CustomContainer";

export const Login = () => {
  const { loginMessage, descriptionMessage, loginImg } = useContext(DataContext);

  return (
    <CustomContainer>
      <Typography variant="h1">{loginMessage}</Typography>

      <Image
        priority={false}
        src={loginImg}
        alt="loginImg"
        width={270}
        height={250}
      />

      <Typography variant="h2">Get ready for an adventure!</Typography>
      <Typography variant="subtitle1">{descriptionMessage}</Typography>

      <AuthButtons />

      <Typography variant="h2" sx={{mt: 0.5}}>Login and have fun!</Typography>
      <Link href="https://www.capgemini.com/pl-pl/polityka-prywatnosci/" style={{textDecoration: "none", marginTop: 4}}>Privacy Policy</Link>
    </CustomContainer>
  )
};