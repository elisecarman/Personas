import { useRef} from "react";
import '../App.css';
import mouse_simple from "../assets/accessible-component/mouse-simple.png"
import mouse_improved from "../assets/accessible-component/mouse-improved.png"
import keyboard_simple from "../assets/accessible-component/keyboard-simple.png"
import keyboard_improved from "../assets/accessible-component/keyboard-improved.png"
import disabled_improved_annotated from "../assets/accessible-component/disabled-improved-annotated.png"
import long_hover_improved_annotated from "../assets/accessible-component/long-hover-improved-annotated.png"
import chrome_a from "../assets/accessible-component/chrome-abled.png"
import chrome_d from "../assets/accessible-component/chrome-disabled.png"
import spotify_a from "../assets/accessible-component/spotify-abled.png"
import spotify_d from "../assets/accessible-component/spotify-disabled.png"
import shellshock_a from "../assets/accessible-component/shellshock-abled.png"
import shellshock_d from "../assets/accessible-component/shellshock-disabled.png"
import { Row, Col, Dropdown, DropdownButton, Image, Table, Card} from 'react-bootstrap'
import Section from "../components/Section";
import Callout from "../components/Callout";
import Navigation from "../components/Navigation";


function AccessibleComponent() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);

  const refs = [
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    section6Ref,
    section7Ref,
    section8Ref,
  ]

  const titles = [
    "Intro",
    "Entities",
    "Inputs Table",
    "Outputs Table",
    "Inputs Redesign",
    "Outputs Redesign",
    "Look Redesign",
    "Conclusion"
  ]

  return (
    <div>
      <Navigation refs={refs} titles={titles}/>
      <Section first={true} ref={section1Ref}>
        <h1 className="mb-5">Is your Dropdown Menu up to par?</h1>
        <Row className="justify-content-start mb-5">
          <Col>
            <h3 className="mb-5">Oh look. A dropdown menu. Simple right?</h3>
          </Col>
          <Col>
          <DropdownButton variant="dark" data-bs-theme="dark" title="Click Me" className="mb-5">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-app-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
        <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-down" viewBox="0 0 16 16">
        <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-app-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
        <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-down" viewBox="0 0 16 16">
        <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
        </Row>
        <Callout>
          Yet a lot of thought goes into designing a good dropdown menu. Take the time to interact with this menu.
          <br />
          How do you open it, collapse it? Can you interact with it with your keyboard instead?
          Can you open it using tab?
          Is the state of the menu clear to you as you navigate it? Did you experience any counter intuitive behaviors?
          <br />
          <br />
          Many applications choose different implementations for their dropdown menus. Let's compare a few together, and come up with our own improvements!
        </Callout>
        
      </Section>

      <Section first={false} ref={section2Ref}>
        <h2>Entities</h2>
        <Row className="mb-4">
          <Col md={4} >
            <Card className="bootleg-card p-3 h-100">
              <Card.Title>Chrome</Card.Title>
              <Card.Subtitle className="mb-3">bookmark dropdown</Card.Subtitle>
              <Card.Img className="mb-2" src={chrome_d}></Card.Img>
              <Card.Img src={chrome_a}></Card.Img>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="bootleg-card p-3 h-100">
              <Card.Title>Spotify </Card.Title>
              <Card.Subtitle className="mb-3">profile dropdown</Card.Subtitle>
              <Card.Img className="mb-2" src={spotify_d}></Card.Img>
              <Card.Img src={spotify_a}></Card.Img>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="bootleg-card p-3 h-100">
              <Card.Title>ShellShock.io</Card.Title>
              <Card.Subtitle className="mb-3">game mode dropdown</Card.Subtitle>
              <Card.Img className="mb-2" src={shellshock_d}></Card.Img>
              <Card.Img src={shellshock_a}></Card.Img>
            </Card>
          </Col>
        </Row>
        <Callout>
          For this Dropdown Menu analysis, we'll be looking at the following three dropdowns:
          <br />
          - the Chrome bookmarks dropdown
          <br />
          - the Spotify profile dropdown
          <br />
          - the ShellShock.io game mode dropdown
          <br />
          How do these all compare? Which user interactions do they allow and prioritize? How can they be improved?
        </Callout>
      </Section>

      <Section first={false} ref={section3Ref}>
        <h2> Comparing Inputs </h2>
        <Callout>
          Let's first look at our interactions with these components.
          What if you don't have access to a mouse and must use a keyboard?
          What if you rely on a screen reader?
          A well designed component should allow varied inputs!</Callout>
        <div style={{minWidth: "600px", overflowX: "auto"}}>
        <Table  className="mt-5" >
          <thead>
            <tr>
              <th className="w-10">#</th>
              <th className="w-25">Chrome Bookmark</th>
              <th className="w-5"></th>
              <th className="w-25">Spotify Profile</th>
              <th className="w-5"></th>
              <th className="w-25">ShellShock.io Game Mode</th>
              <th className="w-5"></th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={4}>Mouse/ Touchpad</td>
              <td>Click menu button to open menu/ click item to select</td>
              <td></td>
              <td>Click menu button to open menu/ click item to select</td>
              <td></td>
              <td>Click menu button to open menu/ click item to select</td>
              <td></td>
            </tr>
            <tr >
              <td>Click away to collapse menu</td>
              <td></td>
              <td>Click away to collapse menu</td>
              <td></td>
              <td>Collapses after some time or if click away</td>
              <td></td>
            </tr>
            <tr >
              <td>Can’t select item text</td>
              <td>-1</td>
              <td>Can’t select item text</td>
              <td>-1</td>
              <td>Can’t select item text</td>
              <td>-1</td>
            </tr>
            <tr >
              <td>Can drag and drop item (which becomes url when dropped)</td>
              <td>+1</td>
            </tr>
            <tr >
              <td rowSpan={4}>Keyboard</td>
              <td>navigate through menu with up/down arrows</td>
              <td></td>
              <td>navigate through menu with up/down arrows</td>
              <td></td>
              <td>cannot navigate through with keys</td>
              <td>-1</td>
            </tr>
            <tr >
              <td>not accessible with tab</td>
              <td>-1</td>
              <td>menu button accessible with tab but not items</td>
              <td>-0.5</td>
              <td>not accessible with tab</td>
              <td>-1</td>
            </tr>
            <tr >
              <td>escape to close menu/ enter to select item</td>
              <td></td>
              <td>escape to close menu/ enter to select item</td>
              <td></td>
              <td>enter to close menu</td>
              <td></td>
            </tr>
            <tr >
              <td>use left/right arrow to open and close folder items</td>
              <td></td>
            </tr>
            {/* Touch */}
            <tr>
              <td>Touch</td>
              <td>No dropdown bookmarks on mobile</td>
              <td></td>
              <td>Tap to open/ Tap to select item/ Tap away to close</td>
              <td></td>
              <td>Only available on browser</td>
              <td></td>
            </tr>
            <tr>
              <td><b>Total</b></td>
              <td></td>
              <td><b>-1</b></td>
              <td></td>
              <td><b>-1.5</b></td>
              <td></td>
              <td><b>-3</b></td>
            </tr>

          </tbody>
        </Table>
        </div>

        <Callout>
          In the table above we assign positive points for particularly helpful interaction features, and take off points for lacking accessibility. <br />
          Chrome comes out on top, and marks itself apart for its extra drag and drop functionality. ShellShock.io comes last, with very few keyboard inputs.<br />
          ShellShock.io may assume its users would have access to a mouse, considering the game is a fps. Chrome on the other hand caters to various users.
          Spotify scored very low, but unlike Shellshock.io, it cannot assume their users will have a mouse, and should create a more accessible component.
        </Callout>
      </Section>

      <Section first={false} ref={section4Ref}>
        <h2>Comparing Outputs</h2>
        <div style={{minWidth: "600px", overflowX: "auto"}}>
        <Table striped>
          <thead>
            <tr>
              <th className="w-10">#</th>
              <th className="w-25">Chrome Bookmark</th>
              <th className="w-5"></th>
              <th className="w-25">Spotify Profile</th>
              <th className="w-5"></th>
              <th className="w-25">ShellShock.io Game Mode</th>
              <th className="w-5"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hover</td>
              <td>lighter background</td>
              <td></td>
              <td>lighter background, underlined</td>
              <td></td>
              <td>darker background</td>
              <td></td>
            </tr>
            <tr>
              <td>Focused</td>
              <td>lighter background. 
                Screen reader announces the name, type (external link/ folder item), state (collapsed), and index of each item in the list.
                Can select individual letter within the item name for the screen reader to read with left/right arrows.
                </td>
              <td>+1</td>
              <td>lighter background, underlined. 
                Screen reader announces the name, type (external link/ mode item), state (checkmarked), and index of each item in the list.
                Cannot select individual item name letters.
                </td>
              <td></td>
              <td>Cannot focus items with keyboard, and cannot use screen reader on them.</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>Long Hover</td>
              <td>light background, helpful labels appear next to items</td>
              <td>+1</td>
              <td>light background, profile username appears next to menu button</td>
              <td>+1</td>
              <td>n/a</td>
              <td></td>
            </tr>
            <tr>
              <td>Selected</td>
              <td>n/a</td>
              <td></td>
              <td>darker background</td>
              <td></td>
              <td>n/a</td>
              <td></td>
            </tr>
            <tr>
              <td>Active</td>
              <td>n/a</td>
              <td></td>
              <td>checkmark (for mode items)</td>
              <td></td>
              <td>checkmark (for mode items)</td>
              <td></td>
            </tr>
            <tr>
              <td>Focus Order</td>
              <td>can't access menu with tab</td>
              <td>-1</td>
              <td>can't access items with tab</td>
              <td>-0.5</td>
              <td>can't access menu with tab</td>
              <td>-1</td>
            </tr>
            <tr>
              <td><b>Total</b></td>
              <td></td>
              <td><b>1</b></td>
              <td></td>
              <td><b>0.5</b></td>
              <td></td>
              <td><b>-2</b></td>
            </tr>
          </tbody>
        </Table>
        </div>
        <Callout>
          For the most part, states are well indicated for all these components.
          Chrome and Spotify stand out by implementing a long hover functionality:
          For Chrome, the name of the item and its associated link pop up in a label.
          For Spotify, the profile username pops up next to the profile picture.
          Shellshock.io could have similarly displayed a game mode description label on long hover.
          Chrome's component is a bit better adapted for screen readers than Spotify's as it permits announcing individual letters of the item name.
          <br />
          <br />
          Because the items in each dropdown menu serve different purposes, we shouldn't expect all to have implemented an "active" state.
          The Shellshock.io menu serves to choose a gamemode, and thus needs an active state. Spotify has a "private session" item which similarly displays a checkmark when active.
          Chrome has no use for the active state.

        </Callout>
      </Section>

      <Section first={false} ref={section5Ref}>
        <h2>Inputs Redesign</h2>
        <h4>Spotify</h4>
        <Callout>
          Shellshock.io's accessibility is poor, but fixing Spotify seems like a priority considering its wide user base.
          Let's improve its mouse/keypad state model first.
        </Callout>
        <Image className="bootleg-image" src={mouse_simple} rounded fluid />
        <Callout>
          Let's draw from Chrome's good example and add a long hover state on which item links will be displayed.
          Like with Chrome bookmarks, users should be able to drag and drop these links if needed.
        </Callout>
        <Image className="bootleg-image" src={mouse_improved} rounded fluid />
      </Section>

      <Section first={false} ref={section6Ref}>
        <h2>Outputs Redesign</h2>
        <h4 className="mb-2"> Spotify</h4>
        <Image className="bootleg-image" src={keyboard_simple} rounded fluid />
        <Callout>
          For the keyboard inputs, let's fix the Spotify dropdown access order and enable opening the menu with tab.
          This will allow keyboard users to actually open and use the dropdown menu.
          Secondly, let's translate the long hover state described above to the active state, accessible with right and left arrow keys.
        </Callout>
        <Image className="bootleg-image" src={keyboard_improved} rounded fluid />

      </Section>

      <Section first={false} ref={section7Ref}>
        <h2 className="mb-3">Look Redesign</h2>
        <Callout>
          Let's mock up this added long hover state. Additionally, let's improve the look of the menu button.
          While many users might be used to clicking on a profile photo to access the profile menu, newer users might not think to do so.
          Adding a small arrow in the same style as other Spotify icons should help hint at a dropdown.
        </Callout>
        <Row className="mb-4 mt-3" style={{ backgroundColor: "#000000", color: "#f2f2f2", padding: "2rem", borderRadius: "5px" }} >
          <Col md={6}>
            <h4>Disabled</h4>
            <Image src={disabled_improved_annotated} fluid></Image>
            <h5 className="mt-4" style={{ fontSize: "15px" , fontFamily: "Fira Code, monospace"}}>
              added an arrow next to the profile to better indicate the presence of a dropdown menu.
              The arrow points up when the menu is inactive, and down otherwise
            </h5>
          </Col>
          <Col md={6}>
            <h4>Long Hover</h4>
            <Image src={long_hover_improved_annotated} fluid></Image>
            <h5 className="mt-4" style={{ fontSize: "15px", fontFamily: "Fira Code, monospace"}}>
              added a helpful pop up on long hover. The pop up displays the outgoing link, which may be selected or drag/dropped
            </h5>
          </Col>
        </Row>
        <Row >
          <Col md={3} >
            <h5 className="callout h100" style={{ fontSize: "15px" }}>
              Learnability <br /><br />
              Adding an arrow next to the profile picture improves learnability.
              It helps explicitly indicate that the user can interact with the profile picture/arrow.
            </h5>
          </Col>
          <Col md={3}>
            <h5 className="callout h100" style={{ fontSize: "15px" }}>
              Memorability <br /><br />
              Keeping this new arrow in the same style as the other icons further promotes memorability.
              Once the user remembers these icons are actionable, they will remember the arrow is too.
            </h5>
          </Col>
          <Col md={3}>
            <h5 className="callout h100" style={{ fontSize: "15px" }}>
              Efficiency <br /> <br />
              Both the profile picture and arrow can be selected to open the menu, maintaining a  quick interaction.
              Furthermore, the pop up for the external link may be drag and dropped, saving the user the effort of opening the link then copying it.
            </h5>
          </Col>
          <Col md={3}>
            <h5 className="callout h100" style={{ fontSize: "15px" }}>
              Accessibility<br /> <br />
              Improving keyboard access and enabling tab and focus order vastly improves the component's accessibility.
              Previously, the user had to click on the menu button to open it, and only then could they use their keyboard to navigate the menu.
            </h5>
          </Col>
        </Row>

      </Section>

      <Section first={false} ref={section8Ref}>
        <h2>Conclusion</h2>
        <h5>
          Where the observed components did well, and how it inspired my redesign
        </h5>
        <Callout>
          A few of Chrome's functionalities stood out to me during this analysis. 
          Its pop up label helps users gain insight into the item content, and its drag and dropability improves efficiency. 
          I decided to reuse these elements in my redesign of the Spotify dropdown menu. The menu contains a number of outgoing links which the user may need visual or copy/paste access to.
        </Callout>
        <h5>
          How my design accounts for unaddressed accessibility considerations
        </h5>
        <Callout>
          All the components I examined were less accessible to keyboard users. 
          Shellshock.io's only keyboard interaction was closing the menu with enter. 
          Chrome did much better, allowing navigation with arrow and enter/escape keys, but its dropdown menu and items are excluded from the focus order and unreachable with tab.
          Finally, Spotify allowed many keyboard interactions, and had its menu button accessible with tab, but not its items.
          I chose to fix Spotify's design by adding its items to the focus order and adding pop up labels resembling Chrome's. 
        </Callout>
        <h5>
          How my changes solve a mismatch in our world
        </h5>
        <Callout>
          Before watching Kat Holmes' talk, I thought Spotify was the better app to improve of the three I examined. 
          An online video game like Shellshock.io is inherently ablist: users with the best reaction time ans the best attention to visual and auditive details will perform better. 
          A music streaming application like Spotify on the other hand has no excuse: Many more people, including deaf and hard of hearing people, can enjoy musical soundwaves.
          By adding the profile dropdown menu to the focus order, keyboard user will be able to reach out to support and edit their settings without any help from a mouse, improving accessibility for blind and visually impaired users among others.

          <br/>
          However, I was perhaps quick to accept the way Shellshock.io shuts certain users out. There are many ways to play video games, and perhaps there can be many ways to play Shellshock.io. As Kat Holmes mentioned, we shouldn't thrive for a one size fit all solution, and instead offer a plethora.
        </Callout>
        <h5>
          Encountered examples of accessibility/inaccessibility of inputs or outputs and their positive/negative impact on users with impairments.
        </h5>
        <Callout>
          1 positive: Chrome's superior implementation for screen readers will help visually impaired users better understand the menu items.
          <br/>
          3 negatives: Chrome, Shellshock.io, and Spotify's absence from the focus order however seriously impacts the same screen reader users who simply won't have access to the menus unless they use a mouse to open it.
        </Callout>
        <h5>
          Most commonly prioritized inputs (mouse, keyboard, touch/mobile) in component creation, and this decision's impact on user experience.
        </h5>
        <Callout>
          I think the typical order of priority in design goes something like this: <br/>
          1) mouse/touch/mobile 2) keyboard 3) screen reader <br/>
          
          From my own experience with the components described above, keyboard and screen readers are definitely a lower priority for designers.
          This shuts out a lot of people who cannot use a phone or mouse. The internet is vast and bountiful, but users relying on less prioritized inputs may be excluded from much of it.
          For example, while job hunting I encountered job applications with varying levels of accessibility. While I as a mouse user had full access to the online job market, many keyboard or screen reader users missed out on professional opportunities.
        </Callout>
        <Row>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-app-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
        <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-down" viewBox="0 0 16 16">
        <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-app-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
        <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-menu-down" viewBox="0 0 16 16">
        <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>
          </Col>
        </Row>
      </Section>
    </div>
  )
}

export default AccessibleComponent
