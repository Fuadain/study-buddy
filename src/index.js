import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export { default as Homepage } from "./pages/homepage/homepage";
export { default as Login } from "./pages/login/login";
export { default as ForgotPassword } from "./pages/login/forgot-password";
export { default as Registration } from "./pages/registration/registration";
export { default as Dashboard } from "./pages/dashboard/dash/dashboard";
export { default as ClassBoard } from "./pages/dashboard/classboard/classboard";
export { default as Quiz } from "./pages/quiz/quiz";
export { default as QuizAssign } from "./pages/quiz-assign/quiz-assign";
export { default as QuizCreator } from "./pages/quiz-creation/quiz-creation";
export { default as AccountPage } from "./pages/account/account";
export { default as Contact } from "./pages/homepage/components/contact";
export { default as LearnMore } from "./pages/homepage/components/learnMore.jsx";
export { default as Terms } from "./pages/registration/terms.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
