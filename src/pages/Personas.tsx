import { useRef} from "react";
import '../App.css';
import { Row, Col, Image} from 'react-bootstrap'

import efia from "../assets/personas/efia.png"
import yesenia from "../assets/personas/yesenia.png"
import alec from "../assets/personas/alec.png"
import king from "../assets/personas/king.png"
import mouse from "../assets/personas/mouse.png"
import one from "../assets/personas/1.png"
import two from "../assets/personas/2.png"
import three from "../assets/personas/3.png"
import four from "../assets/personas/4.png"
import five from "../assets/personas/5.png"
import six from "../assets/personas/6.png"
import seven from "../assets/personas/7.png"
import supermarket from "../assets/personas/supermarket.png"
import Section from "../components/Section";
import Callout from "../components/Callout";
import Navigation from "../components/Navigation";

function Personas() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);
    const section9Ref = useRef(null);

    const refs = [
        section1Ref,
        section2Ref,
        section3Ref,
        section4Ref,
        section5Ref,
        section6Ref,
        section7Ref,
        section8Ref,
        section9Ref,
    ]
    const titles = [
        "Intro",
        "Interface",
        "Interview 1",
        "Interview 2",
        "Interview 3",
        "Persona 1",
        "Persona 2",
        "Storyboard",
        "Conclusion"
    ]

    return(
        <div>
            <Navigation refs={refs} titles={titles}/>
            <Section first={true} ref={section1Ref}>
                <h1 style={{marginBottom: "3rem"}}>Personas & Storyboarding</h1>
                <h2 style={{marginBottom: "6rem"}}>Who are supermarkets for?</h2>
                <Row>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                </svg>
                </Col>
                </Row>
                <Callout>
                    Presumably, everybody! 
                    But people have varied schedules, diets, cooking styles, and household sizes! 
                    How can one possibly design an interface to satisfy most, if not all?
                    A gigantic supermarket with every specialty item and every brand is incredible for the avid cook, 
                    but maybe an overstimulating maze for an in-and-out efficient shopper.
                    What sacrifices must be made?<br></br>
                    Let's study different user behaviors in supermarkets, and find out more about our user needs!
                </Callout>
                
                
            </Section>
            <Section first={false} ref={section2Ref}>
                <h1>The interface</h1>
                    <Row >
                    <Col md="auto" lg="auto" xl="8" >
                    <h4 className="mt-4">
                        Our interface here is a supermarket layout. <br/>
                        It's surprisingly universal! <br/>
                        You'll usually encounter the following elements
                    </h4>
                        <Image className="bootleg-image" src={supermarket}/>
                    </Col>
                    <Col md="auto" lg="auto" xl="4">
                    
                    <Callout>
                        - A produce section. It's always at the entrance. 
                        It's the most challenging section: produce moves around, changes seasonally, runs out. 
                        Shoppers get the most mentally exhausted while shopping for produce.
                        Because of its disorganized and busy nature, the produce section isn't an aisle but mostly an open space with stands. 
                    </Callout>
                    
                    <Callout>
                        - Special displays at the aisle ends. This allows stores to introduce new products and deals without disrupting their shoppers' flow.
                    </Callout>
                    
                    <Callout>
                        - Sweets, treats, snacks, and more special displays are usually close to checkout. 
                        Shoppers are most mentally exhausted and thus vulnerable to temptation at the end of their trip.
                    </Callout>
                    
                    <Callout>
                        - Finally, the dairy and meats aisles always run along the walls.
                    </Callout>
                    </Col>
                </Row>
            </Section>
            <Section first={false} ref={section3Ref}>
                <Row>
                <h1>Yesenia</h1>

                    <Col className="mb-5" md={4}>
                    <Image className="bootleg-image" style={{maxHeight:"600px"}} fluid src={yesenia}></Image>
                    
                    </Col>
                    <Col >
                    <Callout>
                        <i>Interview TLDR<br/>
                        Yesenia is an enthusiastic cook and an organized and regular shopper. 
                        She has a good lay of the land of her favorite store, and enjoys the routine of grocery shopping.
                        She has a very systemic way of traveling through the store, allowing her to both stick to a plan and adapt to change.
                        Yesenia dislikes deviations from her routine, like changing her path because of busy aisles.
                        </i>
                    </Callout>
                    <Callout>
                        Behavior <br/><br/>
                        Yesenia shopped at Trader Joe's on a Sunday morning. The store was bustling, but well provisioned. 
                        She snaked through the entire store, not missing a single aisle. 
                        She in particular walked up and back down the frozen aisle food, scanning one side at a time.
                        She did not look at her grocery list until the very end of her trip.
                        She moved through the store systematically and with efficiency. She explored every single aisle.
                        She did not retrace her steps at any point for forgotten items, but she did redirect the flow of her path twice to avoid busy avenues. 
                        She meandered a bit more in the produce section, and briefly struggled to find mint. She was not tempted by any of the special temporary displays.
                    </Callout>
                    
                    </Col>

                    <Callout>
                    Interview <br/><br/>
                    <b>
                    How often do you go grocery shopping?
                    </b><br/>
                    I go about once a week, around the same day and time. It's a normal part of my routine.
                    <br/><b>
                    What do you usually buy? What sections of the store do you use the most?
                    </b><br/>
                    I buy a bit of everything! I buy produce, meats, dairy, frozen foods, breads, snacks. I love checking out all the aisles and seeing if anything new calls to me.
                    <br/><b>
                    How often do you go to this store?
                    </b><br/>
                    This store is my go to. I am very familiar with it, and know the spot of nearly every item. The produce and frozen sections are trickier for me because the items move around all the time.
                    <br/><b>
                    How long do you spend grocery shopping. Can you break down the time?
                    </b><br/>
                    I walk 5 minutes there and 5 minutes back, which leaves me with a good amount of time to browse. I put aside about 40 minutes for the whole trip, but I'm usually more efficient than that.
                    <br/><b>
                    How do you choose the items you buy?
                    </b><br/>
                    I have produce I buy every week that I make most of my recipes with. 
                    I also have special recipes in my mind for the week for which I brought a grocery list.
                    I'll walk through every aisle to get tempted by different foods and remember the items I need as I see them.
                    I'll only check the list at the end of the trip to check I didn't miss anything.
                    <br/><b>
                    How do you usually make your way through the store?
                    </b><br/>
                    I like to snake through all of the aisles. The store is small enough that doing so doesn't take much time. 
                    For sections that are unpredictable, like produce or frozen foods, I'll scan both sides of the aisle, walking down then back up.
                    <br/><b>
                    How did you feel shopping today?
                    </b><br/>
                    I felt pretty good! I love grocery shopping, and I feel like I have the hang of it here. I like being in control of my shopping and my diet.
                    <br/><b>
                    Is there anything you wish went differently today?
                    </b><br/>
                    The store was quite busy! In an ideal world I would shop without worrying as much about other customers or employees.
                    </Callout>
                </Row>
                
            </Section>
            <Section first={false} ref={section4Ref}>
                
                <Row>
                    <h1>Efia</h1>
                    <Col className="mb-5" md={4}>
                    
                    <Image className="bootleg-image" style={{maxHeight:"600px"}} fluid src={efia}></Image>
                    
                    </Col>
                    <Col>
                    <h5 className={"callout h100"}>
                        <i>
                            Interview TLDR <br/>
                            Efia is an avid cook and a very frequent shopper. 
                            She is well acquainted with the store, but can be slowed down by an unpredictable produce section.
                            Because of her vegan diet, Efia is significantly more impacted by the flaws of the produce section.
                            Otherwise, she shops efficiently through the rest of the store. 
                        </i>
                    </h5>
                    <h5 className={"callout h100"}>
                        Behavior <br/><br/>
                        Efia shopped at Trader Joe's around 8pm on a Tuesday night. 
                        The store had few customers, and the store seemed low on produce. 
                        She checked her grocery list several times throughout the trip, and spent the majority of the time in the produce section.
                        She traveled back and forth from shelf to shelf in the produce section, and struggled to find certain items: 
                        they had for example run out of Bok Choi and the green onions looked old. The store had also run out of high protein tofu.
                        After selecting her produce, Efia semi snaked through the remaining aisles.
                        She skipped certain sections entirely, and found her remaining items in much less time. She explored about 3/4 of the store's aisles.
                        She was tempted by one of the displays at the end of the aisle. She also grabbed a bar of dark chocolate at checkout.
                    </h5>
                    
                    </Col>
                    <Callout>
                        Interview <br/><br/>
                        <b>
                    How often do you go grocery shopping?
                    </b><br/>
                    I go about once or twice a week. I have one scheduled weekly time where I shop. 
                    The second time I go is a more unpredictable, wherever I can fit the time.
                    I shop a lot because I cook a lot: I do olympic lifting, and spending the time to get the right food in my body has felt really good.
                    <br/><b>
                    What do you usually buy? What sections of the store do you use the most?
                    </b><br/>
                    I buy a lot of produce and canned goods. I switched to a vegan diet, so I'll skip out on meats and dairy. I also don't buy much frozen foods.
                    I skip a lot of sections of the store, and tend to just go to the items I know I need. 
                    <br/><b>
                    How often do you go to this store?
                    </b><br/>
                    This store is my go to. I go to another store sometimes because they have more produce options, but this one is more convenient.
                    I am pretty familiar with it as this point!
                    <br/><b>
                    How long do you spend grocery shopping. Can you break down the time?
                    </b><br/>
                    It's a 15 minutes walk for me, unless my roommate gives me a ride. I'd say it usually takes me about 40 minutes. 
                    Sometimes I have to go hunting around the produce section for some time.
                    <br/><b>
                    How do you choose the items you buy?
                    </b><br/>
                    I prepare a list with items for recipes I want to do this week. I'll look at my list throughout the trip.
                    Sometimes I'll buy a few extra things too, if tempted.
                    <br/><b>
                    How do you usually make your way through the store?
                    </b><br/>
                    I usually look at the next item on the list and head that way. When I write my list I also try grouping items by type.
                    <br/><b>
                    How did you feel shopping today?
                    </b><br/>
                    I honestly felt pretty stressed. I arrived close to closing time and had to rush to get my things. 
                    Even though I have my list and a good idea of the store layout, I just spent so much time looking for produce only to have a good amount of it look bad or have run out.
                    <br/><b>
                    Is there anything you wish went differently today?
                    </b><br/>
                    I was so pressed for time I forgot quite a few items on my list/ didn't have time to get to them. I'll have to come back for them later this week.
                    </Callout>
                </Row>
            </Section>
            <Section first={false} ref={section5Ref}>
                <Row>
                <h1>Alec</h1>

                    <Col className="mb-5" md={4}>
                    <Image className="bootleg-image" style={{maxHeight:"600px"}} fluid src={alec}></Image>
                    
                    </Col>
                    <Col>
                    <Callout>
                        <i>
                            Interview TLDR <br/>
                            Alec is an irregular shopper. Grocery shopping is not part of his routine, and he isn't familiar with his store yet.
                            He doesn't have much time to invest into cooking or grocery shopping, and the trip tends to be stressful.
                            Despite the store's universal layout and helpful signs, finding items still takes him longer than wanted.
                        </i>
                    </Callout>
                    <Callout>
                        Behavior <br/><br/>
                        Alec shopped at Shaw's on a Sunday around 5pm.
                        The very large supermarket did not appear particularly busy. 
                        Alec checked his grocery list a couple times throughout the trip.
                        He started in the produce section and traveled back and forth a bit there. 
                        Eventually Alec semi snaked through the rest of the store.
                        He took some time reading the signs and finding the correct aisles. He backtracked a little to find items he missed, but did not have to redirect his course due to obstacles. 
                        He grabbed a couple items which were not on his list.
                        He explored a 1/4 of the store's aisles, before swinging by the pastries and sweets section before checkout.
                        He pointed out a box of brownies and bought it.
                    </Callout>
                    
                    </Col>
                    <Callout>
                        Interview <br/><br/>
                        <b>
                    How often do you go grocery shopping?
                    </b><br/>
                    I go pretty irregularly, about every 2 weeks. 
                    I'm on partial meal plan this semester and am trying to make the most of my swipes.
                    I'll make breakfast and some dinners (I'm far from the dining halls), so I pick up a few items.
                    <br/><b>
                    What do you usually buy? What sections of the store do you use the most?
                    </b><br/>
                    I have some go tos for breakfast, but I tend to go off plan. 
                    I buy different things from trip to trip, except for frozen fruits: I make my smoothies regularly with them.
                    I'm not too familiar with every section here, I just know where some of my favorite items are, which is a bit spread out throughout the store.
                    <br/><b>
                    How often do you go to this store?
                    </b><br/>
                    I go to Shaw's for their frozen food selection (Trader Joe's is much more limited). 
                    But I haven't gone that many times.
                    I'm not entirely familiar with the store yet, and it takes me a while to find new items.
                    <br/><b>
                    How long do you spend grocery shopping. Can you break down the time?
                    </b><br/>
                    It takes me about 15 minutes to get there by car. I haven't really timed myself before, I tend to go in between time commitments.
                    I try to go as fast as possible, but it always takes me a bit longer than I anticipate. I'd say it take me about 30 minutes to find what I need once in the store.
                    <br/><b>
                    How do you choose the items you buy?
                    </b><br/>
                    I have a list I prepare, but I often end up buying additional things. <br/><b>
                    How do you usually make your way through the store?
                    </b><br/>
                    I don't travel from item to item on my list, I'm not familiar enough with the layout to do that. 
                    I end up snaking through the aisles, which makes finding things easier but also takes some time with such a big store.
                    I also end up coming across other interesting items.
                    <br/><b>
                    How did you feel shopping today?
                    </b><br/>
                    Just a bit stressed! I never have that much time to spend here.
                    <br/><b>
                    Is there anything you wish went differently today?
                    </b><br/>
                    This store just feels too big sometimes.
                    </Callout>
                </Row>
            </Section>
            <Section first={false} ref={section6Ref}>
                <h1>The king of the playground</h1>
                <Row style={{marginBottom: "2rem"}}>
                    <Col xs="auto" sm="6" lg="3">
                        <h4>Thinks</h4>
                        <div className="block">I have a good idea what I want to cook this week.</div>
                        <div className="block">Maybe I should have come at a less busy time, people are in my path</div>
                        <div className="block">I hope they restocked their produce</div>
                    </Col>
                    <Col xs="auto" sm="6" lg="3">
                    <h4>Says</h4>
                        <div className="block-2">See you this time next week!</div>
                        <div className="block-2">I brought a list for good measure.</div>
                        <div className="block-2">I'm excited to see what's new!</div>

                    </Col>
                    <Col xs="auto" sm="6" lg="3">
                   <h4>Feels</h4>
                        <div className="block">I'm excited to see what's new! (So I can keep track of changes and stay in control) </div>
                        <div className="block">Wishes it was less crowded</div>
                        <div className="block">Satisfied they know most of the store layout</div>
                        <div className="block">Feel in control</div>
                        <div className="block">Wishes the produce wouldn't switch around so much</div>
                    </Col>
                    <Col xs="auto" sm="6" lg="3">
                    <h4>Does</h4>
                        <div className="block-2">Does not use the list too much, it's more of a formality.</div>
                        <div className="block-2">This grocery trip is part of their routine. They blocked the time, and take the time to go through the whole store.</div>
                        <div className="block-2">Have a clear idea where most usual products are</div>
                        <div className="block-2">Spend a bit more time than they would like finding produce</div>     
                    </Col>
                </Row>
                <Row>
                <Col xs="auto" md="4">
                <Image className="bootleg-image" src={king}></Image>
                </Col>
                <Col xs="auto" md="8">
                <Callout>
                    1) From our interviews, one persona emerges: the master of groceries, the king of the playground. This persona does not like their routine disturbed!
                    They have a good handle on their preferred grocery store. If they are going to deviate from routine, it's going to be on their terms.
                    <br/>
                    <br/>
                    2)They don't like when items move around, notably in the produce and frozen foods sections. They dislike busy aisles and hope they don't have to deviate from their path.
                    The store will have to accommodate these users by keeping item organization as constant as possible. If the store introduces new items, it should be in a non-intrusive way.
                    <br/>
                    <br/>
                    3)Busy professionals and parents who rely on a system fall into this persona: they need their routine to function! Both Yesenia and Efia fall into this category. 
                    Because Efia buys more produce, she'll be a more frustrated customer than Yesenia, despite being equally organized and familiar with the store.
                </Callout>
                </Col>
                
                </Row>

            </Section>
            <Section first={false} ref={section7Ref}>
            <h1>The mouse</h1>

                <Row style={{marginBottom: "2rem"}}>
                    <Col xs="auto" sm="6" lg="3">
                    <h4>Thinks</h4>
                    <div className="block-2">I want a little snack</div>
                    <div className="block-2">I really have to hurry!</div>
                    <div className="block-2">I'm not 100% sure what I'll get, but I have an idea</div>
                    <div className="block-2">If I can't find this item easily, I'll give up pretty fast</div>
                    </Col>
                    <Col xs="auto" sm="6" lg="3">
                    <h4>Says</h4>
                    <div className="block">I'll just be in and out, and won't buy much</div>
                    <div className="block">This store is huge!</div>
                    </Col>
                    <Col xs="auto" sm="6" lg="3">
                   <h4>Feels</h4>
                    <div className="block-2">Does not know the whole store, maybe just enough to get in and out efficiently</div>
                    <div className="block-2">Stressed they'll make it on time to their next commitment</div>
                        
                    </Col>
                    <Col xs="auto" sm="6" lg="3">
                    <h4>Does</h4>
                    <div className="block">Ends up buying more than expected</div>
                    <div className="block">Gets tempted by the special offers and sweet treats</div>
                    <div className="block">Shop irregularly, whenever possible. They're not mentally ready to spend a lot of time shopping.</div>      

                    </Col>
                    <Col xs="auto" sm="6" lg="3">
                    </Col>
                </Row>
                <Row>
                <Col xs="auto" md="8">
                <Callout>
                    1) The  mouse persona is unfamiliar with the store. They have gone a couple times at most, and know of some of the items they need.
                    They aren't looking to cook much, but need just a few items to get by. They go off plan easily.
                    <br/>
                    <br/>
                    2) They aren't particularly bothered by moving produce or moving items, but are overwhelmed in general. 
                    The mouse persona have little time, little knowledge of the place, and need to get in and out quickly. 
                    The store will have to guide these infrequent users as best as possible. The store may also take advantage of the opportunity to entice them with special displays and treats.
                    <br/>
                    <br/>
                    3) The people falling into the mouse persona are not looking to cook and may be students on partial meal plans or travelers. 
                    They don't have much time and are fitting this grocery run in between activities.
                </Callout>
                </Col>
                <Col xs="auto" md="4">
                <Image className="bootleg-image" src={mouse}></Image>
                </Col>
                </Row>

            </Section>
            <Section first={false} ref={section8Ref}>
                <h1>Storyboards</h1>
                <Callout>
                    The king of the playground
                </Callout>
                <Row>
                    <Col xs="auto" sm="6" md="6" lg="4">
                    <Image className="bootleg-image" src={one}></Image>
                    <Callout>
                        The king of the playground enters the super market, reusable bag in one hand, list in the other. Same time, every week.
                    </Callout>
                    </Col>
                    <Col xs="auto" sm="6" md="6" lg="4">
                    <Image className="bootleg-image" src={two}></Image>
                    <Callout>
                        They tackle the produce section first. This is where things tend to go off plan: they hope what they need is there and they can find it quick!
                    </Callout>
                    </Col>
                    <Col xs="auto" sm="6" md="6" lg="4">
                    <Image className="bootleg-image" src={three}></Image>
                    <Callout>
                        Phew, produce is over. Onto the frozen food section! This also changes around a lot. Let's scan both sides carefully. 
                        In the face of irregularity, we use a system.
                    </Callout>
                    </Col>
                    <Col xs="auto" sm="6" md="6" lg="4">
                    <Image className="bootleg-image" src={four}></Image>
                    <Callout>
                        Darn, a worker is restocking this next aisle and it's quite busy too. They'd rather alter their shopping path than sacrifice their efficient browsing.
                    </Callout>
                    </Col>
                    <Col xs="auto" sm="6" md="6" lg="4">
                    <Image className="bootleg-image" src={five}></Image>
                    <Callout>
                        Alright, we just got 3 more aisles to go. Swinging by the spices reminds them their household is running out of salt. 
                        They also see a bread their friend recommended. Snaking through all the aisles allowed them to remember both these things.
                    </Callout>
                    </Col>
                    <Col xs="auto" sm="6" md="6" lg="4">
                    <Image className="bootleg-image" src={six}></Image>
                    <Callout>
                        Last step: did we forget anything? Likely not, but we check the list.
                    </Callout>
                    </Col>
                    <Col xs="auto" sm="6" md="6" lg="4">
                    <Image className="bootleg-image" src={seven}></Image>
                    <Callout>
                        They usually skip over the appealing sweats and other snacks at checkout, and pay!
                    </Callout>
                </Col>
                </Row>
            </Section>
            <Section first={false} ref={section9Ref}>
                <h1 style={{marginBottom: "4rem"}}>Conclusion</h1>
                <Row>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                </svg>
                </Col>
                </Row>
                <Callout>
                    The mouse and the king are very different grocery store users, yet stores must do their best to accommodate both.
                    To accommodate the mouse, stores will follow a universal layout. They'll furthermore put like items together, and labels aisles in a helpful way.
                    To accommodate the king, the store must introduce change gracefully. 
                    Introducing too much unfamiliarity and disorder will ruin the king's shopping experience, who may stop being a loyal customer.
                    The store introduces new products with special displays, which is a good compromise, but they could do a better job communicating with the king when certain seasonal products will be sold, amongst other changes.
                </Callout>
                
            </Section>
        </div>
    )
    
}

export default Personas
