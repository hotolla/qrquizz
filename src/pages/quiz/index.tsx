import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Button, FormControl, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
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
  const [ value, setValue ] = useState('');
  const [ question, setQuestion ] = useState<IQuiz>(
    {
    questionsId: 0,
    questionMessage: "",
    questionAnswers: []
    }
  );
  
  const router = useRouter();

// add  userEmail?: IUser['email'], locationId?
    useEffect(() => {
    fetchQuestion().then((data) => {
      setQuestion(data);
      console.log(value);
    });
  }, []);
  console.log(value);
  

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    
    setValue((event.target as HTMLInputElement).value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value, event);
    sendAnsweredQuestion(value);
  };

  return (
    <CustomContainer>

      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} variant="standard">
          
          <Typography variant="h3" mb={2}>{question.questionMessage}</Typography>
            
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
            
            <RadioGroup
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value={question.questionAnswers[0]} control={<Radio color='success' />} label={question.questionAnswers[0]} />
              <FormControlLabel value={question.questionAnswers[1]} control={<Radio color='success' />} label={question.questionAnswers[1]} />
              <FormControlLabel value={question.questionAnswers[2]} control={<Radio color='success' />} label={question.questionAnswers[2]} />
            </RadioGroup>
          </div>

          <Button sx={{ mt: 2, borderRadius: "50px" }} type="submit" variant="contained" color="success">
            Answer
          </Button>
        </FormControl>
      </form>
    </CustomContainer>
  );
};

