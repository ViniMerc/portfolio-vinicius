import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubRepositories, formatDate } from '../services/githubService';

const GitHubProjects = () => {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        setLoading(true);
        const repos = await fetchGitHubRepositories();
        setRepositories(repos);
        setFilteredRepositories(repos);
      } catch (err) {
        setError('Erro ao carregar projetos do GitHub');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

  // Filtro de linguagens
  useEffect(() => {
    if (selectedLanguage === 'all') {
      setFilteredRepositories(repositories);
    } else {
      const filtered = repositories.filter(repo => repo.language === selectedLanguage);
      setFilteredRepositories(filtered);
    }
  }, [selectedLanguage, repositories]);

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f7df1e',
      'TypeScript': '#3178c6',
      'React': '#61dafb',
      'HTML': '#e34f26',
      'CSS': '#1572b6',
      'Python': '#3776ab',
      'Java': '#ed8b00',
      'C++': '#00599c',
      'C#': '#239120',
      'PHP': '#777bb4',
      'Ruby': '#cc342d',
      'Go': '#00add8',
      'Rust': '#000000',
      'Swift': '#fa7343',
      'Kotlin': '#7f52ff',
      'Dart': '#0175c2',
      'Vue': '#4fc08d',
      'Angular': '#dd0031',
      'Node.js': '#339933'
    };
    return colors[language] || '#6b7280';
  };

  // Obter linguagens únicas dos repositórios
  const getUniqueLanguages = () => {
    const languages = repositories
      .map(repo => repo.language)
      .filter(language => language !== null && language !== undefined);
    return [...new Set(languages)].sort();
  };

  if (loading) {
    return (
      <motion.section
        className="projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Projetos
        </motion.h2>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando projetos...</p>
        </div>
      </motion.section>
    );
  }

  if (error) {
    return (
      <motion.section
        className="projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Projetos
        </motion.h2>
        <div className="error-container">
          <p>{error}</p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Projetos
      </motion.h2>

      {/* Contador de projetos */}
      <motion.div
        className="projects-counter"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {filteredRepositories.length} {filteredRepositories.length === 1 ? 'projeto' : 'projetos'}
        {selectedLanguage !== 'all' && (
          <span className="filter-indicator"> em {selectedLanguage}</span>
        )}
      </motion.div>

      {/* Filtro de linguagens */}
      <motion.div
        className="language-filter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button
          className={`filter-button ${selectedLanguage === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('all')}
          style={{ 
            backgroundColor: selectedLanguage === 'all' ? 'var(--primary-green)' : 'var(--dark-gray)'
          }}
        >
          Todos
        </button>
        {getUniqueLanguages().map((language) => (
          <button
            key={language}
            className={`filter-button ${selectedLanguage === language ? 'active' : ''}`}
            onClick={() => setSelectedLanguage(language)}
            style={{ 
              backgroundColor: selectedLanguage === language ? getLanguageColor(language) : 'var(--dark-gray)'
            }}
          >
            {language}
          </button>
        ))}
      </motion.div>

      <div className="projects-list">
        {filteredRepositories.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="project-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-header">
              <div className="project-title-section">
                <h3 className="project-name">{repo.name}</h3>
                {repo.language && (
                  <span 
                    className="project-language"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  >
                    {repo.language}
                  </span>
                )}
              </div>
              <div className="project-date">
                Atualizado em {formatDate(repo.updated_at)}
              </div>
            </div>
            
            <p className="project-description">{repo.description}</p>
            
            <div className="project-footer">
              <div className="project-actions">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Código
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default GitHubProjects;
