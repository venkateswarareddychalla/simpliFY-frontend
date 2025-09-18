# SimpliFY User Profiles Frontend Assignment

A modern React application for displaying and managing user profiles with beautiful avatars.

## Overview

This project is a frontend application built with React and Vite that displays user profiles in an elegant card layout. It fetches user data from a mock API and generates unique avatars for each user using the Dicebear API.

## Features

- **User Cards**: Display user information in responsive card layouts
- **Dynamic Avatars**: Generate unique avatars using Dicebear API 9.x with happy mood
- **Edit Functionality**: Modal-based user editing with form validation
- **Delete Users**: Remove users from the display
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Built with Ant Design components

## Tech Stack

- **React 19**: Latest React with modern hooks and features
- **Vite**: Fast build tool and development server
- **Ant Design**: Professional UI component library
- **Dicebear API**: Avatar generation service
- **JSONPlaceholder**: Mock API for user data
- **Context API**: State management solution

## How It Was Built

### Project Setup
1. Initialized with Vite React template
2. Installed Ant Design and dependencies
3. Configured ESLint for code quality

### Core Components
- **App.jsx**: Main application component with user grid layout
- **UserCard.jsx**: Individual user card with avatar and actions
- **AppContext.jsx**: Context provider for state management

### Key Features Implementation
1. **Data Fetching**: Uses `fetch` API to get users from JSONPlaceholder
2. **Avatar Generation**: Constructs Dicebear API URLs with user-specific seeds
3. **State Management**: Context API handles users, loading, and modal states
4. **CRUD Operations**: Edit and delete users with optimistic updates
5. **Responsive Layout**: Ant Design Grid system for mobile-first design

### Styling
- Custom CSS for card styling and spacing
- Ant Design theme configuration
- Responsive breakpoints for different screen sizes

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── UserCard.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js
```

## API Usage

- **User Data**: https://jsonplaceholder.typicode.com/users
- **Avatars**: https://api.dicebear.com/9.x/avataaars/svg?seed={username}&options[mood][]=happy

