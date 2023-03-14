import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgba(98, 209, 216, 0.9);
  border-radius: 10px;
  box-shadow: rgb(93 92 92) 0px 0px 7px 0px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FormikField)`
  width: 300px;
  height: 24px;
  margin-top: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  box-shadow: rgb(220 220 220) 2px 2px 3px 1px;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 6px 12px;
  margin: 0 auto;
  margin-top: 18px;
  line-height: 1.63;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  color: black;
  background: rgba(187, 194, 194, 0.95);
  box-shadow: rgb(220 220 220) 2px 2px 3px 1px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
    color: #585656;
    border: none;
    transform: scale(1.1);
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-weight: 500;
  color: rgba(185, 0, 6, 0.8);
`;
