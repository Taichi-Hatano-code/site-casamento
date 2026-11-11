import { useState, useEffect } from 'react'
import foto1 from './assets/estevaojai3.jpg' 

import a from './assets/a.jpeg'
import b from './assets/b.jpeg'
import c from './assets/c.jpeg'
import d from './assets/d.jpeg'
import e from './assets/e.jpeg'
import f from './assets/f.jpeg'
import g from './assets/g.jpeg'

import cartaCima from './assets/parteCima.png'
import cartaBaixo from './assets/parteBaixo.png'

import pixImg from './assets/pixImg.jpeg'

import goldBaloon from './assets/gold.png'
import whiteBaloon from './assets/white.png'

import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { GaleriaAlbum } from './GaleriaAlbum'

const listaFotos = [a, b, c, d, e, f, g]

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="app-container">
      {/* 
        Ajuste do total de páginas da rolagem: 
        Proporção 1080x1920 exige distribuição mais equilibrada de offsets.
      */}
      <Parallax pages={isMobile ? 6.7 : 5.2}>

        {/* --- METADE DE CIMA DA CARTA --- */}
        <ParallaxLayer
          offset={0}
          speed={isMobile ? 2 : 2}
          factor={1}
          style={{
            backgroundImage: `url(${cartaCima})`,
            backgroundPosition: 'top center', // Faz a imagem colar no topo absoluto
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh', // Ocupa a altura total do viewport
            zIndex: 3,
          }}
        />

        {/* --- CAMADA INFERIOR DA CARTA --- */}
        <ParallaxLayer
          offset={isMobile ? 0.19 : 0.255}
          speed={isMobile ? -3 : -3}
          factor={1}
          style={{
            backgroundImage: `url(${cartaBaixo})`,
            backgroundPosition: 'top center', // Alinhado ao topo para encaixar com a parte de cima
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: isMobile ? '75vh' : '120vh',
            zIndex: 2,
          }}
        />

        {/* --- NOMES DO CASAL --- */}
        <ParallaxLayer
          offset={isMobile ? 0.34 : 0.4}
          speed={isMobile ? 0.2 : 0.8}
          factor={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <div className="overlay-conteudo">
            <h1 className="titulo-casamento">Estêvão</h1>
            <h1 className="titulo-casamento-e">&</h1>
            <h1 className="titulo-casamento">Jayanne</h1>
            <p className="subtitulo">Nosso Casamento</p>
          </div>
        </ParallaxLayer>

        {/* --- TRANSIÇÃO / VERSÍCULO 1 --- */}
        <ParallaxLayer
          offset={.9}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div className="card-versiculo">
            <p className="texto-versiculo">
              "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha."
            </p>
            <span className="referencia-biblia">1 Coríntios 13:4</span>
          </div>
        </ParallaxLayer>

        {/* --- ÁLBUM DE FOTOS --- */}
        <ParallaxLayer
          offset={isMobile ? 1.7 : 1.6}
          speed={0.5}
          factor={1.1}
          style={{
            backgroundColor: '#f8f6f0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div className="overlay-conteudo">
            <GaleriaAlbum fotos={listaFotos} />
          </div>
        </ParallaxLayer>

        {/* --- FOTO DO CASAL --- */}
        <ParallaxLayer
          offset={isMobile ? 2.8 : 2.6}
          speed={isMobile ? 0.3 : 0.8}
          factor={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <div className="container-foto-casal">
            <img 
              src={foto1} 
              alt="Foto do Casal" 
            />
          </div>
        </ParallaxLayer>

        {/* --- TRANSIÇÃO / VERSÍCULO 2 --- */}
        <ParallaxLayer
          offset={isMobile ? 3.8 : 3.5}
          speed={0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <div className="card-versiculo card-versiculo-dark">
            <p className="texto-versiculo">
              "Acima de tudo, porém, revistam-se do amor, que é o elo da perfeição."
            </p>
            <span className="referencia-biblia">Colossenses 3:14</span>
          </div>
        </ParallaxLayer>

        {/* --- CONFIRMAÇÃO, PIX & ENDEREÇO --- */}
        <ParallaxLayer 
          offset={isMobile ? 4.1 : 4.1}
          speed={0.5}
          factor={isMobile ? 2.2 : 1.4} // Aumentado para dar espaço vertical suficiente no celular
          style={{
            backgroundColor: '#0b1d3a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isMobile ? 'flex-start' : 'center', // No celular começa do topo para não cortar o final
            alignItems: 'center',
            zIndex: 1,
            padding: isMobile ? '20px 15px 80px 15px' : '30px 15px', // Padding inferior extra no celular para respiro
          }}
        >
          <div className="overlay-conteudo" style={{ maxWidth: '450px', width: '100%' }}>
            <h1 className="titulo-casamento titulo-confirmar">Você estará lá?</h1>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczu6fLJ5jEkWmCU4g7JBigAbDINQ4PLSgxcSKlGnqUZdLaew/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-confirmar"
            >
              Confirmar Presença
            </a>

            {/* --- SEÇÃO PIX --- */}
            <div className="secao-pix">
              <h2 className="titulo-endereco titulo-pix">
                Patrocina nois 💸
              </h2>
              <p className="subtexto-pix">
                Ajude os noivos na viagem de lua de mel!
              </p>

              <div>
                <img 
                  src={pixImg} 
                  alt="QR Code Pix" 
                  className="img-pix"
                />
              </div>

              <p className="texto-endereco texto-chave-pix">
                Chave Pix: <span>suachavepixaqui@exemplo.com</span>
              </p>
            </div>

            {/* --- SEÇÃO ENDEREÇO --- */}
            <div className="secao-endereco">
              <h2 className="titulo-endereco">Endereço</h2>
              <p className="texto-endereco">
                Rua Albina Alves, Nova Angra <br />
                Data: 04/03/2027, às 18 horas
              </p>
              
              <div className="container-mapa">
                <iframe
                  title="Mapa do Local"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4557726228436!2d-44.2869327!3d-22.9702618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c4f8091470b41%3A0x1d46584571f1772d!2sParty%20House!5e0!3m2!1spt-BR!2sbr!4v1794281971921!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App