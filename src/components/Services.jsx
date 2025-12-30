import './Services.css';

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-cards">
        {/* Corporate Card */}
        <div className="service-card service-card--large">
          <div className="service-content">
            <h3>Corporate Events</h3>
            <p>
              Elevate Your Corporate Events with Professional Entertainment
              Subheadline: From team celebrations to client galas, we bring the
              perfect vibe to match your company’s vision and create memorable
              experiences that strengthen connections.
            </p>
          </div>

          {/* <button className="service-cta">SEE DETAILS</button> */}
        </div>

        {/* Social Card */}
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
      </div>
      <button className="service-btn">SEE DETAILS</button>
    </section>
  );
}
