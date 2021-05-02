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
    zIndex: '-10',
    "& path": {
      strokeDasharray: "1300",
      animation: "dash 4s linear infinite",
    },
    "& svg" : {
      width: "100%",
      height: '600px',
    },
    "@keyframes dash": {
      to: {
        strokeDashoffset: "2600",
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
          stroke="#1E1935"
          strokeWidth="50"
          fill="none" 
          d="M300,100 Q500,100
            500,300 500,500
            700,500 900,500
            900,300 900,100
            700,100 500,100
            500,300 500,500
            300,500 100,500
            100,300 100,100
            300,100"
        />
      </svg>
    </PathBox>
  );
}

export default RoadmapSvg;