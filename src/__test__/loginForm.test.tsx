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
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(0).text()).toBe('아이디가 입력되지 않았습니다.');
  });

  it('ID는 6자 이상입니다.', () => {
    wrapper.find('input').at(0).simulate('change', { target: { name: 'id', value: 'vas12' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(0).text()).toBe('6자 이상의 아이디를 사용해야 합니다.');
  });

  it('ID는 15자 이하입니다.', () => {
    wrapper.find('input').at(0).simulate('change', { target: { name: 'id', value: 'vas121213131233122' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(0).text()).toBe('15자 이하의 아이디를 사용해야 합니다.');
  });

  it('Password는 필수 입력값입니다.', () => {
    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: '' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(1).text()).toBe('비밀번호가 입력되지 않았습니다.');
  });

  it('Password는 6자 이상입니다.', () => {
    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: 'jhs12' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(1).text()).toBe('6자 이상의 패스워드를 사용해야 합니다.');
  });

  it('Password는 15자 이하입니다.', () => {
    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: 'jhs1212313213132132112' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(1).text()).toBe('15자 이하의 비밀번호를 사용해야 합니다.');
  });
});
