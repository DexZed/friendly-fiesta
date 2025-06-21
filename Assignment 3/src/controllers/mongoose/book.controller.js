"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_schema_1 = require("../../mongodb/schema/book.schema");
const controller = (0, express_1.Router)();
controller.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_schema_1.BooksModel.create(req.body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Validation failed",
            error: error,
        });
    }
}));
// 2. Get All Books
controller.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy = "createdAt", sort = "desc", limit = "10", } = req.query;
        const query = {};
        if (filter)
            query.genre = filter;
        const books = yield book_schema_1.BooksModel.find(query)
            .sort({ [sortBy.toString()]: sort === "asc" ? 1 : -1 })
            .limit(Number(limit));
        res.json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error retrieving books", error });
    }
}));
// 3. Get Book by ID
controller.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_schema_1.BooksModel.findById(req.params.bookId);
        if (!book)
            throw new Error("Book not found");
        res.json({
            success: true,
            message: "Book retrieved successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Book not found", error });
    }
}));
// 4. Update Book
controller.put("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_schema_1.BooksModel.findByIdAndUpdate(req.params.bookId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!book)
            throw new Error("Book not found");
        res.json({
            success: true,
            message: "Book updated successfully",
            data: book,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ success: false, message: "Validation failed", error });
    }
}));
// 5. Delete Book
controller.delete("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield book_schema_1.BooksModel.findByIdAndDelete(req.params.bookId);
        res.json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Book not found", error });
    }
}));
// 6. Borrow a Book
controller.post("/borrow", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { book: bookId, quantity, dueDate } = req.body;
        const book = yield book_schema_1.BooksModel.findById(bookId);
        if (!book)
            throw new Error("Book not found");
        if (book.copies < quantity)
            throw new Error("Not enough copies available");
        book.copies -= quantity;
        book.updateAvailability();
        yield book.save();
        const borrow = yield book_schema_1.BorrowModel.create({
            book: bookId,
            quantity,
            dueDate,
        });
        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ success: false, message: "Borrowing failed", error });
    }
}));
// 7. Borrow Summary (Aggregation)
controller.get("/borrow", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const summary = yield book_schema_1.BorrowModel.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookDetails",
                },
            },
            { $unwind: "$bookDetails" },
            {
                $project: {
                    book: {
                        title: "$bookDetails.title",
                        isbn: "$bookDetails.isbn",
                    },
                    totalQuantity: 1,
                },
            },
        ]);
        res.json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: summary,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({
            success: false,
            message: "Failed to retrieve borrow summary",
            error,
        });
    }
}));
exports.default = controller;
