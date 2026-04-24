import { fiverrProfile } from "@/utility/fiverrContent";

const marqueeItems = [
  "Fiverr orders accepted worldwide",
  "Website design, redesign, and landing page services",
  `Get in touch - phone: ${fiverrProfile.phone}`,
  "Message first on Fiverr for custom offers and package guidance",
];

const Marque = () => {
  return (
    <div className="marque-section-2">
      <div className="container-fluid">
        <div className="marquee-wrapper text-slider style-height-2">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item style-3">
                {Array.from({ length: 3 }).map((_, repeatIndex) =>
                  marqueeItems.map((item, itemIndex) => (
                    <span className="text-slider" key={`${repeatIndex}-${itemIndex}-${item}`}>
                      {itemIndex % 2 === 0 ? (
                        <>
                          <img src="assets/img/asterisk-2.svg" alt="img" /> {item}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  ))
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marque;
