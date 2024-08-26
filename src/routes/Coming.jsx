import ButtonGradient from "../assets/svg/ButtonGradient";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Coming = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ComingSoon/>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Coming;
