import { useState } from 'react'
import foto1 from './assets/estevaojai.png' 

import a from './assets/a.jpeg'
import b from './assets/b.jpeg'
import c from './assets/c.jpeg'
import d from './assets/d.jpeg'
import e from './assets/e.jpeg'
import f from './assets/f.jpeg'
import g from './assets/g.jpeg'

import goldBaloon from './assets/gold.png'
import whiteBaloon from './assets/white.png'

import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { GaleriaAlbum } from './GaleriaAlbum'

const listaFotos = [a, b, c, d, e, f, g]

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0b1d3a' }}>
      <Parallax pages={4.1}>

        {/* --- PÁGINA 1: CAPA INICIAL (Azul Marinho Nobre) --- */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            backgroundColor: '#0b1d3a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="overlay-conteudo card-solido">
            <h1 className="titulo-casamento">Estêvão</h1>
            <h1 className="titulo-casamento-e">&</h1>
            <h1 className="titulo-casamento">Jayanne</h1>
            <div className="divisor-elegante"></div>
            <p className="subtitulo">Nosso Casamento</p>
          </div>
        </ParallaxLayer>

        {/* --- TRANSIÇÃO / VERSÍCULO 1 --- */}
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

        {/* --- PÁGINA 2: ÁLBUM DE FOTOS (Fundo Bege Claro / Soft Vanilla) --- */}
        <ParallaxLayer
          offset={1.5}
          speed={0.5}
          style={{
            backgroundColor: '#f8f6f0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="overlay-conteudo">
            <GaleriaAlbum fotos={listaFotos} />
          </div>
        </ParallaxLayer>

        {/* --- TRANSIÇÃO / VERSÍCULO 2 --- */}
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
          <div className="card-versiculo card-versiculo-dark">
            <p className="texto-versiculo">
              "Acima de tudo, porém, revistam-se do amor, que é o elo da perfeição."
            </p>
            <span className="referencia-biblia">Colossenses 3:14</span>
          </div>
        </ParallaxLayer>

        {/* --- PÁGINA 3: CONFIRMAÇÃO & ENDEREÇO (Fundo Azul Marinho Nobre) --- */}
        <ParallaxLayer 
          offset={3}
          speed={0.5}
          style={{
            backgroundColor: '#0b1d3a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="overlay-conteudo">
            <h1 className="titulo-casamento">Você estará lá?</h1>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczu6fLJ5jEkWmCU4g7JBigAbDINQ4PLSgxcSKlGnqUZdLaew/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-confirmar"
            >
              Confirmar Presença
            </a>

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
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* --- BALÕES DECORATIVOS --- */}
        <ParallaxLayer offset={0.3} speed={1.2} style={{ pointerEvents: 'none' }}>
          <img src={goldBaloon} alt="Balão Dourado" className="balloon-img" style={{ left: '8%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={1.8} style={{ pointerEvents: 'none' }}>
          <img src={whiteBaloon} alt="Balão Branco" className="balloon-img" style={{ left: '82%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={1.2} style={{ pointerEvents: 'none' }}>
          <img src={goldBaloon} alt="Balão Dourado" className="balloon-img" style={{ left: '12%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.1} speed={1.6} style={{ pointerEvents: 'none' }}>
          <img src={whiteBaloon} alt="Balão Branco" className="balloon-img" style={{ left: '78%' }} />
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App