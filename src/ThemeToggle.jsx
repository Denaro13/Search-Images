import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon"></BsFillSunFill>
        ) : (
          <BsFillMoonFill className="toggle-icon"></BsFillMoonFill>
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
