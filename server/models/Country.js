import mongoose from 'mongoose';

const SubtopicSchema = new mongoose.Schema({
    title: String,
    content: String,
    videoUrl: String,
});

const CountrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    funfacts: [String],
    subtopics: {
        popCulture: SubtopicSchema,
        music: SubtopicSchema,
        food: SubtopicSchema,
        slang: SubtopicSchema,
        history: SubtopicSchema,
        //add more subtopics here
    },
});

const Country = mongoose.model('Country', CountrySchema);

export default Country;