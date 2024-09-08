import React from 'react';
import augustNews from "../../resources/August Newsletter.png";
import julyNews from "../../resources/July Newsletter.png";
import juneNews from "../../resources/June Newsletter.png";

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

            <h3>August Issue</h3>
            <p>
                View the August newsletter <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=ac5edc088b">here</a>!
            </p>
            <h4>A sneak peek...</h4>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={augustNews} height="300px" />
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
            </div>


            <h3>Summer 2024 Issues</h3>
            <p>
                Browse through our old newsletters to see what events we've run in the past!
                <br />
                <br />
            </p>
            <div className="container">
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
                        <img src={julyNews} height="350px" />
                    </div>
                </div>


                <div className="row">
                    <h4>June 2024</h4>
                    <div className="col-5">
                        <img src={juneNews} height="300px" />
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