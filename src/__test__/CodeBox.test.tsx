import React from 'react';
import { mount } from 'enzyme';
import CodeBox from '#/components/common/codeBox/CodeBox';

document.execCommand = jest.fn();

describe('<CodeBox /> 테스트', () => {
  const wrapper = mount(<CodeBox text={'console.log()'} />);
  // console.log(wrapper.debug());
  
  // To do: Axios 연동 후 바꿔야함
  it('복사하기 버튼을 클릭 시 버튼 텍스트는 복사완료로 바뀝니다.', () => {
    wrapper.find('Button[name="copyButton"]').simulate('click');
    const buttonText = wrapper.find('Button[name="copyButton"]').text();
    expect(buttonText).toBe('복사완료');
  });
});
