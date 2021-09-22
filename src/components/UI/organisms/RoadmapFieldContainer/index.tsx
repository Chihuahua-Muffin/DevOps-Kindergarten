import React, { useState } from 'react';

// 아이콘
import PlanIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import TestIcon from '@material-ui/icons/PlaylistAddCheck';
import ReleaseIcon from '@material-ui/icons/Settings';
import DeployIcon from '@material-ui/icons/FlightTakeoff';
import OperateIcon from '@material-ui/icons/Computer';
import MonitorIcon from '@material-ui/icons/Dvr';

// 컴포넌트
import Field from '#/components/UI/molecules/RoadmapField';
import * as Styled from './styled';

// 분야 상수
const fields = [
  {
    id: 1,
    title: 'plan',
    icon: <PlanIcon fontSize="large" />,
    gridColumn: '4',
    gridRow: '5/7',
  },
  {
    id: 2,
    title: 'code',
    icon: <CodeIcon fontSize="large" />,
    gridColumn: '2',
    gridRow: '5',
  },
  {
    id: 3,
    title: 'build',
    icon: <BuildIcon fontSize="large" />,
    gridColumn: '2',
    gridRow: '2',
  },
  {
    id: 4,
    title: 'test',
    icon: <TestIcon fontSize="large" />,
    gridColumn: '4',
    gridRow: '1/3',
  },
  {
    id: 5,
    title: 'release',
    icon: <ReleaseIcon fontSize="large" />,
    gridColumn: '7',
    gridRow: '5/7',
  },
  {
    id: 6,
    title: 'deploy',
    icon: <DeployIcon fontSize="large" />,
    gridColumn: '9',
    gridRow: '5',
  },
  {
    id: 7,
    title: 'operate',
    icon: <OperateIcon fontSize="large" />,
    gridColumn: '9',
    gridRow: '2',
  },
  {
    id: 8,
    title: 'monitor',
    icon: <MonitorIcon fontSize="large" />,
    gridColumn: '7',
    gridRow: '1/3',
  },
];

const RoadmapFieldContainer = () => {
  const [hoverField, setHoverField] = useState('');
  const devColor = hoverField === 'Dev' ? '#4FD1C5' : '#c4c4c4';
  const opsColor = hoverField === 'Ops' ? '#4FD1C5' : '#c4c4c4';
  return (
    <Styled.GridContainer>
      <Styled.FieldContainer>
        <Styled.DevText sx={{ color: devColor }}>Dev</Styled.DevText>
        <Styled.OpsText sx={{ color: opsColor }}>Ops</Styled.OpsText>
        {fields.map((field) => (
          <Field
            key={field.id}
            id={field.id}
            icon={field.icon}
            title={field.title}
            gridRow={field.gridRow}
            gridColumn={field.gridColumn}
            setHoverField={setHoverField}
          />
        ))}
      </Styled.FieldContainer>
    </Styled.GridContainer>
  );
};

export default RoadmapFieldContainer;
