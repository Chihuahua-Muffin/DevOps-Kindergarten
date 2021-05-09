import {
  chakra,
  Grid,
  Box,
} from '@chakra-ui/react';

// 컴포넌트
import RoadmapSvg from '#/components/roadmap/Svg';
import Field from '#/components/roadmap/Field';

// 아이콘
import PlanIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import TestIcon from '@material-ui/icons/PlaylistAddCheck';
import ReleaseIcon from '@material-ui/icons/Settings';
import DeployIcon from '@material-ui/icons/FlightTakeoff';
import OperateIcon from '@material-ui/icons/Computer';
import MonitorIcon from '@material-ui/icons/Dvr';

// 분야 상수
const fields = [
  {
    id: 1,
    title: 'plan',
    icon: <PlanIcon fontSize='large' />,
    gridColumn: 4,
    gridRow: 5,
  },
  {
    id: 2,
    title: 'code',
    icon: <CodeIcon fontSize='large' />,
    gridColumn: 2,
    gridRow: 5,
  },
  {
    id: 3,
    title: 'build',
    icon: <BuildIcon fontSize='large' />,
    gridColumn: 2,
    gridRow: 2,
  },
  {
    id: 4,
    title: 'test',
    icon: <TestIcon fontSize='large' />,
    gridColumn: 4,
    gridRow: 2,
  },
  {
    id: 5,
    title: 'release',
    icon: <ReleaseIcon fontSize='large' />,
    gridColumn: 7,
    gridRow: 5,
  },
  {
    id: 6,
    title: 'deploy',
    icon: <DeployIcon fontSize='large' />,
    gridColumn: 9,
    gridRow: 5,
  },
  {
    id: 7,
    title: 'operate',
    icon: <OperateIcon fontSize='large' />,
    gridColumn: 9,
    gridRow: 2,
  },
  {
    id: 8,
    title: 'monitor',
    icon: <MonitorIcon fontSize='large' />,
    gridColumn: 7,
    gridRow: 2,
  },
];

const RoadmapContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '89vh',
  },
});

const GridContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  },
});

const FieldContainer = chakra(Grid, {
  baseStyle: {
    gridTemplateColumns: "repeat(10, 100px)",
    gridTemplateRows: "repeat(6, 100px)",
    margin: 'auto',
  },
});

const RoadMapPage = () => {
  return (
    <RoadmapContainer>
      <RoadmapSvg />
      <GridContainer>
        <FieldContainer>
          {fields.map((field) => {
            return (
              <Field
                key={field.id}
                id={field.id}
                icon={field.icon}
                title={field.title}
                gridRow={field.gridRow}
                gridColumn={field.gridColumn}
              />
            )
          })}
        </FieldContainer>
      </GridContainer>
    </RoadmapContainer>
  );
};

export default RoadMapPage;
