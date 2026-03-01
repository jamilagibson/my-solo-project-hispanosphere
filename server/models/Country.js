import mongoose from 'mongoose';

const SubtopicSchema = new mongoose.Schema({
    title: String,
    content: String,
    songTitle: String,
    artist: String,
    url: String,
    list: [String],
});

const CountrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    flag: { type: String },
    official: { type: Boolean },
    subtopics: {
        funFacts: SubtopicSchema,
        popCulture: SubtopicSchema,
        music: SubtopicSchema,
        food: SubtopicSchema,
        slang: SubtopicSchema,
        history: SubtopicSchema,
    },
});

const Country = mongoose.model('Country', CountrySchema);

export default Country;
