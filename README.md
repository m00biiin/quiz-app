# JavaScript & React Quiz

A small multiple-choice quiz app built with React. Answer five questions about JavaScript and React, submit your answers, and get a score, a skill level and a full review of every question.

I built it as a practice project to work with React Router, Context API and responsive CSS.

## Features

- **Quiz flow:** pick one option per question, and click it again to unselect it.
- **Navigation:** move between questions with Previous and Next, and change any answer before submitting. A "Question n of N" indicator shows your position.
- **Submit confirmation:** a dialog shows how many questions you answered before you submit.
- **Result page:**
  - score as a percentage
  - skill level badge (Beginner, Intermediate or Advanced)
  - counts of correct, wrong and unanswered questions
  - a review of every question with your answer and the correct one
- **Try again:** restart the quiz with a clean state.
- **Route protection:** the result page can only be opened after submitting, and unknown URLs redirect to the start page.
- **Responsive layout:** works on phones, tablets and desktops.

## Skill levels

| Score | Level |
| --- | --- |
| 80% and above | Advanced |
| 50% to 79% | Intermediate |
| Below 50% | Beginner |

## Tech stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- Context API for shared quiz state
- Plain CSS (one file per page)
- [Font Awesome](https://fontawesome.com/) icons
- Plus Jakarta Sans font

## Getting started

You need [Node.js](https://nodejs.org/) (a recent LTS version) and npm.

```bash
# clone the repository
git clone https://github.com/m00biiin/quiz-app.git
cd quiz-app

# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the local address that Vite prints in the terminal.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
src/
├── App.jsx              # routes and shared quiz state
├── main.jsx             # entry point
├── app.css              # global styles and layout
├── Components/
│   └── Question.jsx     # one question with its options
├── Context/
│   └── Context.jsx      # quiz context
├── CSS/                 # styles for each page and component
├── Data/
│   └── Questions.js     # quiz questions
└── Pages/
    ├── StartPage.jsx
    ├── QuizPage.jsx
    └── ResultPage.jsx
```

## Adding or editing questions

All questions live in `src/Data/Questions.js`. Each question is an object like this:

```js
{
  id: 6,
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: "Option B", // must match one of the options exactly
}
```

Every `id` must be unique. The start page, progress indicator and result page pick up the new question count automatically.

## Possible improvements

- Keep progress after a page refresh
- Add a progress bar
- Add more questions and categories
- Add a timer

## Author

**Mobin Akbari**: [GitHub](https://github.com/m00biiin) [Linkedin](https://www.linkedin.com/in/mobinakbari/)
