import Image from "next/image";

import randomlogo from "../../lib/utils/tech-logs.js";

const SliderCard = (props) => {
  const { color, iconsrc } = props;
  const logosrc = randomlogo();
  return (
    <div className="card_box">
      <Image src={logosrc} width="64" height="64" alt="logo" />

      {/* static styles */}
      <style jsx>{`
        .card_box {
          width: 75%;
          margin: 4%;
          background: rgb(32, 36, 43);
          background: radial-gradient(
            circle,
            rgba(32, 36, 43, 1) 0%,
            rgba(51, 56, 65, 0.8) 100%
          );
          border-radius: 10px;
          height: 9rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      {/* dynamic  styles */}
      {/* <style jsx></style> */}
    </div>
  );
};

export default SliderCard;
