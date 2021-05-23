import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '#/components/signin/SignInForm';

describe('<LoginForm /> 테스트', () => {
  const wrapper = mount(<LoginForm />);
  it('Label 컴포넌트는 두 개 입니다.', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });
  it('Input 컴포넌트는 두 개 입니다.', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });
  it('Button 컴포넌트는 "로그인" 버튼 한 개 입니다.', () => {
    const button = wrapper.find('button');
    expect(button.text()).toBe('로그인');
  });
  it('ID는 필수 입력값입니다.', () => {
    // 아이디 값 넣기 (simulate 뒤에는 다시 find 해주어야 함)
    wrapper.find('input').at(0).simulate('change', { target: { name: 'id', value: '' } });
    // expect(wrapper.find('input').at(0).props().value).toBe("id입니다");

    wrapper.find('form').simulate('submit');
    // console.log(wrapper.debug());

    expect(wrapper.find('FormErrorMessage').at(0).text()).toBe('아이디가 입력되지 않았습니다.');

    // input.simulate('change', { target: { value: idWithNull } } );
    // const button = wrapper.find('#submitButton').at(0);
    // button.simulate('click');
    // expect(wrapper.find('div #idErrorText').text()).toBe('아이디가 입력되지 않았습니다.');
  });
});
