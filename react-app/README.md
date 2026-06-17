# DSE Papers Browser - React App

A modern React application for browsing and accessing DSE (Diploma of Secondary Education) past papers organized by topics, subjects, and years.

## Features

- 📚 Browse papers organized by category (DSE, CE, By Topic)
- 🏷️ Filter by subject (English, Chinese, etc.)
- 📅 Year-based navigation
- 🎯 Topic-based organization
- 📱 Responsive design
- 🚀 Fast and intuitive navigation

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigator.tsx      # Navigation sidebar
│   │   ├── Navigator.css
│   │   ├── FileList.tsx       # File display area
│   │   └── FileList.css
│   ├── data/
│   │   └── navigationData.ts   # Navigation tree structure
│   ├── App.tsx                # Main app component
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Navigation Structure

The app supports three main categories:

### 1. By Topic (📚)
- English papers organized by topics
- Chinese papers (coming soon)

### 2. DSE (📝)
- English and Chinese papers
- Years from practice/sample to 2024-2025
- Multiple paper types (P1, P2MC, Answers)

### 3. CE (📜)
- Historical papers
- English: 1980-2011
- Chinese: 1991-2011

## Customization

To update the navigation structure, edit `src/data/navigationData.ts` and modify the `navigationData` object.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Technologies Used

- React 18
- TypeScript
- CSS3
- React Scripts 5

## License

This project is part of the DSE Past Papers Collection.
