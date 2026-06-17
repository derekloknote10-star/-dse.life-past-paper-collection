import React, { useState } from 'react';
import './Navigator.css';
import { navigationData } from '../data/navigationData';

interface NavigationPath {
  category: string;
  subject: string;
  section?: string;
  item?: string;
}

interface NavigatorProps {
  data: typeof navigationData;
  onNavigate: (path: NavigationPath) => void;
  selectedPath: NavigationPath;
}

const Navigator: React.FC<NavigatorProps> = ({ data, onNavigate, selectedPath }) => {
  const [expandedCategory, setExpandedCategory] = useState<string>('dse');
  const [expandedSubject, setExpandedSubject] = useState<string>('english');
  const [expandedSection, setExpandedSection] = useState<string>('practice');

  const categories = Object.keys(data);

  const handleCategoryClick = (category: string) => {
    setExpandedCategory(category);
    const subjects = Object.keys(data[category]);
    const firstSubject = subjects[0];
    setExpandedSubject(firstSubject);
    onNavigate({ category, subject: firstSubject });
  };

  const handleSubjectClick = (subject: string) => {
    setExpandedSubject(subject);
    const categoryData = data[expandedCategory][subject];
    
    if (typeof categoryData === 'string') {
      onNavigate({ category: expandedCategory, subject });
      return;
    }

    if (categoryData.years) {
      const sections = Object.keys(categoryData.years);
      const firstSection = sections[0];
      setExpandedSection(firstSection);
      onNavigate({ 
        category: expandedCategory, 
        subject, 
        section: firstSection 
      });
    } else {
      const sections = Object.keys(categoryData);
      const firstSection = sections[0];
      setExpandedSection(firstSection);
      onNavigate({ 
        category: expandedCategory, 
        subject, 
        section: firstSection 
      });
    }
  };

  const handleSectionClick = (section: string) => {
    setExpandedSection(section);
    onNavigate({ 
      category: expandedCategory, 
      subject: expandedSubject, 
      section 
    });
  };

  const handleItemClick = (item: string) => {
    onNavigate({ 
      category: expandedCategory, 
      subject: expandedSubject, 
      section: expandedSection,
      item 
    });
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'by_topic':
        return '🏷️';
      case 'dse':
        return '📝';
      case 'ce':
        return '📜';
      default:
        return '📁';
    }
  };

  const categoryData = data[expandedCategory];
  const subjectData = categoryData?.[expandedSubject];
  const sectionData = subjectData?.years || subjectData;

  const isComingSoon = typeof subjectData === 'string' && subjectData === 'coming_soon';

  return (
    <div className="navigator">
      <h2>📂 Navigation</h2>
      
      <div className="category-list">
        {categories.map(category => (
          <div key={category} className="category-item">
            <button
              className={`category-button ${expandedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="icon">{getCategoryIcon(category)}</span>
              <span className="label">{category.toUpperCase()}</span>
            </button>

            {expandedCategory === category && (
              <div className="subject-list">
                {Object.keys(categoryData).map(subject => (
                  <button
                    key={subject}
                    className={`subject-button ${
                      expandedSubject === subject ? 'active' : ''
                    }`}
                    onClick={() => handleSubjectClick(subject)}
                  >
                    <span className="subject-name">{subject}</span>
                    {categoryData[subject] === 'coming_soon' && (
                      <span className="badge">Coming Soon</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {expandedCategory && expandedSubject && !isComingSoon && (
        <div className="section-list">
          <h3>Sections</h3>
          <div className="section-buttons">
            {Object.keys(sectionData).map(section => (
              <button
                key={section}
                className={`section-button ${
                  expandedSection === section ? 'active' : ''
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}

      {expandedCategory && expandedSubject && expandedSection && !isComingSoon && (
        <div className="items-list">
          <h3>Items</h3>
          <div className="items-buttons">
            {Array.isArray(sectionData[expandedSection]) ? (
              sectionData[expandedSection].map((item: string) => (
                <button
                  key={item}
                  className={`item-button ${
                    selectedPath.item === item ? 'active' : ''
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              ))
            ) : (
              <p className="no-items">No items available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigator;
