import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      header: {
        home: 'Home',
        about: 'About',
        career: 'Career Journey',
        projects: 'Projects',
        contactBTN: 'Contact',
      },
      home: {
        hey: 'Hey there! I am',
        name: 'Theo',
        surname: 'Stefanidis',
        resumeBTN: 'My Resume',
      },
      about: {
        title: 'About Me',
        text1:
          'My journey into programming began at 14, when I first attempted to build a video game. Seeing my code come to life sparked a passion for creating interactive experiences from scratch. This fascination led me to study Informatics, where I explored various technologies and honed my skills. While my expertise lies in front-end development, I also have a strong foundation in back-end technologies, allowing me to contribute effectively across the full stack. Now, as a software developer, I thrive on bringing ideas to life through clean code and innovative design.',
        text2: 'My experience spans the following technologies:',
      },
      career: {
        title: 'My Career Journey',
        text: 'Here are the key milestones that shaped my journey as a developer, from my early steps in programming to becoming a software professional.',
        present: 'Present',
        timeline: {
          id1: {
            title: 'High School Graduation',
            description:
              'I completed my high school education in Thessaloniki, Greece, graduating with a mark of 18.4/20 (excellent).',
          },
          id2: {
            title: 'University - Computer Science Department',
            description:
              'I was admitted to the Computer Science Department at the Aristotle University of Thessaloniki, embarking on a journey that deepened my understanding of technology and problem-solving.',
          },
          id3: {
            title: '3D Printing',
            description:
              'Extensive experience with 3D printing, including designing models in CAD software (Autodesk Fusion 360), modifying G-code for optimized prints, and producing custom 3D-printed objects for customers. This hands-on work enhanced my problem-solving skills and deepened my understanding of digital fabrication and automation.',
          },
          id4: {
            title: 'Intership Experience at Value+ in Milan, Italy',
            description:
              'I completed a 3-month internship at Value+ in Milan, Italy, where I gained hands-on experience in React JavaScript and web development. I also improved my Italian and collaborated effectively with my colleagues, enhancing both my technical and interpersonal skills.\n(https://www.valueplus.it/)',
          },
          id5: {
            title: 'University Graduation',
            description:
              'I graduated from the Computer Science Department at Aristotle University of Thessaloniki, where I explored multiple areas, from programming and systems architecture to databases and software engineering. Working on a wide range of projects helped me develop a versatile skill set that I continue to build on in my professional journey.',
          },
          id6: {
            title: 'Military Service',
            description:
              "In compliance with Greece's mandatory military service, I took a six-month break from my career to serve in the armed forces.",
          },
        },
      },
      projects: {
        title: 'My Projects',
        text: 'Here are some of the projects I’ve worked on, ranging from web applications to software experiments. Each project reflects my passion for coding, problem-solving, and building intuitive user experiences.',
        seeMore: 'See more...',
        filterByCategory: 'Filter By Category',
        categories: {
          all: 'All',
          webDev: 'Web Development',
          desktopApp: 'Desktop Applications',
          gameDev: 'Game Development',
          mobileApp: 'Mobile Applications',
        },
        projectsData: {
          id6: {
            title: 'My Thesis',
            description:
              '"Improving and Gamifying ePhos AR" is my university thesis project, where I worked on enhancing and gamifying the ePhos AR mobile application. ePhos AR is an educational app that introduces high school and university students to the science of Photonics using augmented reality technology.\n\nMy contribution focused on fixing bugs and integrating gamification elements to boost user engagement—an approach backed by scientific research. Specifically, I added:\n\n- A virtual assistant to guide users throughout the experience, replacing traditional paper-based instructions.\n- A progress bar to visually track the player’s advancement.\n- Badges to reward achievements and encourage further exploration.\n\nThese features were developed in Unity with C# over six months of dedicated work and research. The goal was to make learning more interactive, enjoyable, and effective.',
          },
          id5: {
            title: 'Viva Customers',
            description:
              'To manage my 3D printing business, I developed Viva Customers, a Java Swing application that stores customer details and sales history in an SQL database. This project helped me learn how to build a responsive UI and implement efficient database handling, ensuring a lightweight program that runs smoothly on any Windows computer.',
          },
          id4: {
            title: 'FortKnight',
            description:
              "As a chess enthusiast, I contributed to FortKnight, a web-based chess game with unique rules. I added a toggle switch that visualizes the knight's possible moves using green dots, improving clarity for players. This contribution challenged me to dive into an unfamiliar codebase written in HTML, CSS, and JavaScript, enhancing both my coding skills and my ability to adapt to new projects.",
          },
          id3: {
            title: 'Run 4 Life (Video Game)',
            description:
              'Run 4 Life is a 3D action game I developed as part of a university project. In this fast-paced challenge, the player must dodge obstacles, collect diamonds, and reach the finish line. It was my first experience combining 3D graphics, sound effects, and animations, all brought to life using Unity and C#.',
          },
          id2: {
            title: 'The Number (Video Game)',
            description:
              'At 15, I developed The Number, a mind-reading game built with Game Maker Studio. The player thinks of a number between 1 and 31, and through a series of clever questions, the game successfully guesses it.',
          },
          id1: {
            title: 'My First Video Game - Maze Rush',
            description:
              'At the age of 14, I created my very first video game using Game Maker Studio — an experience that sparked my passion for programming. In this game, the player controls a smiley face navigating through intricate mazes filled with enemies and obstacles, aiming to reach the portal that leads to the next level. This project marked my first step into the world of game development and interactive experiences.',
          },
        },
      },
      contact: {
        contactMe: 'Contact Me',
        getInTouch: 'Get In Touch',
        myEmail: 'My email',
        contactForm: {
          name: 'Your Name',
          email: 'Your Email Adress',
          message: 'Write your message here...',
          send: 'Send',
          sending: 'Sending...',
        },
      },
    },
  },
  it: {
    translation: {
      header: {
        home: 'Home',
        about: 'Chi Sono',
        career: 'Percorso Professionale',
        projects: 'Progetti',
        contactBTN: 'Contatto',
      },
      home: {
        hey: 'Ciao! Sono',
        name: 'Theo',
        surname: 'Stefanidis',
        resumeBTN: 'Il Mio Curriculum',
      },
      about: {
        title: 'Chi Sono',
        text1:
          'Il mio viaggio nella programmazione è iniziato a 14 anni, quando ho provato per la prima volta a creare un videogioco. Quando ho visto il mio codice prendere vita, ho scoperto quanto mi affascina creare esperienze interattive da zero. Questa passione mi ha spinto a studiare Informatica, dove ho esplorato varie tecnologie e sviluppato le mie competenze. Sebbene la mia specializzazione sia nello sviluppo front-end, ho anche una solida base nelle tecnologie back-end, il che mi permette di contribuire efficacemente all’intero stack. Ora, come sviluppatore software, mi entusiasma dare vita alle idee attraverso un codice pulito e un design innovativo.',
        text2: 'Ho maturato esperienza nelle seguenti tecnologie:',
      },
      career: {
        title: 'Il Mio Percorso Professionale',
        text: 'Ecco le tappe fondamentali che hanno segnato il mio percorso da sviluppatore, dai miei primi passi nella programmazione fino a diventare un professionista del software.',
        present: 'Presente',
        timeline: {
          id1: {
            title: 'Diploma di Maturità',
            description:
              'Mi sono diplomato a Salonicco, in Grecia, con un voto di 18.4/20 (eccellente).',
          },
          id2: {
            title: 'Università - Dipartimento di Informatica',
            description:
              "Sono stato ammesso al Dipartimento di Informatica dell'Università Aristotele di Salonicco, dove ho intrapreso un percorso che ha approfondito la mia comprensione della tecnologia e del problem-solving.",
          },
          id3: {
            title: '3D Printing',
            description:
              'Ho una consolidata esperienza nella stampa 3D, che include la progettazione di modelli tramite software CAD (Autodesk Fusion 360), l’ottimizzazione del G-code per una stampa efficiente e la realizzazione di oggetti 3D personalizzati per clienti. Questo lavoro pratico ha migliorato le mie capacità di problem-solving e ha approfondito la mia comprensione della fabbricazione digitale e dei processi di automazione',
          },
          id4: {
            title: 'Esperienza di Tirocinio presso Value+ a Milano, Italia',
            description:
              'Ho completato un tirocinio di tre mesi presso Value+ a Milano, dove ho acquisito esperienza pratica in React JavaScript e nello sviluppo web. Inoltre, ho migliorato il mio italiano e ho collaborato efficacemente con i miei colleghi, rafforzando sia le mie competenze tecniche che quelle interpersonali.\n(https://www.valueplus.it/)',
          },
          id5: {
            title: 'Laurea Universitaria',
            description:
              "Mi sono laureato presso il Dipartimento di Informatica dell'Università Aristotele di Salonicco, dove ho esplorato molteplici aree, dalla programmazione e l'architettura dei sistemi ai database e all'ingegneria del software. Lavorare su una vasta gamma di progetti mi ha permesso di sviluppare un set di competenze versatili che continuo a migliorare nel mio percorso professionale.",
          },
          id6: {
            title: 'Servizio Militare',
            description:
              'In ottemperanza al servizio militare obbligatorio in Grecia, ho preso una pausa di sei mesi dalla mia carriera per servire nelle forze armate.',
          },
        },
      },
      projects: {
        title: 'I Miei Progetti',
        text: 'Ecco alcuni dei progetti su cui ho lavorato, che vanno dalle applicazioni web agli esperimenti software. Ogni progetto riflette la mia passione per la programmazione e la creazione di user-experiences intuitive.',
        seeMore: 'Vedi di più...',
        filterByCategory: 'Filtra per categoria',
        categories: {
          all: 'Tutto',
          webDev: 'Sviluppo Web',
          desktopApp: 'Applicazioni desktop',
          gameDev: 'Sviluppo giochi',
          mobileApp: 'Applicazioni mobili',
        },
        projectsData: {
          id6: {
            title: 'La mia Tesi',
            description:
              "La mia tesi universitaria si è basata sul progetto \"Miglioramento e Gamification di ePhos AR\". ePhos AR è un'app educativa che introduce gli studenti delle scuole superiori e universitari alla scienza della fotonica utilizzando la tecnologia della realtà aumentata.\n\nIl mio contributo si è concentrato sulla correzione di bug e sull'integrazione di elementi di gamification per aumentare il coinvolgimento degli utenti—un approccio supportato da ricerche scientifiche. In particolare, ho aggiunto:\n\n-Un assistente virtuale per guidare gli utenti durante l’esperienza, il quale ha sostituito le istruzioni cartacee tradizionali che erano presenti in origine.\n-Una barra di progresso per visualizzare i progressi del giocatore.\n-Badge per premiare i traguardi raggiunti e incentivare l'esplorazione.\n\nQueste funzionalità sono state sviluppate in Unity con C#, nel corso di sei mesi di lavoro e ricerca dedicati. L'obiettivo era rendere l'apprendimento più interattivo, piacevole ed efficace.",
          },
          id5: {
            title: 'Viva Customers',
            description:
              "Per gestire la mia attività di stampa 3D, ho sviluppato Viva Customers, un'applicazione Java Swing che memorizza i dati dei clienti e la cronologia delle vendite in un database SQL. Con questo progetto ho imparato a creare un'interfaccia utente reattiva e a gestire in modo efficiente un database, garantendo un programma leggero e fluido su qualsiasi computer Windows.",
          },
          id4: {
            title: 'FortKnight',
            description:
              'Sono anche un appassionato di scacchi e ho contribuito a FortKnight, un gioco di scacchi web con regole uniche. Ho aggiunto un interruttore che visualizza le mosse possibili del cavallo con dei punti verdi, rendendo così il gioco più intuitivo per i giocatori. Questo progetto è stato una sfida che mi ha portato a esplorare un codice sconosciuto scritto in HTML, CSS e JavaScript, migliorando sia le mie abilità di programmazione che la mia capacità di adattamento a nuovi progetti.',
          },
          id3: {
            title: 'Run 4 Life (Videogioco)',
            description:
              "Run 4 Life è un gioco d'azione 3D che ho sviluppato come parte di un progetto universitario. In questa sfida frenetica, il giocatore deve evitare ostacoli, raccogliere diamanti e raggiungere il traguardo. È stata la mia prima esperienza nell'unire grafica 3D, effetti sonori e animazioni, il tutto realizzato con Unity e C#.",
          },
          id2: {
            title: 'The Number (Videogioco)',
            description:
              'A 15 anni, ho sviluppato The Number, un gioco di lettura della mente costruito con Game Maker Studio. Il giocatore pensa a un numero tra 1 e 31, e tramite una serie di domande intelligenti, il gioco riesce a indovinarlo.',
          },
          id1: {
            title: 'Il mio primo videogioco - Maze Rush',
            description:
              "All'età di 14 anni, ho creato il mio primo videogioco con Game Maker Studio — un'esperienza che ha acceso la mia passione per la programmazione. lo scopo del gioco è controllare una faccina sorridente stile pacman che deve attraversare labirinti pieni di nemici e ostacoli per raggiungere il portale che conduce al livello successivo. Questo progetto ha segnato il mio primo passo nel mondo dello sviluppo videoludico e delle esperienze interattive.",
          },
        },
      },
      contact: {
        contactMe: 'Contattami',
        getInTouch: 'Ti aspetto!',
        myEmail: 'La mia email',
        contactForm: {
          name: 'Nome',
          email: 'Indirizzo email',
          message: 'Scrivi qui il tuo messaggio...',
          send: 'Invia',
          sending: 'Invia...',
        },
      },
    },
  },
  gr: {
    translation: {
      header: {
        home: 'Αρχική',
        about: 'Ποιος Είμαι',
        career: 'Επαγγελματική Πορεία',
        projects: 'Έργα',
        contactBTN: 'Επικοινωνία',
      },
      home: {
        hey: 'Γειά! Είμαι ο',
        name: 'Θεόδωρος',
        surname: 'Στεφανίδης',
        resumeBTN: 'Το Βιογραφικό Μου',
      },
      about: {
        title: 'Ποιος Είμαι',
        text1:
          'Το ταξίδι μου στον προγραμματισμό ξεκίνησε στα 14 μου, όταν προσπάθησα για πρώτη φορά να δημιουργήσω ένα βιντεοπαιχνίδι. Ενθουσιάστηκα αμέσως με την ιδέα του να γράφω κώδικα ο οποίος παράγει ζωντανά και απτά αποτελέσματα από το μηδέν. Αυτό με οδήγησε να σπουδάσω Πληροφορική, όπου εξερεύνησα διάφορες τεχνολογίες και βελτίωσα τις δεξιότητές μου. Αν και η εξειδίκευσή μου είναι στην ανάπτυξη front-end, κατέχω επίσης ισχυρό υπόβαθρο σε τεχνολογίες back-end, πράγμα που μου επιτρέπει να συνεισφέρω αποτελεσματικά στο full-stack. Πλέον, ως προγραμματιστής, μετατρέπω τις ιδέες σε πραγματικότητα μέσω καθαρού κώδικα και καινοτόμου σχεδιασμού.',
        text2: 'Η εμπειρία μου καλύπτει τις ακόλουθες τεχνολογίες:',
      },
      career: {
        title: 'Η Επαγγελματική Μου Πορεία',
        text: 'Παρακάτω παρουσιάζονται οι βασικές στιγμές που διαμόρφωσαν την πορεία μου ως προγραμματιστής, από τα πρώτα μου βήματα μέχρι την επαγγελματική μου ενασχόληση με την ανάπτυξη λογισμικού.',
        present: 'Παρόν',
        timeline: {
          id1: {
            title: 'Αποφοίτηση Λυκείου',
            description:
              'Ολοκλήρωσα τη δευτεροβάθμια εκπαίδευσή μου στη Θεσσαλονίκη, αποφοιτώντας με βαθμό 18,4/20 (άριστα).',
          },
          id2: {
            title: 'Πανεπιστήμιο - Τμήμα Πληροφορικής',
            description:
              'Εισήχθη στο Τμήμα Πληροφορικής του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, ξεκινώντας ένα ταξίδι που εμβάθυνε την κατανόησή μου στην τεχνολογία και την επίλυση προβλημάτων.',
          },
          id3: {
            title: '3D Printing',
            description:
              'Εκτεταμένη εμπειρία στην 3D εκτύπωση, συμπεριλαμβανομένου του σχεδιασμού μοντέλων σε λογισμικό CAD (Autodesk Fusion 360), της τροποποίησης G-code για βελτιστοποιημένες εκτυπώσεις και της παραγωγής εξατομικευμένων 3D αντικειμένων για πελάτες. Αυτή η εργασία ενίσχυσε τις ικανότητές μου στην επίλυση προβλημάτων και εμβάθυνε την κατανόησή μου στην ψηφιακή κατασκευή και την αυτοματοποίηση.',
          },
          id4: {
            title: 'Πρακτική Άσκηση στην Value+ στο Μιλάνο, Ιταλία',
            description:
              'Ολοκλήρωσα την πρακτική μου άσκηση τριών μηνών στην εταιρεία Value+ στο Μιλάνο, όπου απέκτησα εμπειρία στην γλώσσα React JavaScript και την ανάπτυξη ιστοσελίδων. Επιπλέον, βελτίωσα τα ιταλικά μου και συνεργάστηκα αποτελεσματικά με τους συναδέλφους μου, ενισχύοντας τόσο τις τεχνικές όσο και τις διαπροσωπικές μου δεξιότητες.\n(https://www.valueplus.it/)',
          },
          id5: {
            title: 'Αποφοίτηση Πανεπιστημίου',
            description:
              'Αποφοίτησα από το Τμήμα Πληροφορικής του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, όπου εξερεύνησα πολλούς τομείς, από τον προγραμματισμό και την αρχιτεκτονική συστημάτων μέχρι τις βάσεις δεδομένων και τη μηχανική λογισμικού. Η ενασχόληση με μια ευρεία ποικιλία έργων με βοήθησε να αναπτύξω ένα ευέλικτο σύνολο δεξιοτήτων, το οποίο συνεχίζω να εξελίσσω στην επαγγελματική μου πορεία.',
          },
          id6: {
            title: 'Στρατιωτική Θητεία',
            description:
              'Έκανα ένα διάλειμμα έξι μηνών από την καριέρα μου για να υπηρετήσω στις ένοπλες δυνάμεις.',
          },
        },
      },
      projects: {
        title: 'Τα Έργα Μου',
        text: 'Εδώ είναι μερικά από τα έργα στα οποία έχω εργαστεί, που κυμαίνονται από εφαρμογές ιστού έως πειράματα λογισμικού. Κάθε έργο αντανακλά το πάθος μου για τον προγραμματισμό, την επίλυση προβλημάτων και τη δημιουργία διαισθητικών εμπειριών χρήστη.',
        seeMore: 'Δείτε περισσότερα...',
        filterByCategory: 'Φίλτρο ανά κατηγορία',
        categories: {
          all: 'Όλα',
          webDev: 'Ανάπτυξη Ιστοσελίδων',
          desktopApp: 'Desktop Εφαρμογές',
          gameDev: 'Ανάπτυξη Παιχνιδιών',
          mobileApp: 'Εφαρμογές Κινητών',
        },
        projectsData: {
          id6: {
            title: 'Η Πτυχιακή μου Εργασία',
            description:
              '"Βελτίωση και Παιχνιδοποίηση του ePhos AR" είναι το πανεπιστημιακό μου πτυχιακό έργο, στο οποίο εργάστηκα για τη βελτίωση και την παιχνιδοποίηση της εφαρμογής ePhos AR. Το ePhos AR είναι μια εκπαιδευτική εφαρμογή που εισάγει μαθητές Λυκείου και φοιτητές στην επιστήμη της Φωτονικής, αξιοποιώντας την τεχνολογία της επαυξημένης πραγματικότητας.\n\nΗ συμβολή μου επικεντρώθηκε στη διόρθωση σφαλμάτων και την ενσωμάτωση στοιχείων παιχνιδοποίησης, ώστε να ενισχυθεί η αλληλεπίδραση των χρηστών — μια προσέγγιση που υποστηρίζεται από επιστημονική έρευνα. Συγκεκριμένα, πρόσθεσα:\n\n-Έναν εικονικό βοηθό που καθοδηγεί τους χρήστες σε όλη τη διάρκεια της εμπειρίας, αντικαθιστώντας τις παραδοσιακές έντυπες οδηγίες.\n-Μια μπάρα προόδου για οπτική αναπαράσταση της πορείας του παίκτη.\n-Κονκάρδες (badges) ως επιβράβευση για επιτεύγματα και κίνητρο για περαιτέρω εξερεύνηση.\n\nΑυτά τα χαρακτηριστικά αναπτύχθηκαν σε Unity με C# μέσα σε έξι μήνες αφοσιωμένης εργασίας και έρευνας. Ο στόχος ήταν να γίνει η μάθηση πιο διαδραστική, ευχάριστη και αποτελεσματική.',
          },
          id5: {
            title: 'Viva Customers',
            description:
              'Για τη διαχείριση της επιχείρησής μου με 3D εκτυπώσεις, ανέπτυξα την εφαρμογή Viva Customers με Java Swing, η οποία αποθηκεύει τα στοιχεία πελατών και το ιστορικό πωλήσεων σε μια βάση δεδομένων SQL. Μέσα από αυτό το project, έμαθα να κατασκευάζω ευέλικτο περιβάλλον χρήστη και να χειρίζομαι αποτελεσματικά βάσεις δεδομένων, διασφαλίζοντας ένα ελαφρύ πρόγραμμα που τρέχει ομαλά σε οποιονδήποτε υπολογιστή με Windows.',
          },
          id4: {
            title: 'FortKnight',
            description:
              'Ως λάτρης του σκακιού, συνέβαλα στην ανάπτυξη του FortKnight, ενός διαδικτυακού παιχνιδιού σκακιού με μοναδικούς κανόνες. Πρόσθεσα έναν διακόπτη που εμφανίζει τις πιθανές κινήσεις του ίππου με πράσινες κουκκίδες, βελτιώνοντας την κατανόηση για τον παίκτη. Η συνεισφορά μου απαιτούσε να εξοικειωθώ με έναν άγνωστο κώδικα γραμμένο σε HTML, CSS και JavaScript, ενισχύοντας τόσο τις προγραμματιστικές μου δεξιότητες όσο και την προσαρμοστικότητά μου σε νέα projects.',
          },
          id3: {
            title: 'Run 4 Life (Βιντεοπαιχνίδι)',
            description:
              'Το Run 4 Life είναι ένα 3D παιχνίδι δράσης που ανέπτυξα στο πλαίσιο πανεπιστημιακού project. Σε αυτή τη γρήγορη δοκιμασία, ο παίκτης πρέπει να αποφύγει εμπόδια, να μαζέψει διαμάντια και να φτάσει στη γραμμή τερματισμού. Ήταν η πρώτη μου εμπειρία που συνδύασε 3D γραφικά, ηχητικά εφέ και animation, όλα υλοποιημένα με Unity και C#.',
          },
          id2: {
            title: 'The Number (Βιντεοπαιχνίδι)',
            description:
              'Στα 15 μου, ανέπτυξα το The Number, ένα παιχνίδι "ανάγνωσης σκέψης" με το Game Maker Studio. Ο παίκτης σκέφτεται έναν αριθμό από το 1 έως το 31, και το παιχνίδι τον μαντεύει μέσα από μια σειρά έξυπνων ερωτήσεων.',
          },
          id1: {
            title: 'Το πρώτο μου βιντεοπαιχνίδι - Maze Rush',
            description:
              'Σε ηλικία 14 ετών, δημιούργησα το πρώτο μου βιντεοπαιχνίδι χρησιμοποιώντας το Game Maker Studio — μια εμπειρία που πυροδότησε το πάθος μου για τον προγραμματισμό. Στο παιχνίδι, ο παίκτης ελέγχει ένα χαμογελαστό προσωπάκι που προσπαθεί να διασχίσει πολύπλοκους λαβυρίνθους γεμάτους εχθρούς και εμπόδια, με στόχο να φτάσει στην πύλη που οδηγεί στο επόμενο επίπεδο. Το project αυτό αποτέλεσε το πρώτο μου βήμα στον κόσμο της ανάπτυξης παιχνιδιών και των διαδραστικών εμπειριών.',
          },
        },
      },
      contact: {
        contactMe: 'Επικοινώνησε Μαζί Μου',
        getInTouch: 'Έλα σε επαφή',
        myEmail: 'Το email μου',
        contactForm: {
          name: 'Το όνομά σου',
          email: 'Η διεύθυνση email σου',
          message: 'Γράψε το μήνυμά σου εδώ...',
          send: 'Αποστολή Μηνύματος',
          sending: 'Αποστολή...',
        },
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
