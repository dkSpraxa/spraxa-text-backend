const catchAsynsError = require("../middleware/catchAsynsError");
const ErrorHandler = require("../middleware/ErrorHandler");
const notesSchema = require("../models/notesSchema");
const userSchema = require("../models/userSchema");

//create note
exports.createNote = catchAsynsError(async (req, res, next) => {
  await notesSchema.create(req.body);

  res.status(201).json({
    success: true,
    message: "Record added..!"
  });
});

//get all notes
exports.getAllNotes = catchAsynsError(async (req, res, next) => {
  const notes = await notesSchema.find();

  res.status(200).json({
    success: true,
    notes,
  });
});

//update a note
exports.notesUpdate = catchAsynsError(async (req, res, next) => {
  const newNote = {
    title: req.body.title,
    message: req.body.message,
  };

  const note = await notesSchema.findByIdAndUpdate(req.params.id, newNote, {
    new: true,
    runValidators: true,
  });

  if (!note) {
    return next(new ErrorHandler("note not found", 404));
  }

  res.status(201).json({
    success: true,
    message: "note updated successfully!",
    note,
  });
});

//delete a note
exports.notesDelete = catchAsynsError(async (req, res, next) => {
  const note = await notesSchema.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("note not found", 404));
  }

  await note.deleteOne();

  res.status(201).json({
    success: true,
    message: "note deleted successfully!",
    note,
  });
});
