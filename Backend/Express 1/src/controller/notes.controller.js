const noteModel = require("../model/notes.model")

const getAllNotes = async (req, res) => {
    const notes = await noteModel.find()
    res.json({
        message: "All Notes",
        allNotes: notes
    })
}

const createNote = async (req, res) => {
    const { id, title } = req.body

    const note = await noteModel.create({
        id,
        title
    })
    res.json({
        message: "Created Note",
        note: note
    })
}

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body

    const note = await noteModel.findOne({ id });
    if (!note) {
        return res.status(404).json({
            message: "Note Not Exists"
        })
    }

    const updateNote=await noteModel.updateOne(
        {id:id},
        {title:title}
    )

    res.json({
        message: "Updated Note",
        note: updateNote
    })
}
const deleteNote = async(req, res) => {
    const {id}=req.params;
    const dNote=await noteModel.deleteOne({id});
    res.json({
        message: "Delete Note"
    })
}

module.exports = {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote
}