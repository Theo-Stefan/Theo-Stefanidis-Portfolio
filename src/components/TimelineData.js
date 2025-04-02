import {
  faGraduationCap,
  faBriefcase,
  faPersonMilitaryRifle,
  faBookOpen,
  faSchool,
  faCube,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const TimelineData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      icon: faSchool,
      date: '2016 - 2019',
      title: t('career.timeline.id1.title'),
      description: t('career.timeline.id1.description'),
    },
    {
      id: 2,
      icon: faBookOpen,
      date: '01/10/2019',
      title: t('career.timeline.id2.title'),
      description: t('career.timeline.id2.description'),
    },
    {
      id: 3,
      icon: faCube,
      date: '2020 - 2024',
      title: t('career.timeline.id3.title'),
      description: t('career.timeline.id3.description'),
    },
    {
      id: 4,
      icon: faBriefcase,
      date: '01/03/2024 - 01/06/2024',
      title: t('career.timeline.id4.title'),
      description: t('career.timeline.id4.description'),
    },
    {
      id: 5,
      icon: faGraduationCap,
      date: '04/12/2024',
      title: t('career.timeline.id5.title'),
      description: t('career.timeline.id5.description'),
    },
    {
      id: 6,
      icon: faPersonMilitaryRifle,
      date: '15/11/2024 - 15/05/2025',
      title: t('career.timeline.id6.title'),
      description: t('career.timeline.id6.description'),
    },
  ];
};
