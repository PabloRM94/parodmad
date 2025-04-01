import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsImageLoaded(true);
  }, []);

  // Define your tech skills organized by category
  const techCategories = [
    {
      category: "Frontend",
      skills: [
        { name: 'React', color: '#61DAFB' },
        { name: 'Astro', color: '#FF5A5F' },
        { name: 'Tailwind', color: '#38B2AC' },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: 'Django', color: '#092E20' },
        { name: 'Node.js', color: '#339933' },
        { name: 'SQLite', color: '#4479A1' },
        { name: 'MySQL', color: '#00758F'}
      ]
    },
    {
      category: "Testing",
      skills: [
        { name: 'Selenium', color: '#43B02A'},
        { name: 'UFT', color: '#000000'},
        { name: 'ALM', color: '#0052CC' },
      ] 
    },
    {
      category: "Tools",
      skills: [
        { name: 'Git', color: '#F05032' },
        { name: 'Jira', color: '#0052CC'}
      ]
    }
  ];

  return (
    <div style={{  
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: '#1a1a1a',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1000px',
        gap: '30px',
        marginBottom: '20px',
        flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas pequeñas
      }}>
        <div style={{
          flex: '1 1 400px', // Flex-basis mínimo para el texto
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          minWidth: '300px', // Ancho mínimo para evitar que sea demasiado estrecho
          marginTop: '20px',
        }}>
          <h2 style={{ color: '#4CAF50', marginBottom: '20px'}}> Junior </h2> 
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>QA Tester | Desarrollador Full Stack</h1>
          <p style={{ 
            fontSize: '1.2rem',
            maxWidth: '700px', 
            marginBottom: '30px',
            lineHeight: '1.8' }}>
            <strong style={{ color: '#4CAF50' }}>Pablo Rodríguez Madurga.</strong><br />
            Titulado en <strong style={{ color: '#4CAF50' }}>Desarrollo de Aplicaciones Multiplataforma</strong> en 2025.<br />
            En proceso de formación para convertirme en Desarrollador Full Stack. <br /> 
            <strong style={{ color: '#3F51B5' }}>Abierto a todo tipo de proyectos.</strong>
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            marginBottom: '40px',
            alignItems: 'center'
          }}>
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
            
            <a 
              href="https://www.linkedin.com/in/pablo-r-madurga/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#0077B5',
                color: 'white',
                fontSize: '22px',
                textDecoration: 'none',
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
              <i className="fab fa-linkedin-in"></i>
            </a>
            
            <a 
              href="https://github.com/PabloRM94" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#333',
                color: 'white',
                fontSize: '22px',
                textDecoration: 'none',
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
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        {/* Profile Image with Animation */}
        <div style={{
          flex: '0 0 auto', // No crecer ni encoger, mantener tamaño automático
          width: 'min(300px, 80vw)', // Usar el menor entre 300px o 80% del ancho de la ventana
          height: 'min(300px, 80vw)', // Mantener proporción cuadrada
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid #4CAF50',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          transform: isImageLoaded ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
          opacity: isImageLoaded ? 1 : 0,
          transition: 'all 1s ease-out',
          margin: '0 auto', // Centrar en pantallas pequeñas
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/images/CV.JPEG`}
            alt="Pablo Rodríguez Madurga" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
      
      {/* Tech skills tags - organized in columns by category */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '800px',
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
              gap: '10px',
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
                    border: `2px solid ${skill.color}`,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    width: '100%'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = skill.color;
                    e.currentTarget.style.color = ['JavaScript', 'HTML', 'Git', 'React'].includes(skill.name) ? '#000' : '#fff';
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
      <div>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '20px auto 0', 
        }}>
          <strong style={{ color: '#4CAF50' }}>Busco mi primera oportunidad para especializarme y demostrar mi compromiso.</strong>
        </p>
      </div>
      {/* Brief description section - now collapsible */}
      <div style={{
        width: '800px',
        maxWidth: '100%',
        margin: '40px auto 0',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'left',
        transition: 'all 0.3s ease',
        marginBottom: '50px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '8px',
          marginBottom: isAboutExpanded ? '15px' : '0'
        }}
        onClick={() => setIsAboutExpanded(!isAboutExpanded)}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            color: '#4CAF50', 
            margin: 0
          }}>
            Sobre mí:
          </h3>
          <span style={{
            color: '#4CAF50',
            fontSize: '1.5rem',
            transform: isAboutExpanded ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease'
          }}>
            ▼
          </span>
        </div>
        
        <div style={{
          maxHeight: isAboutExpanded ? '500px' : '0',
          overflow: 'hidden',
          opacity: isAboutExpanded ? 1 : 0,
          transition: 'max-height 0.5s ease, opacity 0.3s ease'
        }}>
          <p style={{ 
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#e0e0e0',
            textAlign: 'center',
            margin: isAboutExpanded ? '0 0' : '0'
          }}>
            He decidido dar el salto al mundo de la tecnología con ganas de aprender. <br/>
            Me apasiona explorar nuevas tecnologías, profundizar en cual es su fuerte y porque debo utilizarlas para los diferentes tipos de proyectos que existen.<br/>
            Puedo aportar una gran disposición para colaborar y poseo capacidad de trabajo en equipo. <br/>
            <a 
              href="https://drive.google.com/file/d/1gYC6LcH38XmYVZaz5BM_o8yXi29c_B6l/view" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4CAF50',
                textDecoration: 'underline',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 'bold',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                padding: '3px 8px',
                borderRadius: '4px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#6ede73';
                e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#4CAF50';
                e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
              }}
            >
              Según mi último jefe: tengo una gran capacidad para desenvolverme en equipos multidisciplinares <i className="fas fa-external-link-alt" style={{ fontSize: '0.8em', marginLeft: '3px' }}></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;