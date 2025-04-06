import { useTranslation } from 'react-i18next';

import MazeRush1 from '../assets/ProjectImages/MazeRush/maze rush 1.png';
import MazeRush2 from '../assets/ProjectImages/MazeRush/maze rush 2.png';
import MazeRush3 from '../assets/ProjectImages/MazeRush/maze rush 3.png';
import MazeRush4 from '../assets/ProjectImages/MazeRush/maze rush 4.png';
import MazeRush5 from '../assets/ProjectImages/MazeRush/maze rush 5.png';
import MazeRush6 from '../assets/ProjectImages/MazeRush/maze rush 6.png';
import Number1 from '../assets/ProjectImages/TheNumber/the number 1.png';
import Number2 from '../assets/ProjectImages/TheNumber/the number 2.png';
import Number3 from '../assets/ProjectImages/TheNumber/the number 3.png';
import Number4 from '../assets/ProjectImages/TheNumber/the number 4.png';
import Number5 from '../assets/ProjectImages/TheNumber/the number 5.png';
import Number6 from '../assets/ProjectImages/TheNumber/the number 6.png';
import Run4Life1 from '../assets/ProjectImages/Run4Life/run4life 1.png';
import Run4Life2 from '../assets/ProjectImages/Run4Life/run4life 2.png';
import Run4Life3 from '../assets/ProjectImages/Run4Life/run4life 3.png';
import Run4Life4 from '../assets/ProjectImages/Run4Life/run4life 4.png';
import fortknight1 from '../assets/ProjectImages/FortKnight/fortknight 1.png';
import fortknight2 from '../assets/ProjectImages/FortKnight/fortknight 2.gif';
import VivaCustomers from '../assets/ProjectImages/VivaCustomers/viva customers 1.png';
import ephosar from '../assets/ProjectImages/EphosAR/ephosar.png';
import ephosar1 from '../assets/ProjectImages/EphosAR/ephosar1.png';
import ephosar2 from '../assets/ProjectImages/EphosAR/ephosar2.png';
import ephosar3 from '../assets/ProjectImages/EphosAR/ephosar3.png';

/* Add a new projects:
1. In the ProjectsData array add a new project on the top with id=previous_id + 1
2. In the i18n.js file, for each language find the projects->projectsData and add the new project's title and description to the according language
3. In the file ProjectsData.js (here), continue by adding images and the rest of the projects details like the other projects
*/

export const ProjectsData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 6,
      title: t('projects.projectsData.id6.title'),
      description: t('projects.projectsData.id6.description'),
      thumbnail: ephosar,
      images: [ephosar, ephosar1, ephosar2, ephosar3],
      technologies: 'C#',
      category: ['Game Development', 'Mobile Applications'],
      projectLink:
        'https://play.google.com/store/apps/details?id=com.SWITCHLab.ePhosARGamified&pcampaignid=web_share',
    },
    {
      id: 5,
      title: t('projects.projectsData.id5.title'),
      description: t('projects.projectsData.id5.description'),
      thumbnail: VivaCustomers,
      videoURL: 'https://www.youtube.com/embed/I8DxPEX_w1Y',
      technologies: 'Java Swing, SQL',
      category: ['Desktop Applications'],
      projectLink: 'https://youtu.be/I8DxPEX_w1Y',
    },
    {
      id: 4,
      title: t('projects.projectsData.id4.title'),
      description: t('projects.projectsData.id4.description'),
      thumbnail: fortknight1,
      images: [fortknight2],
      technologies: 'HTML, CSS, JavaScript',
      category: ['Game Development', 'Web Development'],
      projectLink: 'https://acenturyandabit.github.io/fortknight',
    },
    {
      id: 3,
      title: t('projects.projectsData.id3.title'),
      description: t('projects.projectsData.id3.description'),
      thumbnail: Run4Life3,
      images: [Run4Life1, Run4Life2, Run4Life3, Run4Life4],
      technologies: 'C#',
      category: ['Game Development'],
      projectLink:
        'https://drive.google.com/file/d/1IFvlHedW0ei9pDaRH8F9NuMHUo2LVrdO/view?usp=drive_link',
    },
    {
      id: 2,
      title: t('projects.projectsData.id2.title'),
      description: t('projects.projectsData.id2.description'),
      thumbnail: Number5,
      images: [Number1, Number2, Number3, Number4, Number5, Number6],
      technologies: 'GameMaker Language (GML)',
      category: ['Game Development'],
      projectLink:
        'https://drive.google.com/file/d/1sv8Bs-eYL6SvHYSMELzdnTnPI8YZvXts/view?usp=drive_link',
    },
    {
      id: 1,
      title: t('projects.projectsData.id1.title'),
      description: t('projects.projectsData.id1.description'),
      thumbnail: MazeRush2,
      images: [
        MazeRush1,
        MazeRush2,
        MazeRush3,
        MazeRush4,
        MazeRush5,
        MazeRush6,
      ],
      technologies: 'GameMaker Language (GML)',
      category: ['Game Development'],
      projectLink:
        'https://drive.google.com/file/d/1Jg56bqbCuL4G87AfuCRUT2G3fxgDfQOn/view?usp=sharing',
    },
  ];
};
