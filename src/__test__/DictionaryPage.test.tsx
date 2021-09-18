// import React from 'react';
// import { mount } from 'enzyme';
// import _ from 'lodash';

// import CardContainer from '#/components/dictionary(legacy)/CardContainer';
// import mockupDatas from '#/mockupData/dictionary';
// import CreateButton from '#/components/dictionary(legacy)/CreateButton';
// import EditButton from '#/components/dictionary(legacy)/EditButton';

// // CardContainer
// describe('<CardContainer /> 테스트', () => {
//   const wrapper = mount(<CardContainer />);
//   // console.log(wrapper.debug());

//   // 클릭 시 href 검사
//   mockupDatas.map((data) => {
//     it(`${data.wordEnglish} 클릭 시 이동하는 URL은 "/dictionary/${data.id}" 입니다.`, () => {
//       const href = wrapper.find(`Card[wordEnglish="${data.wordEnglish}"] Link`).prop('href');
//       expect(href).toBe(`/dictionary/${data.id}`);
//     });
//   })
// });

// // CreateButton
// describe('<CreateButton /> 테스트', () => {
//   const wrapper = mount(<CreateButton />);
//   // console.log(wrapper.debug());

//   // 클릭 시 href 검사
//   it('CreateButton 클릭 시 이동하는 URL은 "/dictionary/create" 입니다.', () => {
//     const href = wrapper.find(`CreateButton Link`).prop('href');
//     expect(href).toBe(`/dictionary/create`);
//   });
// });

// // EditButton
// describe('<EditButton /> 테스트', () => {
//   // console.log(wrapper.debug());
  
//   // 클릭 시 href 검사
//   mockupDatas.map((data) => {
//     const wrapper = mount(<EditButton id={data.id} />);
//     it(`${data.wordEnglish} 페이지에서 EditButton 클릭 시 이동하는 URL은 "/dictionary/edit/${data.id}" 입니다.`, () => {
//       const href = wrapper.find(`EditButton Link`).prop('href');
//       expect(href).toBe(`/dictionary/edit/${data.id}`);
//     });
//   })
// });
export { };
