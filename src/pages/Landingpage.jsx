
import React, { useState } from "react";
import './Assessment/Assessment.js';

import outerbox from "./images/outerbox.png"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"
import tagline from "./images/tagline.png"
import greenwavecontainer from "./images/greenwavecontainer.png"
import whitewavecontainer from "./images/whitewavecontainer.png"
import keyfeatures from "./images/key-features.png"
import importancetitle from "./images/importancetitle.png"
import mentalhealthtitle from "./images/mentalhealthtitle.png"
import positivethoughtstitle from "./images/positivethoughtstitle.png"
import joinus from "./images/join-us.png"
import bubblesmentalhealth from "./images/bubblesmentalhealth.png"
import bubblespositivethought from "./images/bubblespositivethought.png"
import bubblesimportance from "./images/bubblesimportance.png"
import backlinesmentalhealth from "./images/backlinesmentalhealth.png"
import backlinesimportance from "./images/backlinesimportance.png"
import backlinepositive from "./images/backlinepositive.png"
import greenfootercontainer from "./images/greenfootercontainer.png"
import whitefootercontainer from "./images/whitefootercontainer.png"
import footerline from "./images/footerline.png"
import copyright from "./images/copyright.png"
import games from "./images/games.png"
import community from "./images/community.png"
import blog from "./images/blog.png"
import calendar from "./images/calendar.png"
import mentalhealth from "./images/mentalhealth.gif"
import positivethought from "./images/positivethought.gif"
import meditation from "./images/meditation.gif"
import importance from "./images/importance.gif"

import './lpage.css';



const Landingpage = () => {

    return (
<div className="mindshift">
<div className="overlap-group-wrapper"> 
<div className="overlap-group">
 <img className="outerbox" alt="Outerbox" src={outerbox} />
 <a href='./games/assessment'>
 <button className="startassessment-btn" > 
   Start Assessment
 </button>
 </a>
 <img className="tagline" alt="Tagline" src={tagline} />
<div className="circle" />
<div className="div" />
<div className="circle-2" />
<div className="circle-3" />
 <img className="greenwavecontainer" alt="Greenwavecontainer" src={greenwavecontainer} /> 
 <img className="whitewavecontainer" alt="Whitewavecontainer" src={whitewavecontainer} /> 
 <img className="key-features" alt="Key features" src={keyfeatures} />
 <img className="mental-health-title" alt="Mental health title" src={mentalhealthtitle} />
 <img className="positive-thoughts" alt="Positive thoughts" src={positivethoughtstitle} />   
 <img className="importance-title" alt="Importance title" src={importancetitle}/>
<div className="text-wrapper-2" > Mood Tracker</div>
<div className="text-wrapper-3">Games</div> 
<div className="text-wrapper-4">Community Support</div>
<div className="text-wrapper-5">Blog</div> 
 <p className="mental-health">
 Mental health is about being emotionally and socially healthy - the way we think, feel and develop relationships - and not merely the absence of a mental health condition. Mental stress, also known as psychological stress, is a type of stress that affects a person&#39;s mental and emotional well-being. It
 can be caused by a wide variety of factors, including work-related pressures, financial difficulties, family problems, relationship issues, and health concerns, among others.
 </p>
 <p className="p">
  {" "}
  Mental stress is also often viewed as a response to external circumstances or events that cause us to feel
  anxious, overwhelmed, or worried. Mental stress is not just the result of external factors, but is also
  shaped by our internal responses and interpretations. By learning to recognize and manage our thoughts and
  beliefs, we can reduce the impact of mental stress on our well-being and cultivate greater happiness and
  resilience in our lives.
  </p>
  <p className="importance">
  It is also important to address any underlying issues that may be contributing to mental health challenges.
  This may include addressing past trauma, improving communication skills, or developing better coping
  mechanisms. <br />
  Ultimately, the key to curing mental health is to approach it holistically and to develop a personalized
  treatment plan that takes into account each individual&#39;s unique needs and circumstances. With the right
  support, resources, and strategies, it is possible to manage mental health challenges and live a fulfilling
  and meaningful life.
  </p>
  <img className= "bubblesmentalhealth" alt="Bubblesmentalhealth" src={bubblesmentalhealth} />
  <img className="img" alt="Img" src={bubblespositivethought}/>
  <img className="bubblesimportance" alt="Bubblesimportance" src= {bubblesimportance} />
  <img className="Img-2" alt= "Img" src={backlinesmentalhealth} />
  <img className="backlinesimportance" alt="Backlinesimportance" src= {backlinesimportance} /> 
  <img className="backlinepositive" alt="Backlinepositive" src={backlinepositive} />
  <img className="greenfootercontainer" alt="Greenfootercontainer" src={greenfootercontainer} />
  <img className="whitefootercontainer" alt="Whitefootercontainer" src={whitefootercontainer} />

 <p className="copyright">
<span className="span">2023 copyrights by </span>
<span className="text-wrapper-6">Mindshift.</span>
<span className="text-wrapper-7">All Rights Reserved.</span>
</p>
<img className="footerline" alt="Footerline" src={footerline} />
<div className="logo">
<h1 className="h-1">MINDSHIFT</h1> 
</div>
<img className="copyright-2" alt="Copyright" src={copyright} />
<a href="https://github.com" target="_blank">
  <img className="git-hub" alt="GitHub" src={github} />
</a>
<a href="https://linkedin.com" target="_blank">
  <img className="linked-in" alt="LinkedIn" src={linkedin} />
</a>
<a href="https://twitter.com" target="_blank">
  <img className="twitter" alt="Twitter" src={twitter} />
</a>
<a href="https://instagram.com" target="_blank">
  <img className="instagram" alt="Instagram" src={instagram} />
</a>
<img className="join-us" alt="Join us" src={joinus} />
<img className="games" alt="Games" src={games} />
<img className="community" alt="Community" src={community} />
<img className="blog" alt="Blog" src={blog} />
<img className="calendar" alt="Calendar" src={calendar}/>
<img className="importance-2" alt="Importance" src={importance}/>
<img className="mentalhealth" alt="Mentalhealth" src={mentalhealth} />
<img className="positivethought" alt="Positivethought" src={positivethought} />
<img className="meditation" alt="Meditation" src={meditation} />
</div>
</div>
</div>

  )
}

export default Landingpage

