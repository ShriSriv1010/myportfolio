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
              <small> I joined Motherson Sumi as a Project Trainee. It aims to develop a fully functional Logistics Management System. </small>
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
          <TimelineDot sx={{ bgcolor: 'palette.error.main' }}>
            <Avatar src={cutm} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px' }}>
          <div className="about__cards1" >
            <article className="about__card1">
              <LanguageIcon className="about__icon1" /> <h3>Centurion University</h3>

              <h5>Web Developer</h5>
              <small> I got this internship from my college itself. The objective of this internship is to develop successful web based home automation systems.</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Tanman */}
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
              <small>I am currently working with frontend team to develop react web application. This project is about to develop a 3D based e-commerce web application </small>
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
              <small> I worked as a web developer but I also designed a Learning Management System website on Figma as well as a MySql database. </small>
            </article>
          </div>
        </TimelineContent>

      </TimelineItem>
    </Timeline>
  );
}
