import React from 'react';

const ProjectsSection = () => {
  
  const personalProjects = [
    {
      id: 1,
      description: 'Aplicación web para la gestion de contadores personalizados.',
      image: `${process.env.PUBLIC_URL}/images/counter.png`,
      link: 'https://counterchuleta.netlify.app/',
      imagePosition: 'center',
      technologies: [
        { name: 'JavaScript', color: '#F7DF1E', textColor: '#000' },
        { name: 'CSS', color: '#1572B6', textColor: '#fff' },
        {name: 'HTML', color: '#E34F26', textColor: '#fff'}
      ]
    },
    {
      id: 2,
      description: ' Proyecto fin de ciclo. <br /> App enfocada en la gestión de tareas y entrenamientos de natación.',
      image: `${process.env.PUBLIC_URL}/images/pabels_logo.png`,
      link: 'https://drive.google.com/file/d/1ZpxzH8KHmVtY3TTWmaryFzNfdH057bYB/view?usp=drive_link',
      imagePosition: 'top',
      objectFit: 'cover',
      technologies: [
        { name: 'kotlin', color: '#7F52FF', textColor: '#fff' },
        { name: 'Android Studio', color: '#3DDC84', textColor: '#000' },
        { name: 'Firebase', color: '#FFCA28', textColor: '#000' },
      ]
    },
  ];

  const workExperience = [
    {
      id: 3,
      description: '<Strong>Voluntario en Pawify.</Strong> <br /> Proyecto internacional de adopción de animales. <br /> Coordinador del equipo de desarrollo.',
      image: `${process.env.PUBLIC_URL}/images/pawify_new.jpg`,
      link: 'https://pawify.org/',
      imagePosition: 'top left',
      technologies: [
        { name: 'React', color: '#61DAFB', textColor: '#000' },
        { name: 'JavaScript', color: '#F7DF1E', textColor: '#000' },
        { name: 'Django', color: '#092E20', textColor: '#fff' },
        { name: 'Python', color: '#3776AB', textColor: '#fff' },
        { name: 'Selenium', color: '#43B02A', textColor: '#fff' }
      ]
    },
    {
      id: 4,
      description: 'Desarrollo de pruebas Automáticas para una entidad financiera. <br /> Implementación y mantenimiento de pruebas. <br />',
      image: `${process.env.PUBLIC_URL}/images/viewnext.png`,
      link: 'https://drive.google.com/file/d/1gYC6LcH38XmYVZaz5BM_o8yXi29c_B6l/view?usp=drive_link',
      hasRecommendation: true,
      technologies: [
        { name: 'Visual Basic', color: '#D02090', textColor: '#fff' },
        { name: 'UFT', color: '#00539F', textColor: '#fff' },
        { name: 'ALM', color: '#009444', textColor: '#fff' },
      ]
    }
  ];

  // Función para renderizar proyectos
  const renderProjects = (projectsList) => {
    return projectsList.map((project) => (

      <div key={project.id} style={{
        background: '#2a2a2a',
        borderRadius: '8px',
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
              objectFit: project.objectFit || 'cover',
              objectPosition: project.imagePosition || 'center', 
              borderRadius: '4px',
              marginBottom: '15px' 
            }}
          />
        )}
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#3F51B5' }}>{project.title}</h2>
        <p 
          style={{ textAlign: 'center', marginBottom: '15px' }}
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>
        
        {project.hasRecommendation && (
          <div style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '4px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            <span style={{ fontSize: '1.2rem' }}>✓</span>
            <span>Carta de recomendación disponible</span>
            <span style={{ fontSize: '0.8rem', marginLeft: 'auto' }}>Click para ver</span>
          </div>
        )}
        
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
    ));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '10px 10px',
      background: '#1a1a1a',
      color: 'white'
    }}>
      {/* Sección de Experiencia Laboral */}
      <h1 style={{ textAlign: 'center', margin: '50px 0 30px', color: '#4CAF50' }}>Experiencia Laboral</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {renderProjects(workExperience)}
      </div>
      
      {/* Sección de Proyectos Personales */}
      <h1 style={{ textAlign: 'center', margin: '30px 0', color: '#61DAFB' }}>Proyectos Personales</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {renderProjects(personalProjects)}
      </div>
      
      
    </div>
  );
};

export default ProjectsSection;

/*
- objectFit: 'contain' - Muestra la imagen completa dentro del contenedor, manteniendo su relación de aspecto
- objectFit: 'cover' - Cubre todo el contenedor, recortando la imagen si es necesario
- objectFit: 'fill' - Estira la imagen para llenar el contenedor
- objectFit: 'scale-down' - Muestra la imagen a su tamaño original o reducida para caber en el contenedor
Para imagePosition , puedes usar valores como:

- 'center' (por defecto)
- 'top'
- 'bottom'
- 'left'
- 'right'
- 'top left' , 'top right' , etc.*/