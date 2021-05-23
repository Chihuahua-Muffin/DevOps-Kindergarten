import {
  chakra,
  Box,
} from '@chakra-ui/react';
import SearchBox from '#/components/dictionary/SearchBox';
import CardContainer from '#/components/dictionary/CardContainer';

const Container = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

const mockUpData = [
  {
    wordEnglish: 'Continuous Deployment',
    wordKorean: '지속적 배포',
    description: '지속적 배포(CD)는 ...',
    tag: ['deploy', 'operate', 'build'],
  },
  {
    wordEnglish: 'Continuous Integration',
    wordKorean: '지속적 통합',
    description: '지속적 통합(CI)는 ...',
    tag: ['release', 'operate'],
  },
  {
    wordEnglish: 'Kubernetes',
    wordKorean: '쿠버네티스',
    description: '쿠버네티스(Kubernetes)는 ...',
    tag: ['deploy', 'monitor'],
  },
];

const RoadMapPage = () => {
  return (
    <Container>
      <SearchBox />
      <CardContainer />
    </Container>
  );
};

export default RoadMapPage;
