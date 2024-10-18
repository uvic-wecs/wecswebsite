import React from 'react';
import augustNews from "../../resources/August Newsletter.png";
import julyNews from "../../resources/July Newsletter.png";
import juneNews from "../../resources/June Newsletter.png";
import septemberNews from "../../resources/September Newsletter.png";
import septemberBonus from "../../resources/September Bonus Newsletter.png";

const textStyle = {
    textAlign: "center"
};

const Newsletter = () => {
    return (
        <div>
            <h1 style={textStyle}>WECS Newsletter</h1>
            <p style={textStyle}>Our newsletters are a great way to keep up with the resources, opportunities, and events available to you through WECS each month.
                <br />
                Sign up <a href="https://instagram.us21.list-manage.com/subscribe?u=f1586a8f88c058352d03ee000&id=544c4e006e">here</a> to have them sent to your email and never miss an issue!
            </p>

            <h3>September Bonus Issue</h3>
            <p>
                View September's bonus newsletter <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=86e9a7db0e">here</a>!
            </p>
            <h4>A sneak peek...</h4>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img alt="September bonus newsletter" src={septemberBonus} height="300px" />
                    </div>
                    <div className="col">
                        <p>
                            Surprise! It's me again, popping into your email like an unexpected guest at a party.
                            Don't worry, I'm not making this a habit - two newsletters in one month is about as rare as seeing George the Peacock around campus or a calculus lecture making sense!
                            I know what you're thinking: "Oh great, another email to add to my collection of unread promotional messages about things I don't remember signing up for."
                            But fear not! This isn't just another "10% off socks" kind of email. This is the WECS Scoop - Special Edition!
                            <br /> <br />
                            We're serving up a hot plate of exciting events, mouth-watering opportunities within WECS, and delicious volunteer positions.
                            It's like an all-you-can-eat buffet for your career and social calendar!
                            So, without further ado (because who likes ado anyway?), let's dive into this special edition of the WECS Scoop!
                            Grab your metaphorical spoon and get ready to dig in!
                            <br /><br />
                            Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=86e9a7db0e">here</a>!
                        </p>
                    </div>
                </div>
            </div>
            <h3>Fall 2024 Issues</h3>
            <p>
                Take a look at what we've been up to this semester!
            </p>
            <div className="container">
                <div className="row">
                    <h4>September Issue</h4>
                    
                    <div className="col">
                        <p>
                            Welcome Back to Campus! 
                            As the crisp autumn air settles in and the leaves begin their colourful transformation, we're excited to welcome you to a new academic year at UVic! 
                            Whether you're a fresh face on campus or a seasoned veteran, the WECS community is thrilled to have you with us.
                            <br /><br />
                            So as you settle into your cozy study nooks and break out those warm sweaters, take a moment to discover what WECS has been up to, explore open positions within our organization, get a sneak peek at our upcoming events, and stay til’ the end for an exciting opportunity!
                            <br /><br />
                            Here's to a fall semester brimming with personal growth, academic achievements, and plenty of laughter! May your coding be as smooth as a perfectly raked pile of leaves, and your problem-solving skills as sharp as the autumn chill! So have a lovely start to the semester and remember, WECS is always here for you!
                            <br /><br />
                            Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=1cd27c8dae">here</a>!
                        </p>
                    </div>
                    <div className="col-5">
                        <img alt="September newsletter" src={septemberNews} height="300px" />
                    </div>
                </div>
            </div>

            <h3>Summer 2024 Issues</h3>
            <p>
                Browse through our old newsletters to see what events we've run in the past!
                <br />
            </p>
            <div className="container">
                <div className="row">
                    <h4>August Issue</h4>
                    <div className="col">
                        <img alt="August newsletter" src={augustNews} height="300px" />
                    </div>
                    <div className="col">
                        <p>
                            Happy August! In just two weeks, the fall term will kick off and whether it’s your first year at UVic or your fifth, you are always welcome here!
                            To all the first years, or those who have just found themselves in the faculty of Engineering and Computer Science for the first time, get ready for an amazing journey filled with incredible people, support and lots of fun.
                            Remember, in this faculty, there's no such thing as too many coffee breaks! <br /> <br />
                            So take a couple minutes away from packing and prepping to find out what we’ve been up to, open positions within WECS and what we have planned.
                            Stick around until the end for something new!
                            Here’s to a fantastic year of growth, learning, and laughs!
                            <br /><br />
                            Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=ac5edc088b">here</a>!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h4>July 2024</h4>
                    <div className="col">
                        <p>
                            Hello and welcome to the height of summer!
                            It's so hot, even the ice cream is looking for shade!
                            So take a break from school, enjoy the nice weather and stay tuned to discover the exciting activities we've lined up, our latest plans, and the open positions available at WECS!
                            <br /><br />
                            Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=11d3a5a274">here</a>!
                        </p>
                    </div>
                    <div className="col-5">
                        <img alt="July newsletter" src={julyNews} height="350px" />
                    </div>
                </div>


                <div className="row">
                    <h4>June 2024</h4>
                    <div className="col-5">
                        <img alt="June newsletter" src={juneNews} height="300px" />
                    </div>
                    <div className="col">
                        <p>
                            It’s so nice to see you again! <br /> <br />
                            This pride month, we are celebrating the diversity that makes us who we are and we have a bunch of events coming up that are more exciting than finding a forgotten $20 bill in your jeans pocket!
                            <br /><br />
                            So stick around and read on to find out more about what we’ve been up to, what we’re planning, and open positions within WECS!
                            <br /><br />
                            Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=2d2b18a5ba">here</a>!
                        </p>
                    </div>

                </div>
            </div>
            <br /><br />
            <h4>Older Issues</h4>
            <p>
                Check out the May 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=0280c71c48">here</a>!
                <br /><br />
                Check out the April 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=0cdcc63971">here</a>!
                <br /><br />
                Check out the March 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=9dfc168fff">here</a>!
                <br /><br />
                Check out the January & February 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=8c619d938e">here</a>!
                <br /><br />
                Check out the December 2023 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=e02694cf8d">here</a>!

            </p>



        </div>
    );
}

export default Newsletter;