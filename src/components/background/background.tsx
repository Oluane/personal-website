import React from "react";
import "css-doodle";

const Background: React.FC = () => {
  return (
    <css-doodle>
      {`:doodle {
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
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        background: hsla(220, 14%, 96%, 100%);
        @size: @rand(.2rem, .7rem);
        @shape: hypocycloid 4;
        transform: translate3d(@r(150px), @r(200px), 0);
        opacity: @rand(.3, 0.9);
        `}
    </css-doodle>
  );
};

export { Background };
