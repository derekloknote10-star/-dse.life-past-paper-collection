import React from 'react';
import './FileList.css';

interface NavigationPath {
  category: string;
  subject: string;
  section?: string;
  item?: string;
}

interface FileListProps {
  selectedPath: NavigationPath;
}

const FileList: React.FC<FileListProps> = ({ selectedPath }) => {
  const handleOpenFile = (filePath: string) => {
    const githubRawUrl = `https://github.com/derekloknote10-star/-dse.life-past-paper-collection/raw/main/dse_files/${filePath}`;
    window.open(githubRawUrl, '_blank');
  };

  const getDisplayPath = () => {
    const parts = [selectedPath.category.toUpperCase()];
    if (selectedPath.subject) parts.push(selectedPath.subject.charAt(0).toUpperCase() + selectedPath.subject.slice(1));
    if (selectedPath.section) parts.push(selectedPath.section);
    if (selectedPath.item) parts.push(selectedPath.item);
    return parts.join(' / ');
  };

  const isComingSoon = selectedPath.category === 'by_topic' && selectedPath.subject === 'chinese';

  // Mock data for demonstration - replace with actual file mapping
  const mockFiles = [
    { id: 1, name: '2024 Paper 1 (MC)', size: '2.4 MB' },
    { id: 2, name: '2024 Paper 2 (MC) - Answer', size: '1.8 MB' },
    { id: 3, name: '2024 Answers', size: '3.2 MB' },
  ];

  return (
    <div className="file-list">
      <div className="file-list-header">
        <h2>📄 Files</h2>
        <p className="breadcrumb">{getDisplayPath()}</p>
      </div>

      {isComingSoon ? (
        <div className="coming-soon">
          <div className="coming-soon-content">
            <p className="coming-soon-emoji">🚀</p>
            <h3>Coming Soon</h3>
            <p>This section is being prepared and will be available shortly.</p>
          </div>
        </div>
      ) : (
        <div className="files">
          {mockFiles.length > 0 ? (
            <div className="file-grid">
              {mockFiles.map(file => (
                <div key={file.id} className="file-card">
                  <div className="file-icon">📑</div>
                  <div className="file-info">
                    <h3 className="file-name">{file.name}</h3>
                    <p className="file-size">{file.size}</p>
                  </div>
                  <button
                    className="file-button"
                    onClick={() => handleOpenFile(`${selectedPath.subject}/${selectedPath.section}/${file.name}.pdf`)}
                  >
                    Open
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-files">
              <p>No files found for this selection.</p>
            </div>
          )}
        </div>
      )}

      <div className="file-list-footer">
        <p className="info">
          💡 Tip: Click "Open" to download or view the PDF file directly from GitHub.
        </p>
      </div>
    </div>
  );
};

export default FileList;
