import styled from 'styled-components';

export const Filters = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.text : props.theme.colors.background};
  color: ${(props) =>
    props.active ? props.theme.colors.background : props.theme.colors.text};
`;
