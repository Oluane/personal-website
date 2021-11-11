import React from "react";
import { Helmet } from "react-helmet";

const Background: React.FC = () => {
  return (
    <>
      <Helmet>
        <script src="https://unpkg.com/css-doodle@0.21.6/css-doodle.min.js"></script>
      </Helmet>
      <css-doodle>
        {` :doodle {
          @grid: 10x10;
          @size: 100vw 100vh;
          position: fixed;
          z-index: 0;
          overflow: hidden;
        }

        @keyframes bouncingLight {
          100% {

          }
        }

        animation-name: bouncingLight;
        animation-duration: 100s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        transform: translate3d(@r(150px), @r(200px), 0);
        background: hsla(220, 14%, 96%, 100%);
        @size: @rand(.2rem, .7rem);
        @shape: hypocycloid 4;
        
        opacity: @rand(.3, .9); `}
      </css-doodle>
    </>
  );
};

export { Background };
