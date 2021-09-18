// import React from 'react';
// import { useRouter } from 'next/router';
// import { chakra, Box } from '@chakra-ui/react';
// import _ from 'lodash';

// import EditButton from '#/components/dictionary/EditButton';
// import dictionaries from '#/mockupData/dictionary';

// const Container = chakra(Box, {
//   baseStyle: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '80vh', // To do: 헤더랑 조정 필요
//     rowGap: '10px',
//   },
// });

// const TagContainer = chakra(Box, {
//   baseStyle: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     columnGap: '10px',
//   },
// });

// const DictionaryExplainPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const foundDictionary = _.find(dictionaries, (o) => o.id === id);

//   return (
//     <Container>
//       <div>
//         {`${foundDictionary?.wordEnglish}`}
//       </div>
//       <div>
//         {`${foundDictionary?.wordKorean}`}
//       </div>
//       <div>
//         {`${foundDictionary?.description}`}
//       </div>
//       <TagContainer>
//         {foundDictionary?.tags.map((tag) => (
//           <div>
//             {tag}
//           </div>
//         ))}
//       </TagContainer>
//       <EditButton id={String(id)} />
//     </Container>
//   );
// };

// export default DictionaryExplainPage;
export default { };
