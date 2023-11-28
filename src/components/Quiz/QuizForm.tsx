import React, { forwardRef, useEffect, useRef} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Button,
} from '@mui/material';

interface Answer {
  id: number;
  getDescription: () => string;
}

interface Question {
  id: number;
  getDescription: () => string;
  getAnswers: () => Answer[];
  isMultipleChoice: () => boolean;
}

interface QuizFormProps {
  question: Question | null;
  onSubmit: SubmitHandler<FormValues>;
}

interface FormValues {
  questionId: number| null;
  answerId: number[];
}

export const QuizForm: React.FC<QuizFormProps> = forwardRef(({ question, onSubmit }, ref) => {
  const { handleSubmit, register } = useForm<FormValues>();
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(formRef.current);
      } else {
        ref.current = formRef.current;
      }
    }

    return () => {
      if (ref) {
        if (typeof ref !== 'function') {
          ref.current = null;
        }
      }
    };
  }, [ref]);

  return (
    <div>
      {question && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={(node) => (formRef.current = node)}
        >
          <h3>{question.getDescription()}</h3>
          <input
            name="questionId"
            id={`question-${question.id}`}
            value={question.id}
            type="hidden"
            // ref={register}
          />

          <FormGroup>
            {question.getAnswers().map((answer) => (
              <FormControl key={answer.id} className="form-check px-0">
                <FormControlLabel
                  control={
                    <input
                      className="btn-check"
                      name="answerId"
                      id={`answer-${answer.id}`}
                      type={question.isMultipleChoice() ? 'checkbox' : 'radio'}
                      value={answer.id}
                      // ref={register}
                    />
                  }
                  label={answer.getDescription()}
                  htmlFor={`answer-${answer.id}`}
                />
              </FormControl>
            ))}
          </FormGroup>

          <Button
            className="btn btn-primary w-50 justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-4"
            type="submit"
          >
            Answer
          </Button>
        </form>
      )}
    </div>
  );
});
