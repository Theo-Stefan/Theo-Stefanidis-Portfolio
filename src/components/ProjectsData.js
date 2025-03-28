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

export const ProjectsData = [
  {
    id: 1,
    title: 'My First Video Game - Maze Rush',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ' +
      'pellentesque vulputate. Sed fringilla odio interdum efficitur viverra. ',
    thumbnail: MazeRush2,
    images: [MazeRush1, MazeRush2, MazeRush3, MazeRush4, MazeRush5, MazeRush6],
    technologies: 'GameMaker Language (GML)',
    category: ['Game Development'],
    projectLink:
      'https://drive.google.com/file/d/1Jg56bqbCuL4G87AfuCRUT2G3fxgDfQOn/view?usp=sharing',
  },
  {
    id: 2,
    title: 'The Number (Video Game)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ' +
      'pellentesque vulputate. Sed fringilla odio interdum efficitur viverra. ',
    thumbnail: Number5,
    images: [Number1, Number2, Number3, Number4, Number5, Number6],
    technologies: 'GameMaker Language (GML)',
    category: ['Game Development'],
    projectLink:
      'https://drive.google.com/file/d/1sv8Bs-eYL6SvHYSMELzdnTnPI8YZvXts/view?usp=drive_link',
  },
  {
    id: 3,
    title: 'Run 4 Life (Video Game)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ' +
      'pellentesque vulputate. Sed fringilla odio interdum efficitur viverra. ',
    thumbnail: Run4Life3,
    images: [Run4Life1, Run4Life2, Run4Life3, Run4Life4],
    technologies: 'C#',
    category: ['Game Development'],
    projectLink:
      'https://drive.google.com/file/d/1IFvlHedW0ei9pDaRH8F9NuMHUo2LVrdO/view?usp=drive_link',
  },
  {
    id: 4,
    title: 'FortKnight',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ' +
      'pellentesque vulputate. Sed fringilla odio interdum efficitur viverra. ',
    thumbnail: fortknight1,
    images: [fortknight2],
    technologies: 'HTML, CSS, JavaScript',
    category: ['Game Development', 'Web Development'],
    projectLink: 'https://acenturyandabit.github.io/fortknight',
  },
];
