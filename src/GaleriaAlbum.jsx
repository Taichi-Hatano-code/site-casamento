import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function GaleriaAlbum({ fotos }) {
  return (
    <div className="container-galeria">
      <h2 className="titulo-secao">Álbum de Fotos</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        className="swiper-album"
      >
        {fotos.map((foto, index) => (
          <SwiperSlide key={index}>
            {/* Removido o onClick e a classe lightbox */}
            <div className="card-foto-vertical">
              <img src={foto} alt={`Foto ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}