'use client'

import {useContext, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { DataContext } from "@/components/DataProvider";
import { Typography } from "@mui/material";
import { AuthButtons } from "../../components/Button";
import { CustomContainer } from "../../components//CustomContainer";

export default async function Page(){
  const { loginMessage, descriptionMessage } = useContext(DataContext);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    // @ts-ignore
    const params = new URLSearchParams(searchParams);
    const eventId = replace(`${pathname}?${params.toString()}`);
    console.log(eventId);
  }, []);

  return (
    <CustomContainer>
      <Typography variant="h1">{loginMessage}</Typography>

      <Image
        priority={true}
        src={"/images/duck_explorer_2.png"}
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