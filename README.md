# GameHub

## Purpose

GameHub is an engaging online library designed for discovering and supporting indie game developers. Users can browse a curated selection of indie games, view detailed information, and download games they enjoy.

## Live URL

[https://game-hub-new.netlify.app/](https://game-hub-new.netlify.app/)

## ✨ Key Features

- **Firebase Authentication:** Secure user registration and login using email/password and Google social login.
- **Protected Routes:** The Game Details page is protected, ensuring only logged-in users can access it.
- **Dynamic Homepage:** Features an interactive banner slider and a "Popular Games" section sorted by rating.
- **User Profile Management:** Logged-in users can view their profile and update their name and photo URL.
- **Password Reset:** A functional "Forget Password" feature to help users regain access to their accounts.
- **Fully Responsive Design:** The layout is optimized for a seamless experience on mobile, tablet, and desktop devices.
- **Custom 404 Page:** A user-friendly "Not Found" page for handling invalid routes.

## 🛠️ Technology Stack & Packages

This project was built using the following technologies and npm packages:

### Core Dependencies

- **React:** `react`, `react-dom`
- **Routing:** `react-router`
- **Authentication & Database:** `firebase`
- **Styling:** `tailwindcss`
- **UI Components (Tailwind):** `daisyui`
- **Animation:** `framer-motion`
- **UI Components:**
  - `react-slick` & `slick-carousel` (for the banner slider)
  - `react-spinners` (for loading indicators)
  - `react-toastify` (for user notifications)

### Development & Build Tools

- **Bundler:** `vite`
- **Vite Plugins:** `@vitejs/plugin-react`
- **Tailwind Vite Plugin:** `@tailwindcss/vite`
- **Linting:** `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **Types:** `@types/react`, `@types/react-dom`
- **Utilities:** `globals`
