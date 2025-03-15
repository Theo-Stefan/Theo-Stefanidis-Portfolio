import React from 'react';
import '../styles/Timeline.css';
import { TimelineData } from '../components/TimelineData';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line timeline-top-line"></div>

      {TimelineData.map((milestone) => (
        <div key={milestone.id} className="timeline-point">
          {milestone.id % 2 === 1 ? (
            <div className="cloud-message-right">
              <TimelineItem
                icon={milestone.icon}
                date={milestone.date}
                title={milestone.title}
                description={milestone.description}
                isRight={true}
              />
            </div>
          ) : (
            <div className="cloud-message-left">
              <TimelineItem
                icon={milestone.icon}
                date={milestone.date}
                title={milestone.title}
                description={milestone.description}
                isRight={false}
              />
            </div>
          )}
        </div>
      ))}

      <div className="timeline-line timeline-bottom-line">
        <div className="timeline-arrow"></div>
        <div className="timeline-end-text">Present</div>
      </div>
    </div>
  );
};

export default Timeline;
