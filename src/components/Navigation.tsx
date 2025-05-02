import React from 'react'
import { Accordion, AccordionBody, Button } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom';
import "../App.css"

interface NavigationProps{
    refs: React.RefObject<null>[]
    titles: string[]
}

interface OutletContext {
  isDarkMode: boolean;
}

const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

function Navigation({refs, titles}: NavigationProps) {
  const { isDarkMode } = useOutletContext<OutletContext>();

  return (
    <Accordion 
        // defaultActiveKey="0"
        className="section-navigation"
        >
        <a href="https://elisecarman.github.io/UIUXportfolio/"><h1 className='home'>Home</h1></a>

        <Accordion.Item 
        eventKey="0"
        style={{
            backgroundColor: "transparent",
            border: "none"
        }}
        >
        <Accordion.Header>Sections</Accordion.Header>
        <AccordionBody 
            style={{margin: "0rem", padding: "0rem"}}
            >
            {
                titles.map((title, index) => (
                    <Button 
                    style={{width: "100px", display: "block", alignItems: "center", justifyContent: "center" }}
                    variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(refs[index])} className="w-100 mb-3" >
                    <h3 style={{fontSize: "1rem"}}>{title}</h3>
                    </Button>
                ))
            }
        </AccordionBody>
        </Accordion.Item>
        </Accordion>
  )
}

export default Navigation