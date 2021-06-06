import React from 'react';
import { mount } from 'enzyme';
import _ from 'lodash';

import CardContainer from '#/components/dictionary/CardContainer';
import mockupDatas from '#/mockupData/dictionary';

describe('<CardContainer /> 테스트', () => {
  const wrapper = mount(<CardContainer />);
  // console.log(wrapper.debug());

  // 클릭 시 href 검사
  mockupDatas.map((data) => {
    it(`${data.wordEnglish} 클릭 시 이동하는 URL은 "/dictionary/${data.id}" 입니다.`, () => {
      const href = wrapper.find(`Card[wordEnglish="${data.wordEnglish}"] Link`).prop('href');
      expect(href).toBe(`/dictionary/${data.id}`);
    });
  })
});
