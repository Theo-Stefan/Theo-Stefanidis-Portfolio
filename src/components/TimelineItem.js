import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/TimelineItem.css';
import { useTranslation } from 'react-i18next';

const TimelineItem = ({ icon, date, title, description, isRight = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`cloud-message ${isExpanded ? 'expanded' : ''}`}>
      <div className="cloud">
        <div className="cloud-icon">
          <FontAwesomeIcon icon={icon} />
        </div>

        <div className="cloud-date">{date}</div>

        <div className="cloud-title">{title}</div>

        <div className="cloud-read-more" onClick={toggleDescription}>
          {isExpanded ? t('career.readLess') : t('career.readMore')}
        </div>

        <div className={`cloud-description ${isExpanded ? 'show' : ''}`}>
          {description}
        </div>

        {isRight ? (
          <div className="right-cloud-arrow"></div>
        ) : (
          <div className="left-cloud-arrow"></div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
