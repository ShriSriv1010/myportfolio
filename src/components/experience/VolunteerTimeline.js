import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import './card.css'
import HackerEarth from '../../assets/HackerEarth.png'
import club from '../../assets/club.jpg'
import internshala from '../../assets/internshala.jpg'
import learnvern from '../../assets/learnvern.jpg'
import imuna from '../../assets/imuna.jpg'
export default function VolunteerTimeline() {
  return (
    <Timeline position="alternate">

      {/* HackerEarth */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.white"
        >
          Jun 2021 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  >
            <Avatar src={HackerEarth} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <div className="about__cards1" >
            <article className="about__card1" >
              <h3>HackerEarth</h3>
              <h5>Campus Ambassador</h5>
              <small>I joined as a project trainee at Motherson Sumi. The aim is to develop a fully functinol logistic managemnet system</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Cutm Coding Club */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Feb 2021 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  sx={{ bgcolor: 'palette.error.main' }}>
          <Avatar src={club} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px' }}>
          <div className="about__cards1" >
            <article className="about__card1"> 
            <h3>Centurion Coding Club</h3>
            
              <h5>Coordinator</h5>
              <small>I got this internship from my college it self. The purpose of this internship is to develop successful web based home automation system.</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/*   Campus Ambassador Internshala */}

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Jun 20221- Aug 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          <Avatar src={internshala}  sx={{ bgcolor: 'primary.light' }}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

          <div className="about__cards1" >
            <article className="about__card1">
              <h3>Internshala</h3>
              <h5>Campus Ambassador</h5>
              <small>I am individually working on this project. The purpose of this project is to develop Inventory managemnet system for the lab management.  </small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Jun 2021 - Oct 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.dark' }} />
          <TimelineDot color="warning">
          <Avatar src={learnvern} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

          <div className="about__cards1" >
            <article className="about__card1" >
              <h3>LearnVern</h3>
              <h5>Campus Ambassador</h5>
              <small>It is a learing based platform where we where My work was to share the link to others.  </small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Jun 2021 - Aug 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary' }} />
          <TimelineDot color="success">
          <Avatar src={imuna} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <div className="about__cards1" >
            <article className="about__card1">  
              <h3>IMUNA</h3>
              <h5>Campus Ambassador</h5>
              <small>The International Model United Nations Association (IMUNA) had given me a opportunity grow-up. Had lot of enjoy by tacking this opportunity. </small>
            </article>
          </div>
        </TimelineContent>
        
      </TimelineItem>
    </Timeline>
  );
}
