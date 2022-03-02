import Slider from "./Slider";

const TopSection = () => {
  return (
    <section className="s-top">
      <div className="container">
        <Slider />
        <main>
          <div id="my-background"></div>
          Vanta goes here
        </main>
        <Slider />
      </div>

      {/* STYLES BELOW */}

      {/* <style jsx>{``}</style> */}
    </section>
  );
};

export default TopSection;
