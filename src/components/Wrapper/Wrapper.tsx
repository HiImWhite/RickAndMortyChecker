import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import WrapperProps from '../../interfaces/WrapperProps';

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
