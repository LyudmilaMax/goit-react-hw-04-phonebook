import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  text-align: center;
  height: 24px;
  padding: 6px 12px;
  margin-left: 14px;
  border: none;
  border-radius: 4px;
  color: black;
  background-color: rgba(246, 249, 249, 0.95);
  box-shadow: rgba(44, 88, 90, 0.95) 1px 1px 3px 1px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: rgb(83, 193, 201);
    transform: scale(1.1);
    color: white;
  }
`;