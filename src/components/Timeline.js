import React from 'react';
import '../styles/Timeline.css';
import { TimelineData } from '../components/TimelineData';
import TimelineItem from './TimelineItem';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const timelineData = TimelineData();
  const { t } = useTranslation();

  return (
    <div className="timeline-container">
      <div className="timeline-line timeline-top-line"></div>

      {timelineData.map((milestone) => (
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
        <div className="timeline-end-text">{t('career.present')}</div>
      </div>
    </div>
  );
};

export default Timeline;
