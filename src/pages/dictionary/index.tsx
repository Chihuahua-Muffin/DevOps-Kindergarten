import {
  chakra,
  Box,
} from '@chakra-ui/react';
import SearchBox from '#/components/dictionary/SearchBox';

const Container = chakra(Box, {
  baseStyle: {
    display: "flex",
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
      {/* 사전 리스트 */}
    </Container>
  );
};

export default RoadMapPage;
