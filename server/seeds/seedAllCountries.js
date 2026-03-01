import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Country from '../models/Country.js';

dotenv.config();

const countriesData = [
  // ── OFFICIAL SPANISH-SPEAKING COUNTRIES ──────────────────────────────

  {
    name: "Mexico",
    code: "MX",
    lat: 23.6345,
    lng: -102.5528,
    official: true,
    flag: "🇲🇽",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Mexico is home to one of the New Seven Wonders of the World: Chichen Itza.",
          "Mexico's official language is Spanish, but there are 68 national languages in total."
        ]
      },
      music: {
        title: "Traditional Music",
        content: "Mariachi, Ranchera, and Banda music are some of Mexico's most famous genres.",
        songTitle: "Cielito Lindo",
        artist: "Mariachi Vargas",
        url: "https://www.youtube.com/watch?v=4oxNnTgsP2A"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Frida Kahlo and Diego Rivera are two of Mexico's most iconic artists, whose work continues to influence art worldwide."
      },
      food: {
        title: "Food",
        content: "Tacos, enchiladas, and mole are among the most beloved dishes. Mexican cuisine was declared an Intangible Cultural Heritage by UNESCO in 2010."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "In Mexico, 'chido' means 'cool' or 'awesome.' 'No manches' is a mild expression of disbelief, like 'no way!'"
      },
      history: {
        title: "History",
        content: "Mexico gained independence from Spain on September 16, 1810, a date celebrated annually as Mexican Independence Day."
      }
    }
  },

  {
    name: "Colombia",
    code: "CO",
    lat: 4.5709,
    lng: -74.2973,
    official: true,
    flag: "🇨🇴",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Colombia is the only country in South America with coastlines on both the Pacific Ocean and the Caribbean Sea.",
          "Colombia produces over 90% of the world's emeralds."
        ]
      },
      music: {
        title: "Cumbia and Vallenato",
        content: "Cumbia is a popular music genre that originated in Colombia's Caribbean coast. Vallenato, featuring the accordion, is the national music.",
        songTitle: "La Bicicleta",
        artist: "Carlos Vives & Shakira",
        url: "https://www.youtube.com/watch?v=fr9lTjSdzA0"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Shakira and Maluma are two of Colombia's most globally recognized musicians. Gabriel García Márquez, Nobel laureate and author of 'One Hundred Years of Solitude,' is Colombia's literary icon."
      },
      food: {
        title: "Food",
        content: "Colombian food includes arepas (corn cakes), bandeja paisa (a hearty platter of beans, rice, meat, and egg), and ajiaco (a chicken and potato soup from Bogotá)."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "In Colombia, 'parcero/parcera' means 'friend' or 'buddy.' '¡Qué chimba!' means 'how awesome!' in Medellín slang."
      },
      history: {
        title: "History",
        content: "Colombia gained independence from Spain on July 20, 1810. The country was previously part of Gran Colombia, which also included Venezuela, Ecuador, and Panama."
      }
    }
  },

  {
    name: "Spain",
    code: "ES",
    lat: 40.4637,
    lng: -3.7492,
    official: true,
    flag: "🇪🇸",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Spain is home to La Tomatina, an annual festival where thousands of people throw tomatoes at each other.",
          "Spain is the second most visited country in the world and has the third largest number of UNESCO World Heritage Sites."
        ]
      },
      music: {
        title: "Flamenco and Pop",
        content: "Flamenco — a powerful art form of song, dance, and guitar — originated in Andalusia and is recognized by UNESCO as Intangible Cultural Heritage.",
        songTitle: "Bamboleo",
        artist: "Gipsy Kings",
        url: "https://www.youtube.com/watch?v=ks6hdxgf4wo"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Spanish director Pedro Almodóvar is one of the world's most celebrated filmmakers. The TV series 'La Casa de Papel' (Money Heist) became Netflix's most-watched non-English series."
      },
      food: {
        title: "Food",
        content: "Paella (saffron rice with seafood or meat), tapas (small shared dishes), and churros con chocolate are iconic Spanish foods. Spain's cuisine varies dramatically by region."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "In Spain, 'guay' means 'cool' or 'awesome.' 'Tío/tía' literally means uncle/aunt but is used like 'dude/girl' among friends."
      },
      history: {
        title: "History",
        content: "Spain became a unified kingdom in 1492 — the same year Christopher Columbus, funded by the Spanish Crown, reached the Americas, launching centuries of Spanish colonization."
      }
    }
  },

  {
    name: "Argentina",
    code: "AR",
    lat: -38.4161,
    lng: -63.6167,
    official: true,
    flag: "🇦🇷",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Argentina is the eighth largest country in the world by land area.",
          "Argentina is the birthplace of the tango — a dance and music genre now recognized by UNESCO."
        ]
      },
      music: {
        title: "Tango and Folk",
        content: "Argentina is famous for tango and folk music called 'folklore.' Carlos Gardel is considered the most important figure in tango history.",
        songTitle: "Por Una Cabeza",
        artist: "Carlos Gardel",
        url: "https://www.youtube.com/watch?v=IWZVXYJHe7Q"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Lionel Messi, widely considered the greatest footballer of all time, is Argentine. Diego Maradona's 'Hand of God' goal in the 1986 World Cup is one of sport's most debated moments."
      },
      food: {
        title: "Food",
        content: "Asado (Argentine barbecue) is a cultural institution — not just a meal but a social ritual. Empanadas and dulce de leche are also beloved staples."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "In Argentina, 'che' is a common term meaning 'hey' or 'dude.' Argentine Spanish is distinctive for using 'vos' instead of 'tú' for the informal 'you.'"
      },
      history: {
        title: "History",
        content: "Argentina declared independence from Spain on July 9, 1816. It later became one of the wealthiest countries in the world in the early 20th century before a series of economic crises."
      }
    }
  },

  {
    name: "Peru",
    code: "PE",
    lat: -9.19,
    lng: -75.0152,
    official: true,
    flag: "🇵🇪",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Machu Picchu, the 15th-century Inca citadel perched in the Andes, is one of the New Seven Wonders of the World.",
          "Peru is one of the world's top producers of gold, silver, and copper, and is the origin of the potato — now a global staple."
        ]
      },
      music: {
        title: "Andean Folk and Criolla",
        content: "Música criolla blends Spanish, African, and Andean influences. The cajón — a box drum invented in Peru — is now used worldwide in flamenco.",
        songTitle: "La Flor de la Canela",
        artist: "Chabuca Granda",
        url: "https://www.youtube.com/watch?v=w5b6Gj8QflA"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Mario Vargas Llosa is Peru's Nobel Prize-winning author. Peruvian cuisine has become globally celebrated — Lima is home to several of the world's top-ranked restaurants."
      },
      food: {
        title: "Food",
        content: "Ceviche — raw fish marinated in lime juice with onions and chili — is Peru's national dish. Lomo saltado (stir-fried beef with vegetables) and causa (layered potato dish) are also iconic."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Causa' means 'friend' or 'buddy' in Peruvian slang. 'Al toque' means 'right away' or 'immediately.' '¡Qué bacán!' means 'how cool!'"
      },
      history: {
        title: "History",
        content: "Peru was the heart of the Inca Empire before Spanish conquest in 1532. It declared independence from Spain on July 28, 1821, led by José de San Martín."
      }
    }
  },

  {
    name: "Venezuela",
    code: "VE",
    lat: 6.4238,
    lng: -66.5897,
    official: true,
    flag: "🇻🇪",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Venezuela is home to Angel Falls — at 979 meters, it is the world's highest uninterrupted waterfall.",
          "Venezuela has won more Miss Universe and Miss World titles than any other country."
        ]
      },
      music: {
        title: "Joropo and Salsa",
        content: "Joropo is Venezuela's national music and dance, performed with harp, cuatro (small guitar), and maracas on the vast plains called Los Llanos.",
        songTitle: "Alma Llanera",
        artist: "Pedro Elías Gutiérrez",
        url: "https://www.youtube.com/watch?v=4t6P8XQKZJE"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Venezuelan telenovelas were among the most exported TV content in Latin America throughout the 1980s–2000s. Simón Bolívar, the liberator of six South American nations, was born in Caracas."
      },
      food: {
        title: "Food",
        content: "Arepas — round cornmeal patties split and stuffed with meat, cheese, or beans — are Venezuela's most iconic food, eaten at any time of day. Pabellón criollo (rice, black beans, beef, and plantains) is the national dish."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Chamo/chama' means 'dude/girl' in Venezuelan slang. 'Está arrecho' means something is very difficult or intense. '¡Coño!' is the most versatile exclamation — surprise, frustration, or joy."
      },
      history: {
        title: "History",
        content: "Venezuela declared independence from Spain on July 5, 1811 — the first Spanish colony in Latin America to do so. Simón Bolívar went on to liberate Colombia, Ecuador, Peru, and Bolivia."
      }
    }
  },

  {
    name: "Chile",
    code: "CL",
    lat: -35.6751,
    lng: -71.543,
    official: true,
    flag: "🇨🇱",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Chile is the longest country in the world from north to south, stretching over 4,300 km — yet averages only 177 km wide.",
          "Chile produces about 27% of the world's copper and is home to the driest non-polar desert on Earth, the Atacama."
        ]
      },
      music: {
        title: "Cueca and Nueva Canción",
        content: "Cueca is Chile's national folk dance and music. The Nueva Canción movement of the 1960s–70s, led by Víctor Jara and Violeta Parra, used music to fight for social justice.",
        songTitle: "El Baile de los Que Sobran",
        artist: "Los Prisioneros",
        url: "https://www.youtube.com/watch?v=5DEhG2HNJC0"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Pablo Neruda, one of the world's most celebrated poets and a Nobel laureate, was Chilean. Isabel Allende is Chile's most internationally read novelist."
      },
      food: {
        title: "Food",
        content: "Empanadas de pino — beef, onion, raisin, olive, and egg pastries — are Chile's most beloved snack. Cazuela (hearty meat and vegetable soup) and seafood from the Pacific coast are staples."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Po' is a uniquely Chilean filler word added to the end of sentences — from 'pues.' 'Cachai' means 'you understand?' and is used constantly. 'Al tiro' means 'right away.'"
      },
      history: {
        title: "History",
        content: "Chile declared independence from Spain on September 18, 1810 (celebrated as Fiestas Patrias). It achieved full independence in 1818 under Bernardo O'Higgins and José de San Martín."
      }
    }
  },

  {
    name: "Ecuador",
    code: "EC",
    lat: -1.8312,
    lng: -78.1834,
    official: true,
    flag: "🇪🇨",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Ecuador is the only country in the world named after a geographical feature — the equator runs through it.",
          "The Galápagos Islands, part of Ecuador, inspired Charles Darwin's theory of evolution after his 1835 visit."
        ]
      },
      music: {
        title: "Pasillo and Sanjuanito",
        content: "Pasillo is Ecuador's national music genre — a romantic, melancholic ballad style with roots in European waltz. Sanjuanito is a lively indigenous festival music from the Andes.",
        songTitle: "Vasija de Barro",
        artist: "Los Curiquingues",
        url: "https://www.youtube.com/watch?v=AcWjGlLKjbw"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Ecuador is famous for producing the 'Panama hat' — which is actually Ecuadorian, made in towns like Montecristi. The hats got their name when workers building the Panama Canal wore them."
      },
      food: {
        title: "Food",
        content: "Ceviche de camarón (shrimp ceviche in tomato sauce) and llapingachos (crispy potato cakes with cheese) are staples. Seco de pollo (chicken stew with beer and cilantro) is a Sunday favorite."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Chévere' means 'cool' or 'great' — widely used across Ecuador and much of Latin America. 'Ñaño/ñaña' means 'brother/sister' or close friend. 'Ay, no jodas' means 'oh, stop it' or 'are you serious?'"
      },
      history: {
        title: "History",
        content: "Ecuador gained independence from Spain on May 24, 1822, after the Battle of Pichincha led by Antonio José de Sucre. It was briefly part of Gran Colombia before becoming an independent republic in 1830."
      }
    }
  },

  {
    name: "Guatemala",
    code: "GT",
    lat: 15.7835,
    lng: -90.2308,
    official: true,
    flag: "🇬🇹",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Guatemala is home to more than 30 volcanoes, three of which are still active — including Santiaguito and Pacaya.",
          "The ancient Maya city of Tikal, hidden in jungle for centuries, is one of the largest and most powerful kingdoms of the ancient Maya."
        ]
      },
      music: {
        title: "Marimba",
        content: "The marimba is Guatemala's national instrument and a symbol of national identity. Guatemalan marimba music was declared UNESCO Intangible Cultural Heritage in 2010.",
        songTitle: "Luna de Xelajú",
        artist: "Paco Pérez",
        url: "https://www.youtube.com/watch?v=YVjT_dMpbCM"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Nobel Peace Prize laureate Rigoberta Menchú, a Maya K'iche' activist, is one of Guatemala's most internationally recognized figures. Traditional Mayan weaving ('tejido') is a living art form practiced across the highlands."
      },
      food: {
        title: "Food",
        content: "Pepián — a rich stew made with pumpkin seeds, sesame, chilies, and meat — is Guatemala's national dish. Kak'ik (turkey soup) and tamales wrapped in banana leaves are also beloved traditional foods."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Chapín/chapina' is what Guatemalans call themselves — being called 'bien chapín' is a compliment of authentic Guatemalan-ness. 'Shumo' means 'lower class' or 'rude,' and 'canche' refers to a blonde or fair-skinned person."
      },
      history: {
        title: "History",
        content: "Guatemala declared independence from Spain on September 15, 1821 — a date shared with most of Central America. The country was home to one of the greatest Maya civilizations, which flourished from 2000 BCE to 900 CE."
      }
    }
  },

  {
    name: "Cuba",
    code: "CU",
    lat: 21.5218,
    lng: -77.7812,
    official: true,
    flag: "🇨🇺",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Cuba is the largest island in the Caribbean, roughly the size of Pennsylvania.",
          "Havana's streets are lined with classic American cars from the 1950s — a living museum created by the U.S. trade embargo that began in 1962."
        ]
      },
      music: {
        title: "Son Cubano and Salsa",
        content: "Son Cubano — a blend of Spanish guitar melodies and African rhythms — is the root of salsa and one of the most influential music forms in the world.",
        songTitle: "Chan Chan",
        artist: "Buena Vista Social Club",
        url: "https://www.youtube.com/watch?v=LnJEwNKTMw0"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Ernest Hemingway lived in Cuba for over 20 years and wrote 'The Old Man and the Sea' there. Cuban ballet, led by prima ballerina assoluta Alicia Alonso, is world-renowned."
      },
      food: {
        title: "Food",
        content: "Ropa vieja — shredded beef slow-cooked in tomato sauce with peppers and onions — is Cuba's national dish. Congri (black beans and rice cooked together) and tostones (fried plantains) complete the classic plate."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Asere' is Cuban slang for 'friend' or 'dude.' 'La cosa está en candela' means 'things are on fire' — i.e., the situation is intense. '¡Qué bolá!' is a casual greeting like 'what's up!'"
      },
      history: {
        title: "History",
        content: "Cuba was the last major Spanish colony in the Americas, gaining independence in 1898 after the Spanish-American War. The 1959 Cuban Revolution led by Fidel Castro transformed the country into a socialist state."
      }
    }
  },

  {
    name: "Bolivia",
    code: "BO",
    lat: -16.2902,
    lng: -63.5887,
    official: true,
    flag: "🇧🇴",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Bolivia has two capital cities — Sucre (constitutional) and La Paz (seat of government), which is the world's highest capital city at 3,640 meters.",
          "Bolivia's Salar de Uyuni is the world's largest salt flat — so reflective after rain that it mirrors the sky perfectly."
        ]
      },
      music: {
        title: "Morenada and Andean Folk",
        content: "Morenada and Tinkus are traditional Bolivian music and dance forms performed at the spectacular Carnaval de Oruro. The charango (small Andean lute) is central to Bolivian folk music.",
        songTitle: "Llorando se fue",
        artist: "Los Kjarkas",
        url: "https://www.youtube.com/watch?v=x5K7aEhQAcI"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Bolivia's Carnaval de Oruro, declared UNESCO Intangible Cultural Heritage, is one of South America's most spectacular festivals — featuring 48 dance groups and 28,000 performers in elaborate costumes."
      },
      food: {
        title: "Food",
        content: "Salteñas — baked empanadas filled with a juicy stew of meat, potatoes, peas, olives, and egg — are Bolivia's most beloved snack. Pique macho (beef, sausage, peppers, and egg over fries) is a popular street dish."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'No hay drama' means 'no problem' — Bolivians are known for their calm demeanor. 'Causa' means 'issue' or 'thing.' The word 'wawa' (from Quechua/Aymara) means 'baby' and is used across Bolivia."
      },
      history: {
        title: "History",
        content: "Bolivia gained independence from Spain on August 6, 1825, and was named after the liberator Simón Bolívar. The country was the heart of the Potosí silver mining empire, which funded the Spanish Crown for centuries."
      }
    }
  },

  {
    name: "Dominican Republic",
    code: "DO",
    lat: 18.7357,
    lng: -70.1627,
    official: true,
    flag: "🇩🇴",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "The Dominican Republic shares the island of Hispaniola with Haiti — the only island in the Caribbean shared by two countries.",
          "Santo Domingo, founded in 1498, is the oldest continuously inhabited European city in the Americas."
        ]
      },
      music: {
        title: "Merengue and Bachata",
        content: "Merengue and Bachata are the Dominican Republic's globally beloved genres — both were declared UNESCO Intangible Cultural Heritage in 2016.",
        songTitle: "Obsesión",
        artist: "Aventura",
        url: "https://www.youtube.com/watch?v=l9R-DER6w7E"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Novelist Junot Díaz, author of 'The Brief Wondrous Life of Oscar Wao' (Pulitzer Prize winner), is one of the Dominican Republic's most celebrated literary figures. Baseball is the country's national passion."
      },
      food: {
        title: "Food",
        content: "La Bandera Dominicana ('The Dominican Flag') — white rice, red beans, and stewed meat — is the quintessential daily meal. Mangú (mashed plantains with pickled onions) is the beloved breakfast staple."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Vaina' is the most versatile word in Dominican Spanish — it can mean 'thing,' 'situation,' 'stuff,' or almost anything. 'Quisqueya' is the indigenous Taíno name for the island, still used with pride."
      },
      history: {
        title: "History",
        content: "The Dominican Republic declared independence from Haiti on February 27, 1844 — making it the only country in the Americas to gain independence from another American nation rather than a European power."
      }
    }
  },

  {
    name: "Honduras",
    code: "HN",
    lat: 15.2,
    lng: -86.2419,
    official: true,
    flag: "🇭🇳",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Honduras is home to the ancient Maya ruins of Copán — famous for its extraordinarily detailed hieroglyphic stairway, the longest Maya text ever discovered.",
          "The Bay Islands of Honduras contain part of the Mesoamerican Barrier Reef, the second largest coral reef system in the world."
        ]
      },
      music: {
        title: "Punta and Garifuna Music",
        content: "Punta — rooted in the music of the Garifuna people (descendants of African and Amerindian peoples) — is Honduras's most vibrant traditional music form.",
        songTitle: "Sopa de Caracol",
        artist: "Banda Blanca",
        url: "https://www.youtube.com/watch?v=j1yl5zZ0H38"
      },
      popCulture: {
        title: "Pop Culture",
        content: "The Garifuna people of Honduras were recognized by UNESCO for their unique language, dance, and music in 2001. Football (soccer) is Honduras's national passion, and the country's team ('La H') is beloved."
      },
      food: {
        title: "Food",
        content: "Baleadas — thick flour tortillas filled with refried beans, crema, and cheese — are Honduras's most beloved street food and daily staple. Sopa de caracol (conch soup with coconut milk) is an iconic coastal dish."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Catracho/catracha' is what Hondurans proudly call themselves — using this term with pride is a sign of national identity. 'Chamba' means 'work' or 'job.' '¡Maje!' is like saying 'dude!'"
      },
      history: {
        title: "History",
        content: "Honduras declared independence from Spain on September 15, 1821. The banana industry dominated the 20th century — controlled by U.S. companies — giving rise to the term 'banana republic.'"
      }
    }
  },

  {
    name: "Paraguay",
    code: "PY",
    lat: -23.4425,
    lng: -58.4438,
    official: true,
    flag: "🇵🇾",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Paraguay is officially bilingual — Spanish and Guaraní are both national languages, making it one of few countries where an indigenous language is spoken by the majority.",
          "Paraguay is one of only two landlocked countries in South America (Bolivia is the other)."
        ]
      },
      music: {
        title: "Paraguayan Harp",
        content: "The Paraguayan harp is the country's national instrument and a symbol of national identity. Guarania — a slow, melancholic song form — was invented by Paraguayan composer José Asunción Flores.",
        songTitle: "Recuerdos de Ypacaraí",
        artist: "Dyango",
        url: "https://www.youtube.com/watch?v=3g_7Y5_2j-o"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Augusto Roa Bastos, author of 'I, the Supreme' — a novel about a Paraguayan dictator — is Paraguay's most celebrated literary figure. Traditional ñandutí lace, created in Itauguá, is a unique Paraguayan art form."
      },
      food: {
        title: "Food",
        content: "Sopa paraguaya — despite its name, it's a hearty savory cornbread with cheese and onion, not a soup. Chipa (chewy cheese bread made with cassava flour) is the beloved snack sold everywhere."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Mba'éichapa' means 'How are you?' in Guaraní — widely used even by non-Guaraní speakers. 'Che' (like Che Guevara's nickname) means 'my' or 'hey' in Guaraní. '¡Bárbaro!' means 'great!' or 'awesome!'"
      },
      history: {
        title: "History",
        content: "Paraguay gained independence from Spain on May 14–15, 1811. It suffered one of the most devastating wars in Latin American history — the War of the Triple Alliance (1864–70) — which killed up to 90% of its male population."
      }
    }
  },

  {
    name: "El Salvador",
    code: "SV",
    lat: 13.7942,
    lng: -88.8965,
    official: true,
    flag: "🇸🇻",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "El Salvador is the smallest and most densely populated country in Central America.",
          "In 2021, El Salvador became the first country in the world to adopt Bitcoin as legal tender alongside the U.S. dollar."
        ]
      },
      music: {
        title: "Cumbia and Folk",
        content: "Cumbia and folk music have deep roots in El Salvador. The 'xuc' is a traditional Salvadoran music and dance form. The country also has a vibrant urban music scene.",
        songTitle: "La Llorona Loca",
        artist: "La Marimba de los Hermanos Flores",
        url: "https://www.youtube.com/watch?v=wD0jV2eaSHk"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Óscar Romero, the Archbishop of El Salvador assassinated in 1980 while celebrating Mass, was canonized as a saint in 2018 and is a beloved symbol of justice throughout Latin America. Salvadoran murals are internationally recognized."
      },
      food: {
        title: "Food",
        content: "Pupusas — thick handmade corn tortillas stuffed with cheese, beans, pork, or loroco (a native flower) — are El Salvador's national dish and a UNESCO Intangible Heritage. They're served with curtido (pickled cabbage) and salsa."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Cipote/cipota' means 'kid' or 'young person' in Salvadoran slang. 'Bicho' can mean a young child. 'Cabal' means 'exactly right' or 'spot on.' 'Guanaco/guanaca' is what Salvadorans proudly call themselves."
      },
      history: {
        title: "History",
        content: "El Salvador declared independence from Spain on September 15, 1821. A brutal civil war from 1979–1992 claimed 75,000 lives. The 1992 Peace Accords are considered a landmark in post-conflict reconciliation."
      }
    }
  },

  {
    name: "Nicaragua",
    code: "NI",
    lat: 12.8654,
    lng: -85.2072,
    official: true,
    flag: "🇳🇮",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Nicaragua is the largest country in Central America and is sometimes called the 'Land of Lakes and Volcanoes.'",
          "Lake Nicaragua is one of the few freshwater lakes in the world that contains oceanic fish species, including bull sharks and swordfish."
        ]
      },
      music: {
        title: "Son Nica and Marimba",
        content: "Son nica is Nicaragua's traditional folk music, featuring marimba, guitar, and maracas. Palo de Mayo is a vibrant Afro-Caribbean music style from the Caribbean coast.",
        songTitle: "Nicaragua Nicaragüita",
        artist: "Carlos Mejía Godoy",
        url: "https://www.youtube.com/watch?v=iGNJVJFOjhs"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Rubén Darío, born in Metapa (now called Ciudad Darío), is considered the father of Modernismo — one of the most important literary movements in the Spanish-speaking world. His influence on Spanish-language poetry was revolutionary."
      },
      food: {
        title: "Food",
        content: "Gallo pinto — rice and red beans cooked together — is Nicaragua's beloved national breakfast, eaten daily. Nacatamal (large tamale with pork, rice, and vegetables wrapped in banana leaves) is the traditional Sunday dish."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Chavalos' means 'kids' or 'young people.' 'Nica' is the affectionate short form of Nicaraguan. 'A huevo' means 'of course' or 'absolutely.' '¡Macanudo!' means 'great' or 'excellent.'"
      },
      history: {
        title: "History",
        content: "Nicaragua declared independence from Spain on September 15, 1821. The Sandinista Revolution of 1979 overthrew dictator Anastasio Somoza, inspiring political movements across Latin America."
      }
    }
  },

  {
    name: "Costa Rica",
    code: "CR",
    lat: 9.7489,
    lng: -83.7534,
    official: true,
    flag: "🇨🇷",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Costa Rica abolished its military in 1948 and is one of only a handful of countries in the world without a standing army.",
          "Costa Rica generates over 99% of its electricity from renewable sources including hydro, wind, geothermal, and solar."
        ]
      },
      music: {
        title: "Punto Guanacasteco",
        content: "Punto guanacasteco is Costa Rica's national dance and music form — a lively courtship dance from the Guanacaste province. Salsa and cumbia are popular in the cities.",
        songTitle: "El Punto Guanacasteco",
        artist: "Traditional",
        url: "https://www.youtube.com/watch?v=I9vKBWnf_UM"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Costa Rica's 'Pura Vida' philosophy is internationally recognized — it means 'pure life' and represents a genuinely laid-back, grateful approach to living. It's used as a greeting, farewell, and expression of contentment."
      },
      food: {
        title: "Food",
        content: "Gallo pinto (rice and black beans) is the national dish — eaten for breakfast with eggs, sour cream, and Lizano sauce (a mild local condiment). Casado ('married plate') of rice, beans, salad, and protein is the typical lunch."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Pura vida' is uniquely Costa Rican — it can mean hello, goodbye, thank you, you're welcome, or great. 'Tico/tica' is what Costa Ricans call themselves. 'Tuanis' means 'cool' or 'fine.'"
      },
      history: {
        title: "History",
        content: "Costa Rica declared independence from Spain on September 15, 1821. After a brief civil war in 1948, it abolished its military and has been one of Latin America's most stable democracies ever since."
      }
    }
  },

  {
    name: "Panama",
    code: "PA",
    lat: 8.538,
    lng: -80.7821,
    official: true,
    flag: "🇵🇦",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "The Panama Canal — connecting the Atlantic and Pacific Oceans — is one of the greatest engineering achievements in history, cutting the sea route from New York to San Francisco by 12,000 km.",
          "Panama City is the only capital city in the world with a rainforest within its city limits."
        ]
      },
      music: {
        title: "Reggaeton and Tamborito",
        content: "Panama is considered one of the birthplaces of reggaeton. Tamborito — an Afro-Panamanian drum dance — is the national folk music.",
        songTitle: "El General's Muévelo",
        artist: "El General",
        url: "https://www.youtube.com/watch?v=TDgKJi5l2LA"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Panama City's Casco Viejo (historic quarter) is a UNESCO World Heritage Site and one of Latin America's most vibrant neighborhoods. Panama is also famous for the colorful hand-stitched molas made by the Guna indigenous people."
      },
      food: {
        title: "Food",
        content: "Sancocho — a hearty chicken and vegetable soup with ñame (yam) and culantro — is Panama's national dish. Carimanolas (yuca fritters stuffed with meat) and patacones (fried green plantains) are beloved staples."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Zafado/zafada' means someone is 'out of it' or acting crazy. '¡Fuácata!' is an exclamation for something going wrong suddenly. 'Chuleta' is an expression of surprise — like 'wow!' or 'oh man!'"
      },
      history: {
        title: "History",
        content: "Panama declared independence from Colombia (not Spain directly) on November 3, 1903, with U.S. support in exchange for rights to build the Panama Canal. The canal was controlled by the U.S. until December 31, 1999."
      }
    }
  },

  {
    name: "Uruguay",
    code: "UY",
    lat: -32.5228,
    lng: -55.7658,
    official: true,
    flag: "🇺🇾",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Uruguay was the first country in Latin America to legalize same-sex marriage (2013), recreational cannabis (2013), and abortion (2012).",
          "Uruguay has more cattle than people — roughly 4 cows per person — and beef consumption per capita is among the highest in the world."
        ]
      },
      music: {
        title: "Candombe and Tango",
        content: "Candombe — an African-derived drumming tradition brought by enslaved Africans — is Uruguay's most distinctive music. Together with Argentina, Uruguay shares the tango tradition.",
        songTitle: "La Cumparsita",
        artist: "Gerardo Matos Rodríguez",
        url: "https://www.youtube.com/watch?v=q-5ux1D_xZY"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Eduardo Galeano, author of 'Open Veins of Latin America,' is Uruguay's most internationally celebrated writer. Former president José Mujica — who donated 90% of his salary to charity and drove a 1987 Volkswagen Beetle — became a global symbol of humble leadership."
      },
      food: {
        title: "Food",
        content: "Chivito — a massive steak sandwich with ham, mozzarella, egg, tomato, lettuce, and mayo — is Uruguay's national dish. Asado (barbecue) is the great social institution, and dulce de leche appears in everything."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Gurí/gurisa' means 'boy/girl' or a young person (from Guaraní). 'Bárbaro' means 'great' or 'excellent.' '¿Ta?' is a shortened form of '¿Está bien?' used constantly as a casual check-in."
      },
      history: {
        title: "History",
        content: "Uruguay declared independence from Brazil on August 25, 1825, after years of being contested between Argentina and Brazil. It was recognized as an independent nation in 1828 — a compromise to serve as a buffer state."
      }
    }
  },

  {
    name: "Equatorial Guinea",
    code: "GQ",
    lat: 3.75,
    lng: 8.7833,
    official: true,
    flag: "🇬🇶",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Equatorial Guinea is the only country in Africa where Spanish is an official language.",
          "Despite its small size, Equatorial Guinea is sub-Saharan Africa's third largest oil producer."
        ]
      },
      music: {
        title: "Traditional Rhythms & Modern Fusion",
        content: "Equatorial Guinea's music blends Fang, Bubi, and other ethnic traditions with modern African pop. The country has a growing urban music scene.",
        songTitle: "Sin Mi",
        artist: "Anfibio ft Diddy",
        url: "https://www.youtube.com/watch?v=SSJXHOVnHB8"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Juan Pablo Ebang Esono is one of the country's top filmmakers. In 2010, he directed 'Teresa,' the first medium-length film produced in Equatorial Guinea."
      },
      food: {
        title: "Food",
        content: "Dishes like 'sopa de pescado' (fish soup) and cassava with peanut sauce reflect the coastal and forest ingredients of Equatorial Guinea. Smoked fish and plantains are everyday staples."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "The Fang word 'mbo' means 'friend' or 'companion.' Equatoguinean Spanish has unique vocabulary influenced by Fang, Bubi, and Portuguese (from neighboring São Tomé)."
      },
      history: {
        title: "History",
        content: "Equatorial Guinea gained independence from Spain in 1968 — the only sub-Saharan African country to have been a Spanish colony. It consists of a mainland region (Río Muni) and the island of Bioko."
      }
    }
  },

  {
    name: "Puerto Rico",
    code: "PR",
    lat: 18.2208,
    lng: -66.5901,
    official: true,
    flag: "🇵🇷",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Puerto Rico is a U.S. territory — its residents are U.S. citizens but cannot vote in presidential elections unless they move to a state.",
          "Puerto Rico's bioluminescent bays (Mosquito Bay, Laguna Grande, La Parguera) are among the brightest in the world."
        ]
      },
      music: {
        title: "Reggaeton and Salsa",
        content: "Reggaeton was born in Puerto Rico in the early 1990s, blending reggae, hip-hop, and Latin rhythms. Puerto Rico is also the spiritual home of salsa.",
        songTitle: "Gasolina",
        artist: "Daddy Yankee",
        url: "https://www.youtube.com/watch?v=CC4lm4CQJJE"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Lin-Manuel Miranda, creator of Hamilton and In the Heights, is Puerto Rican. Bad Bunny — one of the world's most streamed artists — is Puerto Rican. Roberto Clemente is a legendary figure in baseball and humanitarianism."
      },
      food: {
        title: "Food",
        content: "Mofongo — mashed fried plantains with garlic, olive oil, and pork cracklings — is Puerto Rico's signature dish. Pernil (slow-roasted pork shoulder), arroz con gandules (rice with pigeon peas), and pasteles are essential for celebrations."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Boricua' is what Puerto Ricans proudly call themselves (from 'Borikén,' the indigenous Taíno name). 'Wepa!' is an exclamation of joy and excitement. 'Acho/bicho' are casual address terms like 'dude.'"
      },
      history: {
        title: "History",
        content: "Puerto Rico became a U.S. territory in 1898 after the Spanish-American War. Puerto Ricans were granted U.S. citizenship in 1917. The island remains in a unique political status — neither fully independent nor a U.S. state."
      }
    }
  },

  // ── SPANISH INFLUENCE COUNTRIES ──────────────────────────────────────

  {
    name: "United States",
    code: "US",
    lat: 38.8951,
    lng: -77.0364,
    official: false,
    flag: "🇺🇸",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "The United States has the second largest Spanish-speaking population in the world — over 41 million native speakers — more than Spain itself.",
          "Over 10% of U.S. place names are derived from Spanish, including Los Angeles, San Francisco, Nevada, Colorado, and Florida."
        ]
      },
      music: {
        title: "Latin Music in America",
        content: "Latin music has profoundly shaped American pop, jazz, and hip-hop. From salsa in New York to Tejano in Texas, Spanish-language music is woven into the American soundscape.",
        songTitle: "Conga",
        artist: "Gloria Estefan & Miami Sound Machine",
        url: "https://www.youtube.com/watch?v=LJEq4bfAUuY"
      },
      popCulture: {
        title: "Pop Culture",
        content: "The Latino community has produced American cultural icons including Jennifer Lopez, Marc Anthony, Selena Quintanilla, and Bad Bunny. Spanish is the second most spoken language in the U.S. and growing."
      },
      food: {
        title: "Food",
        content: "Tex-Mex cuisine — a fusion of Texan and Mexican cooking — gave the world nachos, fajitas, and chili con carne. Cities like Los Angeles and San Antonio have vibrant Mexican food scenes that rival those in Mexico."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Spanglish' — a blend of Spanish and English — is widely spoken in Latino communities. Words like 'lonche' (lunch), 'troca' (truck), and 'hungría' (hungry) show how Spanish and English merge in everyday speech."
      },
      history: {
        title: "History",
        content: "The entire U.S. Southwest was part of Mexico until the 1848 Treaty of Guadalupe Hidalgo. Spanish missionaries established California's cities in the 1700s. Spanish colonial history is foundational to much of American geography and culture."
      }
    }
  },

  {
    name: "Philippines",
    code: "PH",
    lat: 12.8797,
    lng: 121.774,
    official: false,
    flag: "🇵🇭",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "The Philippines was a Spanish colony for 333 years (1565–1898) — the longest colonial period of any Asian country.",
          "Over 4,000 Filipino words have Spanish origins, including everyday words like 'kusina' (kitchen), 'mesa' (table), and 'ventana' (window)."
        ]
      },
      music: {
        title: "Kundiman and OPM",
        content: "Kundiman is a traditional Filipino love song genre with Spanish colonial influence — slow, romantic, and heartfelt. OPM (Original Pilipino Music) is a vibrant modern industry blending many influences.",
        songTitle: "Bayan Ko",
        artist: "Freddie Aguilar",
        url: "https://www.youtube.com/watch?v=Gs5OTvIBnCY"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Filipino culture is a unique fusion of Malay, Chinese, Spanish, and American influences. Spanish surnames are universal in the Philippines — a legacy of a 1849 decree requiring Filipinos to adopt Spanish family names."
      },
      food: {
        title: "Food",
        content: "Adobo — meat marinated and slow-cooked in vinegar, soy sauce, garlic, and bay leaves — is the unofficial national dish with Spanish colonial roots. Lechon (whole roasted pig) is central to celebrations."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Mano po' is a uniquely Filipino greeting where younger people take an elder's hand to their forehead — reflecting Spanish Catholic influence. Spanish words like 'kama' (bed) and 'plato' (plate) are standard Filipino."
      },
      history: {
        title: "History",
        content: "The Philippines were colonized by Spain in 1565 and named after King Philip II of Spain. After the Spanish-American War in 1898, the Philippines were sold to the U.S. for $20 million. Independence was achieved in 1946."
      }
    }
  },

  {
    name: "Belize",
    code: "BZ",
    lat: 17.1899,
    lng: -88.4976,
    official: false,
    flag: "🇧🇿",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Belize is the only Central American country where English is the official language — yet Spanish is widely spoken by about half the population.",
          "The Belize Barrier Reef Reserve System is the second largest coral reef in the world and a UNESCO World Heritage Site."
        ]
      },
      music: {
        title: "Punta Rock and Garifuna",
        content: "Punta rock — a fusion of traditional Garifuna music with electric guitars and modern production — originated in Belize and spread across the Caribbean coast.",
        songTitle: "Watina",
        artist: "Andy Palacio & the Garifuna Collective",
        url: "https://www.youtube.com/watch?v=MHXG0-_LNk8"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Belize's Garifuna people — descendants of African and Amerindian peoples — were recognized by UNESCO in 2001 for their unique language, dance, and music traditions. Belize is also the setting for parts of Indiana Jones and Survivor."
      },
      food: {
        title: "Food",
        content: "Rice and beans cooked in coconut milk — served with stewed chicken, plantains, and potato salad — is the quintessential Belizean meal. Fry jacks (fried dough) are the beloved breakfast staple."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "Belizean Kriol blends English with Spanish, African, and Maya words. 'Da weh?' means 'Where is it?' 'Weh yuh deh?' means 'What's up?' Spanish phrases like '¿Y tú?' are common in daily speech."
      },
      history: {
        title: "History",
        content: "Belize was a British colony (British Honduras) but shares deep Spanish colonial influence from neighboring Guatemala and Mexico. It gained independence in 1981, one of the last Caribbean nations to do so."
      }
    }
  },

  {
    name: "Andorra",
    code: "AD",
    lat: 42.5063,
    lng: 1.5218,
    official: false,
    flag: "🇦🇩",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "Andorra is one of the smallest countries in Europe — roughly the size of New Orleans — nestled between France and Spain in the Pyrenees mountains.",
          "Andorra has no army, no airport, no railway, and no university, yet has one of the highest life expectancies in the world."
        ]
      },
      music: {
        title: "Catalan Folk Music",
        content: "Catalan folk music is central to Andorran culture, with the sardana (circle dance) shared with neighboring Catalonia. Spanish flamenco and French chanson also have cultural presence.",
        songTitle: "El Cant dels Ocells",
        artist: "Pau Casals",
        url: "https://www.youtube.com/watch?v=Gd7u9-MjqXE"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Andorra is famous for duty-free shopping — residents of France and Spain cross the border for electronics, tobacco, and perfume. Skiing at Grandvalira (one of Europe's largest ski areas) is a major draw."
      },
      food: {
        title: "Food",
        content: "Escudella — a hearty winter stew with meat, vegetables, and pasta — is Andorra's most traditional dish, shared with Catalan cuisine. Trinxat (cabbage and potato cake) and locally cured meats are regional staples."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "Catalan is the official language — 'Bon dia' (good morning) and 'Gràcies' (thank you) are daily phrases. Spanish is universally understood and widely spoken as a second language throughout the country."
      },
      history: {
        title: "History",
        content: "Andorra has been a co-principality since 1278, jointly governed by the Bishop of Urgell (Spain) and the French head of state — making it one of Europe's oldest countries and the world's only co-principality."
      }
    }
  },

  {
    name: "Gibraltar",
    code: "GI",
    lat: 36.1408,
    lng: -5.3536,
    official: false,
    flag: "🇬🇮",
    subtopics: {
      funFacts: {
        title: "Fun Facts",
        list: [
          "The Rock of Gibraltar is home to Europe's only wild monkey population — the famous Barbary macaques, locally called 'Barbary apes.'",
          "Gibraltar is a British Overseas Territory at the southern tip of the Iberian Peninsula, separated from Morocco by only 14 km of water."
        ]
      },
      music: {
        title: "Llanito Music",
        content: "Gibraltar's music blends British, Spanish, Moorish, and Genoese influences. Local Llanito music incorporates Spanish flamenco rhythms with English lyrics — a sonic reflection of the territory's hybrid identity.",
        songTitle: "Aguinaldo Gibraltareño",
        artist: "Traditional Gibraltar",
        url: "https://www.youtube.com/watch?v=kXKIoX_csFY"
      },
      popCulture: {
        title: "Pop Culture",
        content: "Gibraltar's unique 'Llanito' culture blends Genoese, British, Maltese, Portuguese, and Spanish influences. The territory is home to a unique dialect — also called Llanito — that seamlessly switches between English and Spanish within single sentences."
      },
      food: {
        title: "Food",
        content: "Calentita — a baked chickpea flour dish similar to Italian farinata — is Gibraltar's most distinctive local food. Fish and chips (British), tortilla española, and pasta reflect the territory's multicultural palette."
      },
      slang: {
        title: "Popular Slang & Sayings",
        content: "'Llanito' refers both to the people of Gibraltar and their unique Spanglish dialect. Sentences naturally switch languages mid-phrase: 'I'm going al supermercado' or '¿Qué pasa, mate?' Spanish greetings and English slang coexist naturally."
      },
      history: {
        title: "History",
        content: "Gibraltar has been a British territory since the 1713 Treaty of Utrecht but remains claimed by Spain. In a 2002 referendum, 98.5% of Gibraltarians voted to remain British rather than accept Spanish sovereignty."
      }
    }
  }
];

async function seed() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected.");

  try {
    await Country.deleteMany({});
    console.log("Cleared existing countries.");

    await Country.create(countriesData);
    console.log(`Seeded ${countriesData.length} countries successfully!`);
  } catch (err) {
    console.error("Error seeding countries:", err);
  } finally {
    mongoose.connection.close();
    console.log("Connection closed.");
  }
}

seed();
