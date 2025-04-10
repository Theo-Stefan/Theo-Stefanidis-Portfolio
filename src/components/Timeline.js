import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpShort, scaleUp } from '../utils/motionVariants';
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
        <motion.div
          key={milestone.id}
          className="timeline-point"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className={
              milestone.id % 2 === 1
                ? 'cloud-message-right'
                : 'cloud-message-left'
            }
          >
            <TimelineItem
              icon={milestone.icon}
              date={milestone.date}
              title={milestone.title}
              description={milestone.description}
              isRight={milestone.id % 2 === 1}
            />
          </div>
        </motion.div>
      ))}

      <div className="timeline-line timeline-bottom-line">
        <div className="timeline-arrow"></div>
        <div className="timeline-end-text">
          <motion.span
            variants={fadeUpShort}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'inline-block' }}
          >
            {t('career.present')}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
