import { useRouter } from 'next/router';

const ExplainPage = () => {
  const router = useRouter();
  const { fieldName } = router.query;
  return (
    <div>
      {fieldName} 설명 페이지 입니다.
    </div>
  );
};

export default ExplainPage;