import { useState } from 'react'
import foto1 from './assets/estevaojai.png' 
import foto2 from './assets/estevaojai2.jpeg' 
import foto3 from './assets/estevaojai3.png'

import goldBaloon from './assets/gold.png'
import whiteBaloon from './assets/white.png'

import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      {/* Ajustamos o número de páginas para 4 para dar espaço aos versículos */}
      <Parallax pages={4}>

        {/* --- PÁGINA 1: FOTO 1 --- */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            backgroundImage: `url(${foto1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="overlay-conteudo">
            <br></br>
            <h1 className="titulo-casamento">Estevão</h1><br></br><br></br>
            <h1 className="titulo-casamento">&</h1><br></br><br></br>
            <h1 className="titulo-casamento">Jaiane</h1><br></br><br></br>
            <p className="subtitulo">Nosso Casamento</p>
          </div>
        </ParallaxLayer>

        {/* --- TRANSIÇÃO / VERSÍCULO 1 (Entre Foto 1 e Foto 2) --- */}
        <ParallaxLayer
          offset={0.99}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div className="card-versiculo">
            <p className="texto-versiculo">
              "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha."
            </p>
            <span className="referencia-biblia">1 Coríntios 13:4</span>
          </div>
        </ParallaxLayer>

        {/* --- PÁGINA 2: FOTO 2 --- */}
        <ParallaxLayer
          offset={1.5}
          speed={0.5}
          style={{
            backgroundImage: `url(${foto2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="overlay-conteudo">
            <br></br>
            <h1 className="titulo-secao">A Nossa</h1><br></br>
            <h1 className="titulo-secao">História</h1><br></br>
          </div>
        </ParallaxLayer>

        {/* --- TRANSIÇÃO / VERSÍCULO 2 (Entre Foto 2 e Foto 3) --- */}
        <ParallaxLayer
          offset={2.49}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div className="card-versiculo">
            <p className="texto-versiculo">
              "Acima de tudo, porém, revistam-se do amor, que é o elo da perfeição."
            </p>
            <span className="referencia-biblia">Colossenses 3:14</span>
          </div>
        </ParallaxLayer>

        {/* --- PÁGINA 3: FOTO 3 --- */}
        <ParallaxLayer 
          offset={3}
          speed={0.5}
          style={{
            backgroundImage: `url(${foto3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="overlay-conteudo">
            <h1 className="titulo-casamento">Você estará</h1><br></br><br></br>
            <h1 className="titulo-casamento">lá?</h1>

            {/* Botão elegante escondendo a URL do formulário */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSczu6fLJ5jEkWmCU4g7JBigAbDINQ4PLSgxcSKlGnqUZdLaew/viewform?usp=publish-editor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-confirmar"
            >
              Confirmar Presença
            </a>
          </div>
        </ParallaxLayer>


        {/* ============================================================ */}
        {/* --- BALÕES COM AS IMAGENS (gold e white) --- */}
        {/* ============================================================ */}

        <ParallaxLayer offset={0.3} speed={1.5} style={{ pointerEvents: 'none' }}>
          <img src={goldBaloon} alt="Balão Dourado" className="balloon-img" style={{ left: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={2} style={{ pointerEvents: 'none' }}>
          <img src={whiteBaloon} alt="Balão Branco" className="balloon-img" style={{ left: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={1.4} style={{ pointerEvents: 'none' }}>
          <img src={goldBaloon} alt="Balão Dourado" className="balloon-img" style={{ left: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.1} speed={1.8} style={{ pointerEvents: 'none' }}>
          <img src={whiteBaloon} alt="Balão Branco" className="balloon-img" style={{ left: '75%' }} />
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App