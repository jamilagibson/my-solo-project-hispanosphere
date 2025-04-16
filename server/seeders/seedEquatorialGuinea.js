
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Country from '../models/Country.js';

dotenv.config();

console.log("Connecting to:", process.env.MONGODB_URI);

await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const equatorialGuineaData = {
  name: "Equatorial Guinea",
  code: "GQ",
  funFacts: [
    "Equatorial Guinea is the only country in Africa where Spanish is an official language.",
    "Malabo is located on the island of Bioko.",
  ],
  subtopics: {
    popCulture: {
      title: "Pop Culture",
      content: "Traditional dance and music play a major role in local celebrations."
    },
    music: {
      title: "Music",
      content: "Fang tribal music features polyrhythmic drumming and storytelling.",
      videoUrl: "https://www.youtube.com/watch?v=SSJXHOVnHB8"
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
};

try {
  await Country.deleteMany({ code: 'GQ' }); // optional: clear existing
  await Country.create(equatorialGuineaData);
  console.log("Equatorial Guinea seeded successfully!");
} catch (err) {
  console.error(err);
}

mongoose.connection.close();
