import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/header";
import styled from "styled-components";

const MainContainer = styled.div`
  background: #f7f7f7;
  min-height: 100vh;
`;

const TopContent = styled.div`
  max-width: 1280px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;

const HalfCard = styled.div`
  width: 50%;
  height: 350px;
  background-color: black;
  position: relative;
`;

const HalfCardImage = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
`;

function App() {
  return (
    <div>
      <Header />
      <MainContainer>
        <TopContent>
          <HalfCard>
            <HalfCardImage
              src="https://media.pitchfork.com/photos/61cc7cd70c18011163e16bd8/2:1/w_648/Vinyl-Records.jpg"
              alt="Vinyl record collection"
              class="half-width-module__img"
            />
          </HalfCard>
        </TopContent>
      </MainContainer>
    </div>
  );
}

export default App;
