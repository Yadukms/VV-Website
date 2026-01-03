// import "./Gallery.css";

// export default function Gallery() {
//   return (
//     <section className="gallery-section">
//       <div className="gallery-wrapper">

//         {/* ROW 1 */}
//         <div className="gallery-row">
//           <img className="img-wide" src="/images/gallery/g1.jpg" alt="" />
//           <img className="img-small" src="/images/gallery/g2.jpg" alt="" />
//           <img className="img-small" src="/images/gallery/g3.jpg" alt="" />
//         </div>

//         {/* ROW 2 */}
//         <div className="gallery-row">
//           <img className="img-small" src="/images/gallery/g4.jpg" alt="" />
//           <img className="img-small" src="/images/gallery/g5.jpg" alt="" />
//           <img className="img-wide" src="/images/gallery/g6.jpg" alt="" />
//         </div>

//       </div>
//     </section>
//   );
// }

import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery-section">
      
      {/* ROW 1 */}
      <div className="gallery-row auto-scroll">
        <div className="gallery-track">
          <img className="img-wide" src="/images/gallery/g1.jpg" />
          <img className="img-small" src="/images/gallery/g2.jpg" />
          <img className="img-small" src="/images/gallery/g3.jpg" />

          {/* duplicate for loop */}
          <img className="img-wide" src="/images/gallery/g1.jpg" />
          <img className="img-small" src="/images/gallery/g2.jpg" />
          <img className="img-small" src="/images/gallery/g3.jpg" />
        </div>
      </div>

      {/* ROW 2 */}
      <div className="gallery-row auto-scroll reverse">
        <div className="gallery-track">
          <img className="img-small" src="/images/gallery/g4.jpg" />
          <img className="img-small" src="/images/gallery/g5.jpg" />
          <img className="img-wide" src="/images/gallery/g6.jpg" />

          {/* duplicate for loop */}
          <img className="img-small" src="/images/gallery/g4.jpg" />
          <img className="img-small" src="/images/gallery/g5.jpg" />
          <img className="img-wide" src="/images/gallery/g6.jpg" />
        </div>
      </div>

    </section>
  );
}

