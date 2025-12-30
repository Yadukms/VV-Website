import './Services.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>

      <Swiper
        modules={[Scrollbar]}
        slidesPerView="auto"
        spaceBetween={56}
        grabCursor={true}
        speed={600}
        scrollbar={{
          draggable: true, // 🔥 THIS IS WHAT YOU WANT
        }}
        className="services-swiper"
      >
        <SwiperSlide className="services-slide">
          <div className="service-card service-card--large">
            {/* <button className="service-btn">SEE DETAILS</button> */}
            <div className="service-content">
              <h3>Corporate Events</h3>
              <p>
                Elevate Your Corporate Events with Professional Entertainment
                Subheadline: From team celebrations to client galas, we bring
                the perfect vibe to match your company’s vision and create
                memorable experiences that strengthen connections.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="services-slide">
          <div className="service-card service-card--small">
            <div className="service-content">
              <h3>Social Events</h3>
              <p>
                From intimate gatherings to epic parties, we bring the energy,
                creativity, and personal touch that makes your social events
                extraordinary.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="service-btn">SEE DETAILS</button>
    </section>
  );
}
