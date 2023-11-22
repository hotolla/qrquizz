import React from 'react';
import { Button} from '@mui/material';

interface IncorrectAnswerFormProps {
    answerResult: string;
    onNext: () => void;
  }
  
export const IncorrectAnswerForm: React.FC<IncorrectAnswerFormProps> = ({
    answerResult,
    onNext,
  }) => (
    <div>
      {answerResult && (
        <form className="p-3 text-center" onSubmit={onNext}>
          <div>Incorrect Answer</div>
  
          <Button
            className="btn btn-primary w-50 justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-4"
            type="submit"
          >
            Next
          </Button>
        </form>
      )}
    </div>
  );
  