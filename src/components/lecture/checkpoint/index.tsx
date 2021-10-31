import React from 'react';
import type { Checkpoint } from '#/components/lecture/contents/types';

// 글로벌에서 들고 와야 함.
const CheckpointList = ({ checkpoints }: { checkpoints: Checkpoint[] }) => (
  checkpoints.map((checkpoint) => (
    <div key={checkpoint.name}>
      {checkpoint.name}
    </div>
  ))
);

export default CheckpointList;
