import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  border-radius: 4px;
  display: block;
  margin-right: auto;

  text-align: center;
`;
