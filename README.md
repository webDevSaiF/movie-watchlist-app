# 🎬 Movie Watchlist App

A movie watchlist app built with **React** and **TypeScript**. Filter movies, mark them as watched, like your favorites, and track your progress.

## Features

- 📋 Movie list loaded from a JSON file
- ✅ Mark movies as watched or not watched
- ❤️ Like counter for each movie
- 🔍 Filter by All, Watched, or Not Watched
- 📊 Live stats: total, watched, and remaining
- ⭐ "Top Rated" badge for movies rated 8.5 or higher
- ⏳ Loading state with Suspense

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/movie-watchlist-app.git

# Go into the folder
cd movie-watchlist-app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Project Structure

```
public/
└── data.json
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Stats/
│   ├── FilterButtons/
│   ├── MovieApp/
│   └── MovieList/
│   └── Movies/
├── types/
│   └── type.ts
└── App.tsx
```

## Concepts Practiced

- Components and importing/exporting
- JSX and JavaScript in curly braces
- Props with TypeScript interfaces
- Conditional rendering
- Rendering lists with `.map()` and keys
- Pure components and immutable state updates
- `useState` and lifting state up
- `use()` with `Suspense` for loading data
- Union types, `Record`, and typed function props
