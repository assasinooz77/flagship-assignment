import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components';

import Header from '../components/header';

const Container = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.text1};
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Home = () => (
  <Container>
    <Header />
    <Content>Home</Content>
    <ToastContainer />
  </Container>
);

export default Home;
