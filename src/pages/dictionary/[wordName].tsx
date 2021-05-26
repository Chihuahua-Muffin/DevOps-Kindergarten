import React from 'react';
import { useRouter } from 'next/router';

const DictionaryExplainPage = () => {
  const router = useRouter();
  const { wordName } = router.query;
  return (
    <div>
      {wordName}
      {' '}
      설명 페이지 입니다.
    </div>
  );
};

export default DictionaryExplainPage;
