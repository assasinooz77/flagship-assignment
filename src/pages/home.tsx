import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components';

import Header from '../components/header';
import Swap from './swap';

const Container = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.text1};
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  min-height: 100vh;
`;

const Home = () => (
  <Container>
    <Header />
    <Swap />
    <ToastContainer />
  </Container>
);

export default Home;
