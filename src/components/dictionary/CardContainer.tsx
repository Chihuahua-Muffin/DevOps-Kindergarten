import { Grid } from '@chakra-ui/react';
import Card from './Card';

const mockUpDatas = [
  {
    wordEnglish: 'Continuous Deployment',
    wordKorean: '지속적 배포',
    description: '지속적 배포(CD)는 ...',
    tags: ['deploy', 'operate', 'build'],
  },
  {
    wordEnglish: 'Continuous Integration',
    wordKorean: '지속적 통합',
    description: '지속적 통합(CI)는 ...',
    tags: ['release', 'operate'],
  },
  {
    wordEnglish: 'Kubernetes',
    wordKorean: '쿠버네티스',
    description: '쿠버네티스(Kubernetes)는 ...',
    tags: ['deploy', 'monitor'],
  },
  {
    wordEnglish: 'Docker',
    wordKorean: '도커',
    description: '도커(Docker)는 ...',
    tags: ['deploy', 'monitor'],
  },
  {
    wordEnglish: 'Jenkins',
    wordKorean: '젠킨스',
    description: '젠킨스(Jenkins)는 ...',
    tags: ['deploy', 'monitor'],
  },
];

const CardContainer = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {mockUpDatas.map((data) => {
        return (
          <Card
            key={data.wordEnglish}
            wordEnglish={data.wordEnglish}
            wordKorean={data.wordKorean}
            description={data.description}
            tags={data.tags}
          />
        );
      })}
    </Grid>
  );
};

export default CardContainer;
