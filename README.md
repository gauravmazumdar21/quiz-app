# Node.js Quiz App with MongoDB

This is a simple quiz application built using Node.js, Express.js, and MongoDB. The application allows users to answer a set of math-related questions and provides a score based on their answers.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Database Schema](#database-schema)
- [Sample Questions](#sample-questions)
- [License](#license)

## Requirements

- Node.js
- MongoDB
- MongoDB Compass (optional, for easy data insertion)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
2. Install dependencies:
    ```bash
       npm install
## Usage
1. Start your MongoDB server.
2. Run the application:
    ```bash
       npm start
3. Open your web browser and navigate to http://localhost:3000.
4. Answer the quiz questions and submit the form to see your score.

## File Structure
The project has the following structure:
    
        quiz-app/
        |-- models/
        |   |-- question.js
        |-- routes/
        |   |-- quizRoutes.js
        |-- views/
        |   |-- index.ejs
        |-- app.js
        |-- package.json
        |-- README.md
- models/question.js: Defines the MongoDB schema for quiz questions.
- routes/quizRoutes.js: Handles routes and quiz logic.
- views/index.ejs: Displays the quiz questions.
- app.js: Entry point for the Express application.
- package.json: Contains project metadata and dependencies.

## Database Schema
The MongoDB schema for quiz questions is defined in models/question.js. Each question document has fields for the question text, options, and the index of the correct option.

## Sample Questions
The sample quiz questions are provided in the README, and you can insert them into your MongoDB database using MongoDB Compass.
    
        {
          "question": "What is the product of 9 and 7?",
          "options": ["56", "63", "72", "81"],
          "correctOption": 1
        }
