import {
  chakra,
  Box,
} from '@chakra-ui/react';

const PathBox = chakra(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    top: '0',
    width: '1000px',
    height: '100%',
    margin: 'auto',
    zIndex: '-1',
    "& path": {
      strokeDasharray: "2600",
      opacity: "0.1",
      animation: "dash 4s ease-in-out infinite",
    },
    "& svg" : {
      width: "100%",
      height: '600px',
    },
    "@keyframes dash": {
      from: {
        strokeDashoffset: "5200",
      },
      to: {
        strokeDashoffset: "0",
      }
    },
  },
});

/* PATH   100,100   300,100   500,100  700,100  900,100
 
          100,300             500,300           900,300

          100,500   300,500   500,500  700,500, 900,500    */
const RoadmapSvg = () => {
  return (
    <PathBox>
      <svg>
        <path 
          stroke="#b8b9b9"
          strokeWidth="200"
          fill="none" 
          d="M300,500 Q100,500
            100,300 100,100
            300,100 500,100
            500,300 500,500
            700,500 900,500
            900,300 900,100
            700,100 500,100
            500,300 500,500
            300,500"
        />
      </svg>
    </PathBox>
  );
}

export default RoadmapSvg;