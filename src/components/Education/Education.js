import React from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

function Education() {
    return (
        <div className={classes.box} id="education">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
         <span  className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
            <div className={classes.container_content}>
                <div className={classes.row}>
                    <div className={classes.row_md_12}>
                        <div className={classes.timeline_centered}>
                            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                <article className={classes.timeline_entry}>
                                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                        <FaSchool />     
                                    </div>
                                    <div className={classes.label}>
                                    <h2 >Higher Education  <span>2010-2012</span></h2>
                                    <p>I have completed my higher education in Mahirishi Vidhya Mandhir,Chennai with major subjects as Physics,Chemistry & Maths with  merit 85.2 in Stateboard. </p>
                                    </div>
                                </article>
                            </ScrollAnimation>
                           <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                <article className={classes.timeline_entry}>
                                    <div className={classes.timeline_icon} >
                                    <MdSchool />
                                    </div>
                                    <div className={classes.label}>
                                    <h2 >Undergraduation In Velammal Engineering College <span>2012-2016</span></h2>
                                    <p>I  completed my undergraduation BE in  (Production Engineering) from <a href='http://velammal.edu.in/'>VEC</a>. </p>
                                    </div>
                                </article>
                            </ScrollAnimation>
                 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </ScrollAnimation>
    </div>
    )
}

export default Education
