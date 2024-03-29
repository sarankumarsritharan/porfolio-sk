import React from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 


function About() {
    return (
        <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> Passionate MERN stack Student Seeking for an Opportunity to work in Challenging environment :)  </p>
                         <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.
                    </p>
                    </div>
                </ScrollAnimation>
            </div>
    )
}

export default About
