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
          width: 45%;

          margin: 4px;
          height: 8rem;
          display: flex;
          justify-content: center;
          align-items: center;

          background: rgb(32, 36, 43);
          background: radial-gradient(
            circle,
            rgba(32, 36, 43, 1) 0%,
            rgba(51, 56, 65, 0.8) 100%
          );
          border-radius: 10px;
        }

        .card_box {
          animation: MoveUpDown 20s linear infinite;
        }

        @keyframes MoveUpDown {
          0% {
            transform: translateY(-150px);
          }

          50% {
            transform: translateY(150px);
          }

          100% {
            transform: translateY(-150px);
          }
        }
      `}</style>
      {/* dynamic  styles */}
      {/* <style jsx></style> */}
    </div>
  );
};

export default SliderCard;
