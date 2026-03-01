import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Country from '../models/Country.js';

dotenv.config();

async function seed() {
  console.log("Connecting to:", process.env.MONGODB_URI);

  await mongoose.connect(process.env.MONGODB_URI, {
    // comment out these two lines if they're deprecated
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  // Dummy data for 6 countries (including Equatorial Guinea)
  const countriesData = [
    {
      name: "Equatorial Guinea",
      code: "GQ",
      lat: 3.75,
      lng: 8.75,
      official: true,
      flag: "🇬🇶",
      subtopics: {
        funFacts: {
          title: "Fun Facts",
          list: [
            "Equatorial Guinea is the only country in Africa where Spanish is an official language.",
            "Malabo is located on the island of Bioko.",
          ]
        },
        music: {
          title: "Traditional Rhythms & Modern Fusion",
          content: "Equatorial Guinea's Music Exports",
          songTitle: "Sin Mi",
          artist: "Anfibio ft Diddy",
          url: "https://www.youtube.com/watch?v=SSJXHOVnHB8"
        },
        popCulture: {
          title: "Pop Culture",
          content: "Juan Pablo Ebang Esono is one of the top filmmakers in the country. In 2010, Esono directed Teresa, the first medium-length film to be produced in Equatorial Guinea."
        },
        food: {
          title: "Food",
          content: "Try dishes like 'sopa de pescado' (fish soup) and 'cassava with peanut sauce.'"
        },
        slang: {
          title: "Popular Slang & Sayings",
          content: "The Fang word 'mbo' means 'friend' or 'companion.'"
        },
        history: {
          title: "History",
          content: "Equatorial Guinea gained independence from Spain in 1968."
        }
      }
    },
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
          content: "Frida Kahlo and Diego Rivera are two of Mexico's most iconic artists."
        },
        food: {
          title: "Food",
          content: "Tacos, enchiladas, and mole are among the most beloved dishes."
        },
        slang: {
          title: "Popular Slang & Sayings",
          content: "In Mexico, 'chido' means 'cool' or 'awesome.'"
        },
        history: {
          title: "History",
          content: "Mexico gained independence from Spain on September 16, 1810."
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
            "It is the birthplace of the tango dance."
          ]
        },
        music: {
          title: "Traditional Rhythms",
          content: "Argentina is famous for tango and folk music.",
          songTitle: "Por Una Cabeza",
          artist: "Carlos Gardel",
          url: "https://www.youtube.com/watch?v=IWZVXYJHe7Q"
        },
        popCulture: {
          title: "Pop Culture",
          content: "Argentine soccer legend Diego Maradona is one of the most famous athletes in history."
        },
        food: {
          title: "Food",
          content: "Argentinians are known for their beef, and 'asado' is their version of a barbecue."
        },
        slang: {
          title: "Popular Slang & Sayings",
          content: "In Argentina, 'che' is a common slang term meaning 'hey' or 'dude.'"
        },
        history: {
          title: "History",
          content: "Argentina declared independence from Spain on July 9, 1816."
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
            "Colombia is the only country in South America that has coastlines on both the Pacific Ocean and the Caribbean Sea.",
            "The emerald is Colombia's most famous gemstone."
          ]
        },
        music: {
          title: "Cumbia and Vallenato",
          content: "Cumbia is a popular music genre that originated in Colombia.",
          songTitle: "La Cumbia Cienaguera",
          artist: "Carlos Vives",
          url: "https://www.youtube.com/watch?v=fr9lTjSdzA0"
        },
        popCulture: {
          title: "Pop Culture",
          content: "Shakira and Juanes are two of Colombia's most famous musicians."
        },
        food: {
          title: "Food",
          content: "Colombian food includes dishes like arepas, bandeja paisa, and empanadas."
        },
        slang: {
          title: "Popular Slang & Sayings",
          content: "In Colombia, 'parcero' means 'friend' or 'buddy.'"
        },
        history: {
          title: "History",
          content: "Colombia gained independence from Spain on July 20, 1810."
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
            "Spain is home to one of the most famous football teams in the world: FC Barcelona.",
            "Spain is famous for its beaches, historic cities, and flamenco dancing."
          ]
        },
        music: {
          title: "Flamenco and Pop",
          content: "Flamenco is a genre of music and dance originating from Spain.",
          songTitle: "Bésame Mucho",
          artist: "Consuelo Velázquez",
          url: "https://www.youtube.com/watch?v=ks6hdxgf4wo"
        },
        popCulture: {
          title: "Pop Culture",
          content: "The Spanish film industry is known for directors like Pedro Almodóvar and films like 'Volver.'"
        },
        food: {
          title: "Food",
          content: "Paella, tapas, and churros are iconic Spanish dishes."
        },
        slang: {
          title: "Popular Slang & Sayings",
          content: "In Spain, 'guay' means 'cool' or 'awesome.'"
        },
        history: {
          title: "History",
          content: "Spain became a unified kingdom in 1492, and Christopher Columbus' voyage to the Americas was funded by Spain."
        }
      }
    }
  ];

  try {
    // Clear existing countries, if needed
    await Country.deleteMany({}); // Optional: Clear all existing data before seeding
    await Country.create(countriesData); // Add new countries
    console.log("Countries seeded successfully!");
  } catch (err) {
    console.error("Error seeding countries", err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
