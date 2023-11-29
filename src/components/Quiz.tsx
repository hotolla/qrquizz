import React, { useState } from 'react';
import {Button, FormControl, FormHelperText, FormLabel, Typography} from '@mui/material';
import { fetchQuizData } from '@/api/quiz';

export const Quiz = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleButtonClick = (selectedValue: string) => {
    setValue(selectedValue);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        {/*<FormLabel id="quiz">Pop quiz: MUI is...</FormLabel>*/}
        <Typography variant="h2" mb={2}> Pop quiz: MUI is... </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button
            onClick={() => handleButtonClick('best')}
            variant="contained"
            sx={{ background: value === 'best' ? 'red' : 'inherit', mb: 1, width: '150px', borderRadius: '50px' }}
          >
            The best!
          </Button>
          <Button
            onClick={() => handleButtonClick('worst')}
            variant="contained"
            sx={{ background: value === 'worst' ? 'red' : 'inherit', width: '150px', borderRadius: '50px' }}
          >
            The worst.
          </Button>
        </div>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, width: '150px', borderRadius: "50px" }} type="submit" variant="outlined" color="secondary">
          Answer
        </Button>
      </FormControl>
    </form>
  );
};
