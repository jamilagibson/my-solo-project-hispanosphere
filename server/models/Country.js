import mongoose from 'mongoose';

const SubtopicSchema = new mongoose.Schema({
    title: String,
    content: String,
    songTitle: String,
    artist: String,
    url: String,
    // Add this to support funFacts
    list: [String],
  });
  

  const CountrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    subtopics: {
      funFacts: SubtopicSchema, // now lives here with the rest
      popCulture: SubtopicSchema,
      music: SubtopicSchema,
      food: SubtopicSchema,
      slang: SubtopicSchema,
      history: SubtopicSchema,
    },
  });

const Country = mongoose.model('Country', CountrySchema);

export default Country;