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
        readMore: 'Read more...',
        readLess: 'Read less...',
        timeline: {
          id1: {
            title: 'High School Graduation',
            description:
              'I completed my high school education in Thessaloniki, Greece, graduating with a mark of 18.4/20 (excellent) — a result that reflected my dedication and hard work throughout those years.',
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
            title: '',
            description: '',
          },
          id5: {
            title: '',
            description: '',
          },
          id4: {
            title: '',
            description: '',
          },
          id3: {
            title: '',
            description: '',
          },
          id2: {
            title: '',
            description: '',
          },
          id1: {
            title: '',
            description: '',
          },
        },
      },
      contact: {},
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
          'Il mio viaggio nella programmazione è iniziato a 14 anni, quando ho provato per la prima volta a creare un videogioco. Vedere il mio codice prendere vita ha acceso in me una passione per la creazione di esperienze interattive da zero. Questa fascinazione mi ha portato a studiare Informatica, dove ho esplorato varie tecnologie e affinato le mie competenze. Sebbene la mia specializzazione sia nello sviluppo front-end, ho anche una solida base nelle tecnologie back-end, il che mi permette di contribuire efficacemente all’intero stack. Ora, come sviluppatore software, mi entusiasma dare vita alle idee attraverso codice pulito e design innovativo.',
        text2: 'La mia esperienza abbraccia le seguenti tecnologie:',
      },
      career: {
        title: 'Il Mio Percorso Professionale',
        text: 'Ecco le tappe fondamentali che hanno plasmato il mio percorso come sviluppatore, dai miei primi passi nella programmazione fino a diventare un professionista del software.',
        present: 'Presente',
        readMore: 'Leggi di più...',
        readLess: 'Leggi di meno...',
        timeline: {
          id1: {
            title: 'Diploma di Maturità',
            description:
              'Ho completato la mia istruzione superiore a Salonicco, in Grecia, diplomandomi con un voto di 18.4/20 (eccellente), un risultato che ha riflesso la mia dedizione e il mio impegno durante quegli anni.',
          },
          id2: {
            title: 'Università - Dipartimento di Informatica',
            description:
              "Sono stato ammesso al Dipartimento di Informatica dell'Università Aristotele di Salonicco, intraprendendo un percorso che ha approfondito la mia comprensione della tecnologia e della risoluzione dei problemi.",
          },
          id3: {
            title: '3D Printing',
            description:
              "Ampia esperienza nella stampa 3D, inclusa la progettazione di modelli con software CAD (Autodesk Fusion 360), la modifica del G-code per stampe ottimizzate e la produzione di oggetti 3D personalizzati per clienti. Questo lavoro pratico ha migliorato le mie capacità di problem-solving e ha approfondito la mia comprensione della fabbricazione digitale e dell'automazione.",
          },
          id4: {
            title: 'Esperienza di Tirocinio presso Value+ a Milano, Italia',
            description:
              'Ho completato un tirocinio di tre mesi presso Value+ a Milano, Italia, dove ho acquisito esperienza pratica in React JavaScript e nello sviluppo web. Inoltre, ho migliorato il mio italiano e ho collaborato efficacemente con i miei colleghi, rafforzando sia le mie competenze tecniche che quelle interpersonali.\n(https://www.valueplus.it/)',
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
        text: 'Ecco alcuni dei progetti su cui ho lavorato, che vanno dalle applicazioni web agli esperimenti software. Ogni progetto riflette la mia passione per la programmazione, la risoluzione dei problemi e la creazione di esperienze utente intuitive.',
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
            title: '',
            description: '',
          },
          id5: {
            title: '',
            description: '',
          },
          id4: {
            title: '',
            description: '',
          },
          id3: {
            title: '',
            description: '',
          },
          id2: {
            title: '',
            description: '',
          },
          id1: {
            title: '',
            description: '',
          },
        },
      },
      contact: {},
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
          'Το ταξίδι μου στον προγραμματισμό ξεκίνησε στα 14 μου, όταν προσπάθησα για πρώτη φορά να δημιουργήσω ένα βιντεοπαιχνίδι. Το να βλέπω τον κώδικά μου να ζωντανεύει, πυροδότησε μέσα μου το πάθος για τη δημιουργία διαδραστικών εμπειριών από το μηδέν. Αυτή η έλξη με οδήγησε να σπουδάσω Πληροφορική, όπου εξερεύνησα διάφορες τεχνολογίες και βελτίωσα τις δεξιότητές μου. Αν και η εξειδίκευσή μου είναι στην ανάπτυξη front-end, έχω επίσης ισχυρό υπόβαθρο σε τεχνολογίες back-end, κάτι που μου επιτρέπει να συνεισφέρω αποτελεσματικά σε όλο το φάσμα ανάπτυξης. Τώρα, ως προγραμματιστής λογισμικού, αντλώ έμπνευση από τη μετατροπή ιδεών σε πραγματικότητα μέσω καθαρού κώδικα και καινοτόμου σχεδιασμού.',
        text2: 'Η εμπειρία μου καλύπτει τις ακόλουθες τεχνολογίες:',
      },
      career: {
        title: 'Η Επαγγελματική Μου Πορεία',
        text: 'Εδώ είναι τα βασικά ορόσημα που διαμόρφωσαν την πορεία μου ως προγραμματιστής, από τα πρώτα μου βήματα στον προγραμματισμό μέχρι να γίνω επαγγελματίας του λογισμικού.',
        present: 'Παρόν',
        readMore: 'Διάβασε περισσότερα...',
        readLess: 'Διάβασε λιγότερα...',
        timeline: {
          id1: {
            title: 'Αποφοίτηση από το Λύκειο',
            description:
              'Ολοκλήρωσα τη δευτεροβάθμια εκπαίδευσή μου στη Θεσσαλονίκη, Ελλάδα, αποφοιτώντας με βαθμό 18,4/20 (άριστα), ένα αποτέλεσμα που αντικατοπτρίζει τη δέσμευση και τη σκληρή μου δουλειά κατά τη διάρκεια αυτών των χρόνων.',
          },
          id2: {
            title: 'Πανεπιστήμιο - Τμήμα Πληροφορικής',
            description:
              'Εισήχθη στο Τμήμα Πληροφορικής του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, ξεκινώντας ένα ταξίδι που εμβάθυνε την κατανόησή μου στην τεχνολογία και την επίλυση προβλημάτων.',
          },
          id3: {
            title: '3D Printing',
            description:
              'Εκτεταμένη εμπειρία στην τρισδιάστατη εκτύπωση, συμπεριλαμβανομένου του σχεδιασμού μοντέλων σε λογισμικό CAD (Autodesk Fusion 360), της τροποποίησης G-code για βελτιστοποιημένες εκτυπώσεις και της παραγωγής εξατομικευμένων 3D εκτυπωμένων αντικειμένων για πελάτες. Αυτή η πρακτική εργασία ενίσχυσε τις ικανότητές μου στην επίλυση προβλημάτων και εμβάθυνε την κατανόησή μου στην ψηφιακή κατασκευή και την αυτοματοποίηση.',
          },
          id4: {
            title: 'Εμπειρία Πρακτικής Άσκησης στην Value+ στο Μιλάνο, Ιταλία',
            description:
              'Ολοκλήρωσα μια πρακτική άσκηση τριών μηνών στην εταιρεία Value+ στο Μιλάνο, Ιταλία, όπου απέκτησα πρακτική εμπειρία στη React JavaScript και την ανάπτυξη ιστοσελίδων. Επιπλέον, βελτίωσα τα ιταλικά μου και συνεργάστηκα αποτελεσματικά με τους συναδέλφους μου, ενισχύοντας τόσο τις τεχνικές όσο και τις διαπροσωπικές μου δεξιότητες.\n(https://www.valueplus.it/)',
          },
          id5: {
            title: 'Αποφοίτηση από το Πανεπιστήμιο',
            description:
              'Αποφοίτησα από το Τμήμα Πληροφορικής του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, όπου εξερεύνησα πολλούς τομείς, από τον προγραμματισμό και την αρχιτεκτονική συστημάτων μέχρι τις βάσεις δεδομένων και τη μηχανική λογισμικού. Η ενασχόληση με μια ευρεία γκάμα έργων με βοήθησε να αναπτύξω ένα ευέλικτο σύνολο δεξιοτήτων, το οποίο συνεχίζω να εξελίσσω στην επαγγελματική μου πορεία.',
          },
          id6: {
            title: 'Στρατιωτική Θητεία',
            description:
              'Συμμορφούμενος με τη στρατιωτική θητεία που είναι υποχρεωτική στην Ελλάδα, έκανα ένα διάλειμμα έξι μηνών από την καριέρα μου για να υπηρετήσω στις ένοπλες δυνάμεις.',
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
            title: '',
            description: '',
          },
          id5: {
            title: '',
            description: '',
          },
          id4: {
            title: '',
            description: '',
          },
          id3: {
            title: '',
            description: '',
          },
          id2: {
            title: '',
            description: '',
          },
          id1: {
            title: '',
            description: '',
          },
        },
      },
      contact: {},
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
