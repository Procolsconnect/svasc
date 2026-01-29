import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ValuesCarousel = () => {
    return (
        <div className="values-carousel-scope">
            <style>{`
        .values-carousel-scope {
          --tst: bottom 0.5s ease 0s;
          --dark: #E6E6E6EE;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          overflow-x: hidden;
          background: #ffffff;
          width: 100%;
        }

        .values-carousel-scope * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Reduced top padding from 60px to 20px to reduce space */
        .values-carousel-scope .header {
            text-align: center;
            padding: 0 20px 10px;
        }

        .values-carousel-scope .header h1 {
            font-size: 3em;
            margin: 0 0 15px;
            color: #003366;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        .values-carousel-scope .header h2 {
            font-size: 1.5em;
            margin: 0;
            color: #555;
            font-weight: 400;
            line-height: 1.5;
            max-width: 800px;
            margin: 0 auto;
        }

        .values-carousel-scope .swiper {
            width: 100%;
            padding-top: 20px; /* Reduced from 30px */
            padding-bottom: 50px; /* Reduced from 70px */
        }

        .values-carousel-scope .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 400px;
            height: 500px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            /* Ensure shadow is visible */
            box-shadow: 0 15px 50px rgba(0,0,0,0.2);
        }

        .values-carousel-scope .swiper-slide-shadow-left {
            background-image: linear-gradient(to left, #000, #fff0);
            border-right: 1px solid #000;
            border-radius: 10px;
        }

        .values-carousel-scope .swiper-slide-shadow-right {
            background-image: linear-gradient(to right, #000, #fff0);
            box-shadow: 0 0 0 1px #000;
            border-radius: 10px;
        }

        .values-carousel-scope .swiper-pagination-bullet {
            background: #696969;
            transition: all 0.5s ease 0s;
            border-radius: 8px;
            width: 8px;
            height: 8px;
            display: inline-block;
            opacity: 1;
        }

        .values-carousel-scope .swiper-pagination-bullet-active {
            background: #ffc107;
            width: 30px;
        }

        .values-carousel-scope .info {
            position: absolute;
            width: 100%;
            height: 50%;
            text-align: center;
            background: linear-gradient(180deg, #fff0 0, #0008 50px), linear-gradient(180deg, #fff0, #0009);
            padding: 15px;
            padding-top: 70px;
            left: 0;
            bottom: -100%; /* Force hidden initially */
            box-sizing: border-box;
            transition: var(--tst);
            z-index: 10;
        }

        /* Ensure specificity for active slide */
        .values-carousel-scope .swiper-slide-active .info {
            bottom: 0 !important;
            transition: var(--tst);
        }
        
        /* Fix for swiper wrapper layout to ensure coverflow 3d works */
        .swiper-wrapper {
             z-index: 1;
        }

        .values-carousel-scope .info span {
            width: 100%;
            margin: 0.25em 0 0.25em 0;
            display: inline-block;
            padding: 0.55em 0.5em 0.55em 4em;
            box-sizing: border-box;
            color: var(--dark);
            text-align: left;
            position: relative;
            text-transform: uppercase;
            font-size: 12px;
            border-radius: 2em;
        }

        .values-carousel-scope .info span:hover {
            background: #0008;
            filter: invert(1);
        }

        .values-carousel-scope .info span:before,
        .values-carousel-scope .info span:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            background: #fff8;
            height: 100%;
            max-width: 2em;
        }

        /* Icons - using nth-child selectors scoped */
        .values-carousel-scope .info span:nth-child(1):before {
            background: radial-gradient(circle at 50% 50%, var(--dark) 2px, #fff0 3px 150%);
            width: 7px;
            height: 6px;
            border-radius: 100% 100% 100% 40%;
            left: 16px;
            top: 2px;
            border: 3px solid var(--dark);
            border-top-color: #fff0;
            background-repeat: no-repeat;
            transform: rotate(29deg);
        }

        .values-carousel-scope .info span:nth-child(1):after {
            background: linear-gradient(180deg, var(--dark) 1px, #fff0 1px 150%);
            width: 4px;
            height: 7px;
            border-radius: 100% 50% 100% 0%;
            left: 15px;
            top: 13px;
            border: 3px solid var(--dark);
            border-bottom-color: #fff0;
            background-repeat: no-repeat;
            transform: rotate(-1deg);
        }

        .values-carousel-scope .info span:nth-child(2):before {
            background: radial-gradient(circle at 50% 42%, var(--dark) 2px, #fff0 3px 4px, var(--dark) 5px 100%);
            width: 20px;
            height: 13px;
            left: 11px;
            top: 8px;
            border-radius: 2px;
        }

        .values-carousel-scope .info span:nth-child(2):after {
            border: 10px solid #fff0;
            border-width: 0px 2px 4px 2px;
            border-bottom-color: var(--dark);
            width: 10px;
            background: #fff0;
            height: 0px;
            left: 14px;
            top: 5px;
        }

        /* Simplified gradients for better React compatibility in string literals */
        .values-carousel-scope .info span:nth-child(3):before {
            width: 22px;
            height: 22px;
            left: 11px;
            top: 3px;
            background: 
                radial-gradient(circle at 60% 50%, var(--dark) 1px, #fff0 2px 100%),
                radial-gradient(circle at 37% 70%, var(--dark) 1px, #fff0 2px 100%),
                radial-gradient(circle at 52% 64%, var(--dark) 1px, #fff0 2px 100%),
                radial-gradient(circle at 45% 42%, var(--dark) 1px, #fff0 2px 100%),
                radial-gradient(circle at 49% 25%, var(--dark) 1px, #fff0 2px 100%),
                radial-gradient(circle at 61% 15%, var(--dark) 1px, #fff0 2px 100%),
                radial-gradient(circle at 18% 84%, #fff0 1px, var(--dark) 2px 3px, #fff0 4px 100%),
                radial-gradient(circle at 85% 16%, #fff0 1px, var(--dark) 2px 3px, #fff0 4px 100%);
        }

        .values-carousel-scope .info span:nth-child(4):before {
            border: 10px solid #fff0;
            height: 0;
            border-bottom-color: var(--dark);
            border-width: 0 6px 10px 6px;
            left: 12px;
            top: 10px;
            background: #fff0;
        }

        .values-carousel-scope .info span:nth-child(4):after {
            border: 10px solid #fff0;
            height: 0;
            border-bottom-color: var(--dark);
            border-width: 0 6px 15px 6px;
            left: 18px;
            top: 5px;
            background: #fff0;
        }

        .values-carousel-scope .info span:nth-child(5):before {
            width: 16px;
            height: 16px;
            border-radius: 100%;
            left: 13px;
            top: 3px;
            background: radial-gradient(circle at 50% 50%, var(--dark) 2px, #fff0 3px 4px, var(--dark) 5px 100%);
        }

        .values-carousel-scope .info span:nth-child(5):after {
            border: 10px solid #fff0;
            height: 0;
            border-top-color: var(--dark);
            border-width: 8px 6px 0 6px;
            left: 15px;
            top: 16px;
            background: #fff0;
        }
      `}</style>

            <div className="header">
                <h1>Our Unique Values</h1>
                <h2>What makes SVASC the Best College of Arts and Science in Erode</h2>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'} /* Changed to auto to respect CSS width */
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }} /* Made proper object */
                breakpoints={{
                    320: {
                        slidesPerView: 1.5
                    },
                    600: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    }
                }}
                modules={[EffectCoverflow, Pagination]}
                className="swiper"
            >
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-tonin-rocodromo.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Carlos Rubio</span>
                        <span title="Photo">Josetxu López</span>
                        <span title="Route">Toñin (7b)</span>
                        <span title="Sector">El Rocodromo</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-normal-caliz.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Josetxu López</span>
                        <span title="Photo">Uge Garcia</span>
                        <span title="Route">Normal (Ae)</span>
                        <span title="Sector">El Caliz</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-cumbre-totem.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Antonio, Aitor, Uge & Josefer</span>
                        <span title="Photo">Josetxu López</span>
                        <span title="Route">Sur Clasica (6a)</span>
                        <span title="Sector">El Totem</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-oscar-raul-hueco-hoces2.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Aitor Saz</span>
                        <span title="Photo">Tximo</span>
                        <span title="Route">Oscar & Raul (6a)</span>
                        <span title="Sector">Hueco de las Hoces</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-gallego-cueva-mora.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Jarutxi Mora</span>
                        <span title="Photo">Fernando Bulnes</span>
                        <span title="Route">Gallego (V+)</span>
                        <span title="Sector">Cueva de la Mora</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-chimenea-tortuga.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Nacho Ruiz</span>
                        <span title="Photo">Josetxu López</span>
                        <span title="Route">Chimenea (6a)</span>
                        <span title="Sector">La Tortuga</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-blues-ojos-bonitos-tres-coronas.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Marino</span>
                        <span title="Photo">Josetxu López</span>
                        <span title="Route">Blues de los ojos bonitos (6a+)</span>
                        <span title="Sector">Tres Coronas</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-capuchon-sarcofago.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Josetxu & Uge</span>
                        <span title="Photo">Antonio Montes</span>
                        <span title="Route">El Capuchon (6a/A1)</span>
                        <span title="Sector">El Sarcofago</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-rosario-cueva-mora.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Eloy Atajos</span>
                        <span title="Photo">Josetxu López</span>
                        <span title="Route">Rosario (Vº)</span>
                        <span title="Sector">Cueva de la Mora</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-me-pesa-hasta-el-aire-dehesilla.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Indio</span>
                        <span title="Photo">Jarutxi Mora</span>
                        <span title="Route">Me pesa hasta el aire (A2/A3?)</span>
                        <span title="Sector">Risco de la Dehesilla</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://cdn.josetxu.com/img/gp-anonima-tres-coronas.jpg)' }}>
                    <div className="info">
                        <span title="Climber">Krispin Talavera</span>
                        <span title="Photo">Josetxu López</span>
                        <span title="Route">Anónima (6c)</span>
                        <span title="Sector">Tres Coronas</span>
                        <span title="Zone">La Pedriza</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ValuesCarousel;
