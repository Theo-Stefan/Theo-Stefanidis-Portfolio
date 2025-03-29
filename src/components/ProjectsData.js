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

export const ProjectsData = [
  {
    id: 1,
    title: 'My First Video Game - Maze Rush',
    description:
      'At the age of 14, I created my very first video game using Game Maker Studio — an experience that sparked my passion for programming. In this game, the player controls a smiley face navigating through intricate mazes filled with enemies and obstacles, aiming to reach the portal that leads to the next level. This project marked my first step into the world of game development and interactive experiences.',
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
      'At 15, I developed The Number, a mind-reading game built with Game Maker Studio. The player thinks of a number between 1 and 31, and through a series of clever questions, the game successfully guesses it.',
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
      'Run 4 Life is a 3D action game I developed as part of a university project. In this fast-paced challenge, the player must dodge obstacles, collect diamonds, and reach the finish line. It was my first experience combining 3D graphics, sound effects, and animations, all brought to life using Unity and C#.',
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
      "As a chess enthusiast, I contributed to FortKnight, a web-based chess game with unique rules. I added a toggle switch that visualizes the knight's possible moves using green dots, improving clarity for players. This contribution challenged me to dive into an unfamiliar codebase written in HTML, CSS, and JavaScript, enhancing both my coding skills and my ability to adapt to new projects.",
    thumbnail: fortknight1,
    images: [fortknight2],
    technologies: 'HTML, CSS, JavaScript',
    category: ['Game Development', 'Web Development'],
    projectLink: 'https://acenturyandabit.github.io/fortknight',
  },
  {
    id: 5,
    title: 'Viva Customers',
    description:
      'To manage my 3D printing business, I developed Viva Customers, a Java Swing application that stores customer details and sales history in an SQL database. This project helped me learn how to build a responsive UI and implement efficient database handling, ensuring a lightweight program that runs smoothly on any Windows computer.',
    thumbnail: VivaCustomers,
    videoURL: 'https://www.youtube.com/embed/I8DxPEX_w1Y',
    technologies: 'Java Swing, SQL',
    category: ['Desktop Applications'],
    projectLink: 'https://youtu.be/I8DxPEX_w1Y',
  },
];
