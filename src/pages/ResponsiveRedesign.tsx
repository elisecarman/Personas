import { useRef } from 'react'
import '../App.css';
import Callout from '../components/Callout';
import Section from '../components/Section';
import Navigation from '../components/Navigation';
import {Col, Image, Row} from 'react-bootstrap'

import beecopy from "../assets/responsive-redesign/beecopy.png"
import beerestaurant from "../assets/responsive-redesign/beerestaurant.png"
import styleGuide from "../assets/responsive-redesign/style-guide.png"
import problemIcons from "../assets/responsive-redesign/problem-icons.png"
import problemResponsiveSmall from "../assets/responsive-redesign/problem-responsive-small.png"
import problemBottom from "../assets/responsive-redesign/problem-bottom.png"
import problemMiddle from "../assets/responsive-redesign/problem-middle.png"
import problemTop from "../assets/responsive-redesign/problem-top.png"
import phone1 from "../assets/responsive-redesign/phone1.png"
import phone3 from "../assets/responsive-redesign/phone3.png"
import desktopFrame from "../assets/responsive-redesign/desktop-frame.png"
import tabletFrame from "../assets/responsive-redesign/tablet-frame.png"
import mobileFrame from "../assets/responsive-redesign/mobile-frame.png"



function ResponsiveRedesign() {
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
        "Desktop Pain Points",
        "Mobile Pain Points",
        "Visual Design Style Guide",
        "Desktop Mockup",
        "Tablet Mockup",
        "Mobile Mockup",
        "Redesign"
    ]
  return (
    <div>
        <Navigation refs={refs} titles={titles}/>
        <Section first={true} ref={section1Ref}>
            <h1 className='mb-3'>Responsive Redesign</h1>
            <div className='mb-5 row justify-content-start '>
            <h4 >quick link: 
                <a className='ms-3' href={`${import.meta.env.BASE_URL}beesthai.html`} target="_blank" rel="noopener noreferrer">
                my redesign
                </a>
            </h4>
            </div>

            <Row>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg" viewBox="0 0 16 16">
            <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1s.956.206 1.554.716c.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg" viewBox="0 0 16 16">
            <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1s.956.206 1.554.716c.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg" viewBox="0 0 16 16">
            <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1s.956.206 1.554.716c.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            </Row>
            <Callout>
                A successful website must cater to varied users, including their varied devices. 
                Websites creators face the challenge of presenting most, if not all, of the same information to wide monitor and phone users. Some get it wrong!
                <br/>
                Pointing out problems is easy, but finding solutions is a good deal harder.
                I will be choosing a website to redesign, and use this opportunity to think deeply about accessibility, efficiency, memorability, and learnability. 
            </Callout>
            <h3 style={{marginTop: '4rem'}}>Bee's Thai Cuisine</h3>
            <Row className='align-items-center'>
            <Col xs='1'>
            <Image style={{borderRadius: '10%'}} src={beecopy}></Image>
            </Col>
            <Col xs='auto' md='11' lg='11'>
            <Callout>
                I chose to redesign Bee's Thai Cuisine's website, specifically their menu page.
                Bee's Thai Cuisine is my favorite restaurant in Providence, and my go to on empty fridge days. It's welcoming, delicious, and affordable!
                <a style={{textDecoration: "none"}} href='https://www.beesthaicuisine.com/menu'> Visit their website here!</a>
            </Callout>
            </Col>
            
            </Row>
            <Image src={beerestaurant}/>
        </Section>
        <Section first={false} ref={section2Ref}>
            <h1>Desktop Pain Points</h1>
            <Callout>
                Let's take a look at the current state of the menu page!
            </Callout>
            <Row className='mt-5'>
            
            <Col xs="auto" >
                <h5>The top of the menu page on desktop</h5>
                <Image style={{maxWidth:'900px', marginBottom:'4rem'}} src={problemTop}></Image>
                <h5>The top of the menu page on a smaller screen</h5>
                <Image style={{maxWidth:'500px', marginBottom:'4rem'}} src={problemResponsiveSmall}></Image>
                <h5>The middle of the menu page on desktop</h5>
                <Image style={{maxWidth:'900px', marginBottom:'4rem'}} src={problemMiddle}></Image>
                <h5>The bottom of the menu page on desktop</h5>
                <Image style={{maxWidth:'900px', marginBottom:'4rem'}} src={problemBottom}></Image>
                <h5>The icons representing gluten free, vegan, vegetarian or spicy items</h5>
                <Image style={{maxWidth:'500px', marginBottom:'4rem'}} src={problemIcons}></Image>
            </Col>
            </Row>
            <h4 className='mb-4 mt-5'>Mmmh, no matter how delicious, it seems there are a few issues with the menu page</h4>  
                
            <Row className='mb-5'>
            <Col >
                <h3 >Efficiency</h3>
                <Callout>
                    1) The original website isn't responsive for smaller screens like tablets. 
                    Those users will need to scroll horizontally to see the full navbar and menu, which is inefficient.
                </Callout>
                <Callout>
                    2) Navigating through this menu is difficult, and requires too much vertical scrolling. 
                    Adding buttons to jump around sections would be hugely helpful.
                </Callout>
                <Callout>
                    3) Currently, there is no way for the user to get a "quick read" on the dishes and price range. 
                    The section buttons could function as a table of contents. 
                    Futhermore, the introductory elements (navigation bar, titles, callout paragraph) should be squished and pushed to the top to let menu items and prices appear on screen.
                    Both these changes will enable a quick read.
                </Callout>
                <Callout>
                    4) On a large screen, only two items are displayed per row. 
                    To allow a quicker read the number of items displayed per row should be responsive with screen size.
                </Callout>
                <Callout>
                    5) Once in the middle of the menu the user has no choice but to scroll all the way back up to access the navbar. 
                    The navbar could be made sticky instead, or a button to jump to top could be added.
                </Callout>
            <h3>Memorability</h3>
                <Callout>
                1) The functionality of the navigation bar breaks functional convention and degrades memorability. 
                Two of the items lead to separate pages, while the third leads to the bottom of one of the same pages. 
                It would be a more logical and memorable user flow to be led to a whole different page.
                </Callout>
                <Callout>
                2) The navigation bar spaces out its items and centers them, breaking visual convention. 
                Most websites group their nav items on the left and right. 
                Users have already grown accustomed to this convention, and following it will improve user memorability.
                </Callout>
                <Callout>
                3) Because the user has many similar items to scroll through, coming back to and locating a previously found item is difficult.
                Adding a background gradient may help the user get a gage for where to stop scrolling (they remember something interesting around the yellow section).
                While the section buttons allow for efficient perusal of the menu, this color coding improves memorability.
                </Callout>
                
            <h3>Learnability</h3>
                <Callout>
                1) The food markers (spicy, mild, not spicy, vegetarian, vegan) do not have an explicit definition at the moment. 
                Adding a tooltip would improve Learnability
                </Callout>
            <h3>Conceptual Model</h3>
                <Callout>
                The metaphor this page follows is that of a very long scroll of parchment the user reads through.
                There is little interaction besides going from top to bottom. 
                Adding a color gradient would further solidify the physical reality of progressing downwards along a physical object.
                </Callout>
            <h3>WebAIM WAVE</h3>
                <Callout>
                ERRORS: 2 very low contrast issues with headers, 2 empty links
                </Callout>
                <Callout>
                ALERTS: 7 possible headings, 1 missing first level heading
                </Callout>
                <Callout>
                    Otherwise, a good header, footer structure was implemented. Alternative text was provided for images, and the aria tab index is implemented.
                </Callout>
            </Col>
            {/* <Col xs="auto" xl="7">
                <h5 style={{color: "#525252"}}>The top of the menu page on desktop</h5>
                <Image style={{maxWidth:'700px', marginBottom:'4rem'}} src={problemTop}></Image>
                <h5 style={{color: "#525252"}}>The top of the menu page on a smaller screen</h5>
                <Image style={{maxWidth:'700px', marginBottom:'4rem'}} src={problemResponsiveSmall}></Image>
                <h5 style={{color: "#525252"}}>The middle of the menu page on desktop</h5>
                <Image style={{maxWidth:'700px', marginBottom:'4rem'}} src={problemMiddle}></Image>
                <h5 style={{color: "#525252"}}>The bottom of the menu page on desktop</h5>
                <Image style={{maxWidth:'700px', marginBottom:'4rem'}} src={problemBottom}></Image>
                <h5 style={{color: "#525252"}}>The icons representing gluten free, vegan, vegetarian or spicy items</h5>
                <Image style={{maxWidth:'700px', marginBottom:'4rem'}} src={problemIcons}></Image>
            </Col> */}
            </Row>     
        </Section>
        <Section first={false} ref={section3Ref}>
            <h1>Mobile Pain Points</h1>
            <Row>
                <Col xs="auto" lg="6">
                <Callout>
                    A lot of the pain points listed under desktop have been addressed in the mobile version:
                    <br/>
                    <br/>
                    - An arrow can be tapped to navigate to the top of the page, and the arrow fades away with time to facilitate menu readability.
                    <br/>
                    - A section menu sticks to the top and displays the current section the user find themselves in.
                    <br/>
                    <br/>
                    A few additional improvements can be made.
                </Callout> 
                </Col>
                <Col xs="auto" md="6" lg="3">
                <Image src={phone1}/>
                </Col>
                <Col xs="auto" md="6" lg="3">
                <Image src={phone3}/>
                </Col>
                </Row>
                
                <h3 >Efficiency</h3>
                <Callout>
                    1) The section buttons are not all immediately visible.
                    Instead, the user needs to horizontally scroll through them. 
                    Not displaying all sections at the same time prevents a quick read.
                </Callout>
                <Callout>
                    2) Items have been vertically condensed, allowing mobile screens to display about three at a time.
                    However, users still scroll through every single item to get to the bottom, which may be exhausting.
                </Callout>
                <h3>Memorability</h3>
                <Callout>
                    The Navbar still does not follow convention. The orange band at the top sits in place of the navbar and steals needs space.
                </Callout> 
                <h3>Learnability</h3>
                <Callout>
                    A tooltip could still be added to clarify icon meanings.
                </Callout>
        </Section>
        <Section first={false} ref={section4Ref}>
            <h1>Visual Style Redesign Guide</h1>
            <Callout>
                Let's first create a style guide to establish a cohesive brand for this redesign. Much of the original styling was reused. 
                Certain font colors were darkened to correct contrast issues.
            </Callout>
            <Image src={styleGuide}></Image>
        </Section>
        <Section first={false} ref={section5Ref}>
        <h1>Desktop view redesign</h1>

            <Callout>
                This website needs a lot of responsiveness added, so let's take the time to mock up different screen types.
                I created mock ups for desktop, tablet, and mobile, and annotated programming requirements.
                I furthermore determined layout specifications which would adapt well to varied sizes within screen types.
            </Callout>
            <Image src={desktopFrame}></Image>

        </Section>
        <Section first={false} ref={section6Ref}>
            <h1>Tablet view redesign</h1>
            <Image src={tabletFrame}></Image>
        </Section>
        <Section first={false} ref={section7Ref}>
            <h1>Mobile view redesign</h1>
            <Image src={mobileFrame}></Image>
        </Section>
        <Section first={false} ref={section8Ref}>
            <h1>Complete Redesign</h1>
            <h3> You may find my complete redesign here! 
                <a className='ms-3' href={`${import.meta.env.BASE_URL}beesthai.html`} target="_blank" rel="noopener noreferrer">
                my redesign
                </a>
            </h3>
            
            <Callout>
                In summary, the following improvements were made over the original design:

                <br/>
                <br/>
                <b>Efficiency</b>
                <br/>
                The menu page is now fully responsive, allowing users of all screen sizes to enjoy the site!
                <br/>
                The navigation bar is now sticky on both desktop and mobile, and can be accessed at any time while scrolling.
                <br/>
                The button group on the right side enables quick navigation through the menu.
                <br/>
                It also facilitates a quick read on both mobile and desktop
                <br/>
                Menu items are now more compact, and more options are displayed per rows, further allowing a quick read.
                <br/>
                On mobile, the items are displayed in horizontally scrollable sections to allow a quicker scroll through the menu.
                <br/>
                <br/>
                <b>Memorability</b>
                <br/>
                The color gradient improves memorability.
                <br/>
                The navigation bar has been changed to follow convention, and takes much less space.
                <br/>
                <br/>
                <b>Conceptual Model</b>
                <br/>
                The color gradient strengthens the parchment scroll conceptual model.
                <br/>
                However, introducing horizontally scrollable sections on mobile complicates the previously straightforward vertical scroll.
                Because vertical and horizontal scrolling are popular on social media apps, this pattern may understood easily, but further user research may be beneficial.
                <br/>
                <br/>
                <b>Learnability</b>
                <br/>
                The tooltip over icons allows user to quickly discover their meaning.
                <br/>
                <br/>
                <b>Accessibility</b>
                <br/>
                The contrast has been increased between texts and backgrounds.
                <br/>
                The name of the restaurant was added in the Navbar for additional clarity.
            </Callout>
            <Row className='mt-5'>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg" viewBox="0 0 16 16">
            <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1s.956.206 1.554.716c.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg" viewBox="0 0 16 16">
            <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1s.956.206 1.554.716c.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg" viewBox="0 0 16 16">
            <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1s.956.206 1.554.716c.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6"/>
            </svg>
            </Col>
            <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </Col>
            </Row>
            <Callout>
                This redesign was not easy! A menu is a very particular user workflow. 
                One must display a lot of information all while permitting quick navigation.
                <br/>
                <br/>
                Furthermore, offering this on different screens requires occasionally changing strategies: 
                <br/>
                I decided to add horizontally scrollable sections on mobile because scrolling through one item at a time just seemed to take too long.
                Another solution I could have adopted could have been vertically compacting the items as much as possible, such that 4 at a time can fit on screen.
                <br/>
                <br/>
                It is not immediately clear which solution is best: a stretch goal for this redesign would be following up with user testing, and tracking user flows through the menu.
            </Callout>
            
        </Section>

        
    </div>
  )
}

export default ResponsiveRedesign