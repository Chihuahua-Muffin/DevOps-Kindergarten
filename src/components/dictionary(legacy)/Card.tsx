// import React from 'react';
// import {
//   Box,
//   chakra,
//   Text,
// } from '@chakra-ui/react';
// import Link from 'next/link';

// import CardTag from './CardTag';

// interface CardProps {
//   id: string,
//   wordEnglish: string,
//   wordKorean: string,
//   description: string,
//   tags: string[],
// }

// const DictionaryCard = chakra(Box, {
//   baseStyle: {
//     display: 'flex',
//     position: 'relative',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '260px',
//     height: '280px',
//     textAlign: 'center',
//     boxShadow: '0 7px 15px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.1)',
//     borderRadius: '30px',
//     transition: 'transform .3s ease',
//     border: '1px solid #EDF2F7',
//     rowGap: '10px',
//     '&:hover': {
//       cursor: 'pointer',
//       transform: 'translateY(-5px);',
//     },
//   },
// });

// const EnglishHeadText = chakra(Text, {
//   baseStyle: {
//     fontSize: '24px',
//     fontWeight: '600',
//     lineHeight: '25px',
//   },
// });

// const KoreanHeadText = chakra(Text, {
//   baseStyle: {
//     fontSize: '20px',
//     fontWeight: '300',
//   },
// });

// const DescriptionText = chakra(Text, {
//   baseStyle: {
//     fontSize: '12px',
//   },
// });

// const Card = ({
//   wordEnglish, wordKorean, description, tags, id,
// }: CardProps) => (
//   <Link href={`/dictionary/${id}`}>
//     <DictionaryCard name={wordEnglish}>
//       <EnglishHeadText>{wordEnglish}</EnglishHeadText>
//       <KoreanHeadText>{wordKorean}</KoreanHeadText>
//       <DescriptionText>{description}</DescriptionText>
//       <CardTag tags={tags} />
//     </DictionaryCard>
//   </Link>
// );

// export default Card;
export default { };
