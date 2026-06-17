import React, { useState } from 'react';
import './App.css';
import Navigator from './components/Navigator';
import FileList from './components/FileList';
import { navigationData } from './data/navigationData';

interface NavigationPath {
  category: string; // 'by_topic' | 'dse' | 'ce'
  subject: string; // 'english' | 'chinese' | etc
  section?: string; // 'paper1', 'paper2', '2012', etc
  item?: string; // specific paper identifier
}

function App() {
  const [selectedPath, setSelectedPath] = useState<NavigationPath>({
    category: 'dse',
    subject: 'english',
    section: 'practice'
  });

  const handleNavigate = (path: NavigationPath) => {
    setSelectedPath(path);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 DSE Past Papers Browser</h1>
        <p>Navigate through DSE, CE, and Topic-based past papers</p>
      </header>
      
      <div className="app-container">
        <nav className="app-nav">
          <Navigator 
            data={navigationData} 
            onNavigate={handleNavigate}
            selectedPath={selectedPath}
          />
        </nav>
        
        <main className="app-main">
          <FileList selectedPath={selectedPath} />
        </main>
      </div>
    </div>
  );
}

export default App;
