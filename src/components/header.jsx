import React, { useState } from "react";
import styled from "styled-components";

const Logo = styled.div`
  width: 18rem;
  height: 3.1rem;
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  margin-top: 64px;
`;

const HeaderLinks = styled.div`
  display: flex;
  margin-right: 10px;
`;

const HeaderLink = styled.div`
  font-weight: bold;
  padding: 2.9rem 1.5rem 3.5rem;

  color: #2b2b2b;
`;

const IconPlaceholder = styled.div`
  //   width: 50px;
  //   height: 50px;
  //   background-color: gray;
  //   margin-top: 10px;
  margin: 10px;
`;

const SocialIcons = styled.div`
  position: absolute;
  left: 10px;
  top: 0;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const RightIcons = styled.div`
  position: absolute;
  right: 10px;
  top: 0;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const MusicPlayerIcon = styled.div`
  margin: 10px;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  &.player-on {
    svg {
      fill: red;
    }
  }
`;

const MusicPlayer = styled.div`
  width: 100vw;
  height: 75px;
  background-color: black;
  display: none;
  transition: opacity .3s ease-in-out,filter .3s ease-in-out,-webkit-filter .3s ease-in-out;
  transition: top .3s;
  &.player-on {
      display: inherit;
  }
  
`;

export default function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div>
      <HeaderContainer>
        <SocialIcons>
          <IconPlaceholder>
            <svg x="0px" y="0px" viewBox="0 0 41 41">
              <circle
                class="ring"
                fill="none"
                stroke-miterlimit="10"
                cx="20.5"
                cy="20.5"
                r="20"
              ></circle>
              <path
                class="fb-mark mark"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24,13c0,0.9,0,2.4,0,2.4s-1.8-0.2-2.2,0.5c-0.2,0.4-0.1,1.5-0.1,2.2c0.8,0,1.6,0,2.4,0c-0.2,0.9-0.3,1.5-0.5,2.3c-0.7,0-1.9,0-1.9,0V28c0,0-2.2,0-3.3,0c0-2.3,0-5,0-7.5c-0.5,0-0.9,0-1.4,0c0-0.9,0-1.5,0-2.4c0.5,0,0.9,0,1.4,0c0.1-1.7,0.1-3.4,1-4.3C20.3,12.9,21.2,13,24,13z"
              ></path>
            </svg>
          </IconPlaceholder>

          <IconPlaceholder>
            <svg class="twitter-button" x="0px" y="0px" viewBox="0 0 41 41">
              <circle
                class="ring"
                fill="none"
                stroke-miterlimit="10"
                cx="20.5"
                cy="20.5"
                r="20"
              ></circle>
              <path
                class="twitter-mark mark"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.8,14.6c1.2,0,1.8,0.4,2.4,1c0.5,0,1.2-0.3,1.6-0.5c0.1-0.1,0.3-0.1,0.4-0.2c-0.2,0.6-0.5,1.1-1,1.4c-0.1,0.1-0.2,0.2-0.3,0.2c0,0,0,0,0,0c0.7,0,1.2-0.3,1.7-0.5c0,0,0,0,0,0c-0.3,0.4-0.6,0.9-1,1.2c-0.2,0.1-0.3,0.3-0.5,0.4c0,0.7,0,1.4-0.1,1.9c-0.8,3.4-2.8,5.7-5.9,6.7c-1.1,0.4-3,0.5-4.3,0.2c-0.6-0.2-1.2-0.3-1.8-0.6c-0.3-0.1-0.6-0.3-0.9-0.4c-0.1-0.1-0.2-0.1-0.3-0.2c0.3,0,0.6,0.1,1,0c0.3,0,0.6,0,0.9-0.1c0.7-0.2,1.3-0.3,1.8-0.7c0.3-0.1,0.6-0.3,0.8-0.5c-0.3,0-0.6-0.1-0.9-0.2c-1-0.3-1.6-1-1.9-1.9c0.3,0,1.2,0.1,1.4-0.1c-0.4,0-0.7-0.2-1-0.4c-0.8-0.5-1.4-1.3-1.4-2.6c0.1,0,0.2,0.1,0.3,0.1c0.2,0.1,0.4,0.1,0.6,0.2c0.1,0,0.3,0.1,0.4,0c0,0,0,0,0,0c-0.2-0.2-0.4-0.3-0.6-0.5c-0.5-0.6-1-1.6-0.7-2.8c0.1-0.3,0.2-0.6,0.3-0.8c0,0,0,0,0,0c0.1,0.1,0.2,0.2,0.3,0.3c0.3,0.3,0.6,0.6,0.9,0.9c1.1,0.9,2.1,1.4,3.7,1.8c0.4,0.1,0.9,0.2,1.4,0.2c-0.1-0.4-0.1-1,0-1.4c0.3-1,0.9-1.7,1.7-2c0.2-0.1,0.4-0.2,0.7-0.2C23.5,14.6,23.7,14.6,23.8,14.6z"
              ></path>
            </svg>
          </IconPlaceholder>
          <IconPlaceholder>
            <svg x="0px" y="0px" viewBox="0 0 41 41">
              <circle
                class="ring"
                fill="none"
                stroke-miterlimit="10"
                cx="20.5"
                cy="20.5"
                r="20"
              ></circle>
              <path
                class="instagram-mark mark"
                d="M26.1,13.1H14.9c-1,0-1.9,0.8-1.9,1.9v11.3c0,1,0.8,1.9,1.9,1.9h11.1c1,0,1.9-0.8,1.9-1.9V15C27.9,13.9,27.1,13.1,26.1,13.1z M23.6,20.6c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-0.5,0.1-1,0.3-1.4c0.5-1,1.5-1.7,2.7-1.7c1.2,0,2.2,0.7,2.7,1.7C23.4,19.6,23.6,20.1,23.6,20.6z M26.3,25.7c0,0.4-0.3,0.8-0.8,0.8h-9.9c-0.4,0-0.8-0.3-0.8-0.8v-6.5h1.3c-0.1,0.4-0.2,0.9-0.2,1.4c0,2.6,2.1,4.6,4.6,4.6c2.6,0,4.6-2.1,4.6-4.6c0-0.5-0.1-1-0.2-1.4h1.3L26.3,25.7L26.3,25.7z M26.3,16.8c0,0.4-0.3,0.8-0.8,0.8h-1.2c-0.4,0-0.8-0.3-0.8-0.8v-1.3c0-0.3,0.2-0.6,0.5-0.7h1.4c0.4,0,0.8,0.3,0.8,0.8L26.3,16.8L26.3,16.8z"
              ></path>
            </svg>
          </IconPlaceholder>
        </SocialIcons>

        <div>
          <Logo>
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 115.1 20">
              <g>
                <path d="M0,18.1c1.5,0,2.1-0.7,2.1-2.3V4.2c0-1.6-0.5-2.3-2.1-2.3V0.3h8.6c4.7,0,7.8,2.1,7.8,5.8 c0,3.4-2.8,5.8-7.9,5.8H7.1v3.8c0,1.8,0.9,2.3,3.4,2.3v1.6H0V18.1z M7.1,1.8v8.7h0.8c2.4,0,3.7-1.8,3.7-4.4c0-2.7-1.3-4.3-3.8-4.3 H7.1z"></path>
                <path d="M16.6,18.1c1.4,0,1.9-0.6,1.9-2.1v-5.4c0-0.8-0.6-1.3-1.4-1.2l-0.5,0V7.7l5.3-1.6h1.3v9.8 c0,1.5,0.5,2.1,1.9,2.1v1.6h-8.6V18.1z M20.9,0.5c1.4,0,2.6,1.2,2.6,2.6c0,1.4-1.2,2.6-2.6,2.6c-1.4,0-2.6-1.2-2.6-2.6 C18.3,1.7,19.4,0.5,20.9,0.5"></path>
                <path d="M26.4,8.7h-1.8V7.6c2.1-0.6,4.7-2.3,5.5-4.8h1v4.2h3.3v1.7h-3.3v6.5c0,1.6,0.9,2.1,1.8,2.1 c0.6,0,1.3-0.2,1.7-0.5l0.5,0.9C34.3,19,32.4,20,30.5,20c-2.8,0-4.1-1.7-4.1-4.5V8.7z"></path>
                <path d="M41.9,6.1c1.8,0,3.4,0.5,4.9,1.3L45.1,12H44c-0.3-2.8-1.6-3.9-3-3.9c-1.7,0-2.7,1.5-2.7,3.5 c0,3,2.1,4.5,4.3,4.5c1.7,0,2.6-0.7,3.2-2l1,0.4C46.2,17.6,44.8,20,41,20c-3.5,0-6-2.5-6-6.4C35.1,9,37.8,6.1,41.9,6.1"></path>{" "}
                <path d="M46.4,18.1c1.4,0,1.9-0.6,1.9-2.1V4.4c0-0.8-0.6-1.2-1.4-1.2h-0.6V1.4L52,0h1v8.9c0.7-1.9,2.1-2.8,4-2.8 c2.5,0,4.2,1.4,4.2,4.3v5.5c0,1.5,0.5,2.1,1.9,2.1v1.6h-7.9v-1.6c1.2,0,1.2-0.7,1.2-2v-5.5c0-1.2-0.6-1.8-1.7-1.8 c-0.9,0-1.6,0.6-1.8,1.5V16c0,1.3,0.1,2,1.2,2v1.6h-7.9V18.1z"></path>{" "}
                <path d="M63.9,18.1c1.4,0,1.9-0.6,1.9-2.1V8.7h-1.9V7.6c1.5,0,2-0.4,2-1.5c0-2.6,2.3-6.1,7-6.1 c1.5,0,3.1,0.5,4.5,1.1l-2,5l-1-0.2c0.1-2.7-0.8-4.4-2.4-4.4c-1.3,0-2,1.1-2,2.5c0,1.2,0.3,2.2,0.5,3h2.8v1.7h-2.7v7.2 c0,1.5,0.5,2.1,1.9,2.1v1.6h-8.6V18.1z"></path>{" "}
                <path d="M73.2,13c0-4.5,3.2-7,6.9-7c3.7,0,6.9,2.5,6.9,7c0,4.5-3.2,7-6.9,7C76.4,20,73.2,17.5,73.2,13 M78.5,13 c0,4.4,0.4,5.7,1.6,5.7c1.2,0,1.6-1.3,1.6-5.7c0-4.4-0.4-5.7-1.6-5.7C78.9,7.4,78.5,8.7,78.5,13"></path>{" "}
                <path d="M87.3,18.1c1.4,0,1.9-0.6,1.9-2.1v-5.2c0-0.8-0.6-1.3-1.4-1.3h-0.6V7.8l5-1.5h1.4v2.1 c0,1.1-0.1,2.7-0.1,3.3l0.1,0c0.4-4,2.2-5.7,4.3-5.7c0.4,0,0.5,0,0.8,0.1v4.6C97,10.4,94,10.5,94,13.6v2.3c0,1.5,0.5,2.1,1.9,2.1 v1.6h-8.6V18.1z"></path>{" "}
                <path d="M98.3,18.1c1.4,0,1.9-0.6,1.9-2.1V4.4c0-0.8-0.6-1.2-1.4-1.2h-0.6V1.4L104,0h1v12.2h0.2l2.3-1.1 c1.1-0.5,1.3-1,1.3-1.7c0-0.9-0.7-1.4-1.8-1.4V6.4h7v1.4c-1.5,1.8-2.9,2.5-4.5,3.3l3.1,4.2c1,1.3,1.6,2.7,2.6,2.7v1.6h-5.9 l-4.1-6.6H105v3.3c0,1.1,0.1,1.6,1.2,1.6v1.6h-7.9V18.1z"></path>
              </g>
            </svg>{" "}
          </Logo>

          <HeaderLinks>
            <HeaderLink>Link1</HeaderLink>
            <HeaderLink>Link1</HeaderLink> <HeaderLink>Link1</HeaderLink>{" "}
            <HeaderLink>Link1</HeaderLink> <HeaderLink>Link1</HeaderLink>{" "}
            <HeaderLink>Link1</HeaderLink> <HeaderLink>Link1</HeaderLink>{" "}
            <HeaderLink>Link1</HeaderLink> <HeaderLink>Link1</HeaderLink>
          </HeaderLinks>
        </div>

        <RightIcons>
          <IconPlaceholder>
            <svg class="menu-icon" x="0px" y="0px" viewBox="0 0 21.3 19.5">
              <g>
                <path d="M20,10.6H1.3c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H20c0.4,0,0.8,0.3,0.8,0.8S20.4,10.6,20,10.6z"></path>
                <path d="M20,18.9H1.3c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H20c0.4,0,0.8,0.3,0.8,0.8S20.4,18.9,20,18.9z"></path>
                <path d="M20,2.2H1.3c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H20c0.4,0,0.8,0.3,0.8,0.8S20.4,2.2,20,2.2z"></path>
              </g>
            </svg>
          </IconPlaceholder>
          <IconPlaceholder>
            <svg class="search-icon" x="0px" y="0px" viewBox="0 0 20.2 20.6">
              <path d="M19.5,18.8l-6-6c1.1-1.3,1.8-3,1.8-4.8c0-4.1-3.3-7.4-7.4-7.4S0.6,4,0.6,8s3.3,7.4,7.4,7.4 c1.7,0,3.3-0.6,4.5-1.6l6,6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C19.8,19.6,19.8,19.1,19.5,18.8z M8,14c-0.1,0-0.2,0-0.3,0 l3.1-3.1c0.3-0.3,0.3-0.8,0-1.1s-0.8-0.3-1.1,0l-3.8,3.8c-0.6-0.2-1.1-0.5-1.6-0.9L10,7.1c0.3-0.3,0.3-0.8,0-1.1S9.2,5.7,8.9,6 l-5.6,5.6c-0.4-0.5-0.7-1-0.9-1.6l3.8-3.8c0.3-0.3,0.3-0.8,0-1.1s-0.8-0.3-1.1,0L2.1,8.3c0-0.1,0-0.2,0-0.3c0-3.3,2.7-5.9,5.9-5.9 s5.9,2.7,5.9,5.9S11.2,14,8,14z"></path>
            </svg>{" "}
          </IconPlaceholder>
          <MusicPlayerIcon
            onClick={() => setShowPlayer(!showPlayer)}
            className={showPlayer ? "player-on" : ""}
          >
            <svg
              class="player-icon"
              x="0px"
              y="0px"
              viewBox="22.7 152.8 566.6 486.4"
            >
              <path
                class="headband"
                d="M481,369.3c10.7,0,21.4-8,21.4-21.4c0-106.9-88.2-195.1-195.1-195.1S109.6,241,109.6,347.9c0,10.7,8,21.4,21.4,21.4c13.4,0,21.4-8,21.4-21.4c0-85.5,69.5-155,155-155s155,69.5,155,155C462.3,358.6,470.4,369.3,481,369.3z"
              ></path>
              <g>
                <path
                  class="button-fg"
                  d="M159,422.7c0-10.7-10.7-18.7-18.7-18.7c-64.1,0-117.6,53.4-117.6,117.6s53.4,117.6,117.6,117.6h24.1l0,0c10.7,0,21.4-8,21.4-21.4c0-2.7,0-5.3,0-8L159,422.7z"
                ></path>
                <path
                  class="button-bg"
                  d="M137.6,599.1c-42.8,0-77.5-34.7-77.5-77.5c0-37.4,26.7-66.8,58.8-74.8L137.6,599.1L137.6,599.1z"
                ></path>
                <path
                  class="button-fg"
                  d="M471.7,404c-10.7,0-18.7,8-18.7,18.7l-26.7,192.4c0,5.3,0,10.7,5.3,16c5.3,5.3,8,8,16,8h24.1c64.1,0,117.6-53.4,117.6-117.6C586.6,457.4,535.8,404,471.7,404z"
                ></path>
                <path
                  class="button-bg"
                  d="M471.7,599.1L471.7,599.1l18.7-152.3c34.7,8,58.8,37.4,58.8,74.8C546.5,564.3,511.8,599.1,471.7,599.1z"
                ></path>
              </g>
            </svg>
          </MusicPlayerIcon>
        </RightIcons>
      </HeaderContainer>
      <MusicPlayer className={showPlayer ? "player-on" : ""}>


      </MusicPlayer>
    </div>
  );
}
