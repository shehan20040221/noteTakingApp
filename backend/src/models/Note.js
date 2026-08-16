import mangoose from 'mongoose';

//create a schema

//model based off of that scheme
const Note = mangoose.model('Note', noteSchema);
const noteSchema = new mangoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});


const Note = mongoose.model('Note', noteSchema);

export default Note;