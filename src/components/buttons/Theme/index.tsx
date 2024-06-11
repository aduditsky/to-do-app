import styled from 'styled-components';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useThemeContext } from '@/context/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number | string;
}

const Button = styled.button<ButtonProps>`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: ${(props) =>
    typeof props.size === 'number'
      ? `${props.size / 2}px ${props.size}px`
      : '10px 20px'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ThemeButton({ size = 20, ...rest }: ButtonProps) {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Button onClick={toggleTheme} size={size} {...rest}>
      {theme === 'light' ? (
        <MdDarkMode size={size} />
      ) : (
        <MdLightMode size={size} />
      )}
    </Button>
  );
}
