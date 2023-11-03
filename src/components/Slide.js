import "./styles/css/slide.css";
import "./styles/js/slide";

export default function Slide({ logo }) {
  const copy = [...logo];
  const copy2 = [...logo];
  const copy3 = [...logo];
  const copy4 = [...logo];
  const join = [...logo, ...copy, ...copy2,...copy3,...copy4];

  return (
    <div className="slide-container md:h-28 sm:h-28 h-24">
      <div className="slider md:h-28 sm:h-28 h-24">
        <div
          className={`slide-track`}
          style={{ width: `${200 * join.length}px` }}
        >
          {
          join.map((a, key) => {
            return (
              <div key={key} className="slide md:h-28 sm:h-28 h-24">
                <img className="img-slide sm:mx-10 md:mx-14 mx-1 md:w-24 md:h-24 sm:w-24 sm:h-28 w-5 h-20" src={a} />
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  );
}
