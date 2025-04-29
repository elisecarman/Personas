import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Page from "./components/Page";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeMediaQuery.matches);
  
      const handleChange = (event: MediaQueryListEvent) => {
        setIsDarkMode(event.matches);
      };
      darkModeMediaQuery.addEventListener("change", handleChange);
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleChange);
      };
    }, []);
  

  return (
    <div className={isDarkMode ? "dark-theme" : ""} >
    <Page>
    <Container data-bs-theme={isDarkMode? "dark": "light"} style={{margin: '0', padding: '0', width: '100vw'}}>
      {/* <NavBar/> */}
      <Outlet context={{ isDarkMode }}/>
    </Container>
    </Page>
    </div>
  )
}

export default App
