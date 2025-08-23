import { Themes } from "../constants/styles";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("dark");

  const setThemeByName = (name) => {
    setThemeName(name);
  };

  const theme = Themes[themeName];

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: setThemeByName, themeName }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
