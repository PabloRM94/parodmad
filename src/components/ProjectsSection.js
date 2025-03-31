import React from 'react';

const ProjectsSection = () => {
  // Sample projects data - you can replace with your own projects
  const projects = [
    {
      id: 1,
      title: 'Counter',
      description: 'Aplicación web para gestionar contadores personalizados, organizada por grupos temáticos y con estadísticas.',
      image: '/images/counter-project.jpg',
      link: 'https://counterchuleta.netlify.app/',
      technologies: [
        { name: 'JavaScript', color: '#F7DF1E', textColor: '#000' },
        { name: 'React', color: '#61DAFB', textColor: '#000' },
        { name: 'CSS3', color: '#1572B6', textColor: '#fff' }
      ]
    },
    {
      id: 2,
      title: 'Pawify',
      description: 'Voluntario en Pawify, proyecto internacional de adopción de animales. Desarrollo con React (frontend) y Django (backend). Responsable de automatización con Python y Selenium.',
      image: '/images/pawify-project.jpg',
      link: 'https://pawify.org/',
      technologies: [
        { name: 'React', color: '#61DAFB', textColor: '#000' },
        { name: 'JavaScript', color: '#F7DF1E', textColor: '#000' },
        { name: 'Django', color: '#092E20', textColor: '#fff' },
        { name: 'Python', color: '#3776AB', textColor: '#fff' },
        { name: 'Selenium', color: '#43B02A', textColor: '#fff' }
      ]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '50px 20px',
      background: '#1a1a1a',
      color: 'white'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Mis Proyectos</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            background: '#2a2a2a',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: '100%',
            color: 'white'
          }} 
          onClick={() => window.open(project.link, '_blank')}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
          }}
          >
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '15px' 
                }}
              />
            )}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h2>
            <p style={{ textAlign: 'center', marginBottom: '15px' }}>{project.description}</p>
            
            {/* Technology tags */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              gap: '8px',
              marginTop: 'auto',
              padding: '10px 0'
            }}>
              {project.technologies.map((tech, index) => (
                <span key={index} style={{
                  backgroundColor: tech.color,
                  color: tech.textColor,
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;