import express from "express";
import mongoose from "mongoose";
import Todo from "./Todo.model.js";

const router = express.Router();

router.get("/getall", async (req, res) => {
    try {
        let todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
});

router.get("/gettodo/:id", async (req, res) => {
    try {
        let todoId = req.params.id;
        let todo = await Todo.findById(todoId);
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
});

router.post("/create", async (req, res) => {
    try {
        let {title} = req.body;
        let newTodo = {
            title
        }
        await Todo.create(newTodo);
        res.status(201).json({success: true,
            msg: "Todo created successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        let todoId = req.params.id;
        let update = req.body;
        await Todo.findByIdAndUpdate(todoId, update);
        res.status(200).json({success: true,
            msg: "Updated successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        let {todoId} = req.params.id;
        await Todo.findByIdAndDelete(todoId);
        res.status(200).json({success: true,
            msg: "Todo deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
});

router.delete("/deleteall", async (req, res) => {
    try {
        await Todo.deleteMany();
        res.status(200).json({success: true,
            msg: "All todos deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
});

export default router;