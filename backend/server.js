const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.json({
        message: "DevOps Backend is running successfully!",
        status: "OK"
    });
});

// MODULE 1
app.get("/api/module1", (req, res) => {
    res.json({
        module: "Module 1",
        name: "Student Information Module",
        student: "Rubab Rafique",
        rollNo: "55565",
        program: "BS Computer Science",
        semester: "7th Semester"
    });
});

// MODULE 2
app.get("/api/module2", (req, res) => {
    res.json({
        module: "Module 2",
        name: "DevOps Information Module",
        technology: "Docker Compose",
        frontend: "Nginx",
        backend: "Node.js + Express",
        status: "Running"
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend server running on port ${PORT}`);
});