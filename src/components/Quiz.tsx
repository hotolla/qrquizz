import React, { useState } from 'react';
import { useRouter } from "next/router";
import { Button, FormControl, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomContainer } from './CustomContainer';

const RadioButton = styled(Button)({
  borderRadius: '50px',
  border: '1px solid black',
  padding: '6px 12px',
  variant: 'outlined',
  minWidth: '280px',
  color: 'black',
  '&:hover': {
    backgroundColor: '#00E6E3',
    color: 'white',
  },

});

export const Quiz = () => {
  const [ value, setValue ] = useState('');
  const router = useRouter();

  const handleButtonClick = (selectedValue: string) => {
    setValue(selectedValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === 'correct') {
      router.push("/");
    }  else {
      router.push("/error");
    }
  };

  return (
    <CustomContainer>

      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} variant="standard">
          
          <Typography variant="h2" mb={2}> Pop quiz: MUI is... </Typography>
            
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
            
            <RadioButton color='success'
              onClick={() => handleButtonClick('correct')}
            >
              The correct!
            </RadioButton>

            <RadioButton color='success'
              onClick={() => handleButtonClick('best')}
            >
              The second!
            </RadioButton>
            
            <RadioButton color='success'
              onClick={() => handleButtonClick('worst')}
            >
              The worst.
            </RadioButton>
          </div>

          <Button sx={{ mt: 2, borderRadius: "50px" }} type="submit" variant="contained" color="success">
            Answer
          </Button>
        </FormControl>
      </form>
    </CustomContainer>
  );
};
