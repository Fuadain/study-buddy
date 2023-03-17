import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export { default as Homepage } from './pages/homepage/homepage';
export { default as Login } from './pages/login/login';
export { default as ForgotPassword } from './pages/login/forgot-password';
export { default as ForgotPasswordVerify } from './pages/login/forgot-password-verify';
export { default as Registration } from './pages/registration/registration';
export { default as Dashboard } from './pages/dashboard/dashboard';
export { default as Quiz } from './pages/quiz/quiz';
export { default as QuizGen } from './pages/quiz-gen/quiz-gen';
export { default as QuizAction } from './pages/quiz-action/quiz-action';
export { default as AccountPage } from './pages/account/account';
export { default as Contact } from './pages/homepage/components/contact';
export { default as LearnMore } from './pages/homepage/components/learnMore.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

