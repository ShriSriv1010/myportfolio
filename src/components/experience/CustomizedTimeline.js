import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import NetworkCellIcon from '@mui/icons-material/NetworkCell';
import LanguageIcon from '@mui/icons-material/Language';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FoundationIcon from '@mui/icons-material/Foundation';
import Avatar from '@mui/material/Avatar';
import './card.css'
import motherson from '../../assets/motherson.png'
import cutm from "../../assets/cutm.jpg"
import iitkharagpur from '../../assets/iitkharagpur.png'
import tanman from '../../assets/tanman.png'
import suvida from '../../assets/suvida.png'
export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">

      {/* Motherson */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.white"
        >
          June 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  >
            <Avatar src={motherson} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <div className="about__cards1" >
            <article className="about__card1" >
              <NetworkCellIcon className="about__icon1" /> <h3>Motherson Sumi</h3>
              <h5>Project Trainee</h5>
              <small>I joined as a project trainee at Motherson Sumi. The aim is to develop a fully functinol logistic managemnet system</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Cutm */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          June 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  sx={{ bgcolor: 'palette.error.main' }}>
          <Avatar src={cutm} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px' }}>
          <div className="about__cards1" >
            <article className="about__card1">
            <LanguageIcon className="about__icon1" /> <h3>Centurion University</h3>
            
              <h5>Web Developer</h5>
              <small>I got this internship from my college it self. The purpose of this internship is to develop successful web based home automation system.</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/*   IIT Khgaraghpur */}

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          May 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          <Avatar src={iitkharagpur}  sx={{ bgcolor: 'primary.light' }}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

          <div className="about__cards1" >
            <article className="about__card1">
              <AssuredWorkloadIcon className="about__icon1" />
              <h3>IIT Kharagpur</h3>
              <h5>Web Developer Intern</h5>
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
          Apr 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.dark' }} />
          <TimelineDot color="warning">
          <Avatar src={tanman} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>


          <div className="about__cards1" >
            <article className="about__card1" >
              <DirectionsBusIcon className="about__icon1" />
              <h3>Tan Man Foundation</h3>
              <h5>Web Developer</h5>
              <small>I am currently working with the frontend team to develop react web application. The project is about to development a 3d based E-Commerce web Application. </small>
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
          Fab 2022 - Apr 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary' }} />
          <TimelineDot color="success">
          <Avatar src={suvida} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

          <div className="about__cards1" >
            <article className="about__card1" >
              <FoundationIcon className="about__icon1" />
              <h3>Suvidha Foundation</h3>
              <h5>Web Developer</h5>
              <small>I worked as a web developer but I also designed a Learning Managemenr system website on Figma as well as Designed a MySql Database. </small>
            </article>
          </div>
        </TimelineContent>
        
      </TimelineItem>
    </Timeline>
  );
}
