import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 4px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  border-radius: 4px;
`;
