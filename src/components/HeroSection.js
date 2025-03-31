import React from 'react';

const HeroSection = () => {
  // Define your tech skills organized by category
  const techCategories = [
    {
      category: "Frontend",
      skills: [
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' },
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: 'Node.js', color: '#339933' },
        { name: 'Python', color: '#3776AB' },
        { name: 'SQL', color: '#4479A1' },
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: 'Git', color: '#F05032' },
        { name: 'Selenium', color: '#43B02A' },
      ]
    }
  ];

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: '#1a1a1a',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>QA Tester | Desarrollador Full Stack</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
        Bienvenido a mi portfolio profesional. Aquí encontrarás mis proyectos y habilidades.
      </p>
      
      <a 
        href="https://drive.google.com/file/d/12-eE6l7JbV5NZE0X_wfbfgKTmRlRSMe7/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#4CAF50',
          color: 'white',
          padding: '12px 24px',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          marginBottom: '40px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 8px rgba(0,0,0,0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }}
      >
        Descargar CV
      </a>
      
      {/* Tech skills tags - organized in columns by category */}
      <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '15px' }}>Tecnologías y habilidades</p>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '800px',
        gap: '30px',
        flexWrap: 'wrap'
      }}>
        {techCategories.map((category, catIndex) => (
          <div key={catIndex} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '180px'
          }}>
            <h3 style={{ 
              fontSize: '0.9rem', 
              color: '#888', 
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {category.category}
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center'
            }}>
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    padding: '6px 14px',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    border: `1px solid ${skill.color}`,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    width: '100%'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = skill.color;
                    e.currentTarget.style.color = ['JavaScript', 'HTML5', 'Git', 'React'].includes(skill.name) ? '#000' : '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 4px 8px rgba(0,0,0,0.2)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;