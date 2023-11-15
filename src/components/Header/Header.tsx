import {Switch} from "@mui/material";

interface Props {
  isDarkTheme: boolean,
  onThemeToggle: () => void,
}
export const Header = ({ isDarkTheme, onThemeToggle }: Props) => {
  return (
    <div>
      <Switch checked={isDarkTheme} onChange={onThemeToggle} />
    </div>
  );
}