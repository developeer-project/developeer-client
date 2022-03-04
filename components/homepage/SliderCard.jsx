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
          min-width: 40%;
          margin: 4%;
          background-color: #e80073;
          height: 100pt;

          box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
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
