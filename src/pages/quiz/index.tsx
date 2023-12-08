import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Button, FormControl, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomContainer } from '../../components/CustomContainer';
import { IQuiz } from '@/components/DataProvider/types';
import { fetchQuestion, sendAnsweredQuestion } from '@/api/data';

const RadioButton = styled(Button)({
  borderRadius: '50px',
  padding: '6px 12px',
  variant: 'outlined',
  minWidth: '280px',
});

export default function Quiz() {
  const [ value, setValue ] = useState({});
  const [ question, setQuestion ] = useState<IQuiz>(
    {
    questionsId: 0,
    questionMessage: "",
    questionAnswers: []
    }
  );
  
  const router = useRouter();

    useEffect(() => {
    fetchQuestion().then((data) => {
      setQuestion(data);
      console.log(value);
    });
  }, []);

  const handleButtonClick = (selectedValue: string) => {
    setValue(selectedValue);
  };

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    
    // sendAnsweredQuestion(event.target.);
    if (value === 'correct') {
      router.push("/");
    }  else {
      router.push("/error");
    }
  };

  return (
    <CustomContainer>

      <form onSubmit={(value) => handleSubmit(value)}>
        <FormControl sx={{ m: 3 }} variant="standard">
          
          <Typography variant="h3" mb={2}>{question.questionMessage}</Typography>
            
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
            
            <RadioButton color='success' variant='outlined'
              onClick={() => handleButtonClick(`${question.questionAnswers[0]}`)}
            >
              The correct!
            </RadioButton>

            <RadioButton color='success' variant='outlined'
              onClick={() => handleButtonClick(`${question.questionAnswers[1]}`)}
              >
              {question.questionAnswers[1]}
            </RadioButton>
            
            <RadioButton color='success' variant='outlined'
              onClick={() => handleButtonClick(`${question.questionAnswers[2]}`)}
              >
              {question.questionAnswers[2]}
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

