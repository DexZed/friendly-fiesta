"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksModel = exports.BorrowModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
        type: String,
        required: true,
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: {
        type: Number,
        required: true,
        min: 0
    },
    available: {
        type: Boolean,
        default: true
    }
});
bookSchema.methods.updateAvailability = function () {
    this.available = this.copies > 0;
};
const borrowSchema = new mongoose_1.Schema({
    book: { type: mongoose_1.Schema.Types.ObjectId, ref: 'books', required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true }
});
exports.BorrowModel = (0, mongoose_1.model)('borrow', borrowSchema);
exports.BooksModel = (0, mongoose_1.model)('books', bookSchema);
