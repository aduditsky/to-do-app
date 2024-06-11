import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 4px;
`;

export const Text = styled.span<{ $completed: boolean }>`
  color: ${(props) => props.theme.colors.text};
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
  flex: 1;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  border: none;
  background: none;
  border-radius: 4px;
  padding: 5px 8px;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  transition: 0.2s ease all;

  &:hover {
    background: #ff8383;
  }
`;
