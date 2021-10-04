import React from 'react';
import { mount } from 'enzyme';
import SignUpForm from '#/components/signup/SignUpForm';

const NAME_INPUT = 0;
const EMAIL_INPUT = 1;
const ID_INPUT = 2;
const PASSWORD_INPUT = 3;

describe('<SignUpForm /> 테스트', () => {
  const wrapper = mount(<SignUpForm />);
  it('Label 컴포넌트는 네 개 입니다.', () => {
    expect(wrapper.find('label')).toHaveLength(4);
  });

  it('Input 컴포넌트는 네 개 입니다.', () => {
    expect(wrapper.find('input')).toHaveLength(4);
  });

  it('Button 컴포넌트는 "회원가입" 버튼 한 개 입니다.', () => {
    const button = wrapper.find('button');
    expect(button.text()).toBe('회원가입');
  });

  // 이름에 아무런 값도 입력하지 않았을 때
  it('이름은 필수 입력값입니다.\nInput Value = ""\nError Text = "이름이 입력되지 않았습니다."', () => {
    const inputValue = '';
    const errorText = '이름이 입력되지 않았습니다.';
    const testValue = 'name';
    wrapper.find('input').at(NAME_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(NAME_INPUT).text()).toBe(errorText);
  });

  // 이름에 정확한 값을 입력했을 때
  it('이름은 필수 입력값입니다.\nInput Value = "정현수"\nError Text = ""', () => {
    const inputValue = '정현수';
    const errorText = '';
    const testValue = 'name';
    wrapper.find('input').at(NAME_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(NAME_INPUT).text()).toBe(errorText);
  });

  // 이메일에 아무런 값도 입력하지 않았을 때
  it('이메일은 필수 입력값입니다.\nInput Value = ""\nError Text = "이메일이 입력되지 않았습니다."', () => {
    const inputValue = '';
    const errorText = '이메일이 입력되지 않았습니다.';
    const testValue = 'email';
    wrapper.find('input').at(EMAIL_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(EMAIL_INPUT).text()).toBe(errorText);
  });

  // 이메일 포맷에 맞지 않는 값을 입력했을 때
  it('이메일은 이메일 포맷에 맞춰야 합니다.\nInput Value = "jdfed12"\nError Text = "입력된 이메일이 유효하지 않습니다."', () => {
    const inputValue = 'jdfed12';
    const errorText = '입력된 이메일이 유효하지 않습니다.';
    const testValue = 'email';
    wrapper.find('input').at(EMAIL_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(EMAIL_INPUT).text()).toBe(errorText);
  });

  // 이메일 포맷에 맞는 값을 입력했을 때
  it('이메일은 이메일 포맷에 맞춰야 합니다\nInput Value = "jdfed12@naver.com"\nError Text = ""', () => { 
    const inputValue = 'jdfed12@naver.com';
    const errorText = '';
    const testValue = 'email';
     wrapper.find('input').at(EMAIL_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(EMAIL_INPUT).text()).toBe(errorText);
  });

  // 비밀번호를 입력하지 않았을 때
  it('비밀번호는 필수 입력값입니다.\nInput Value = ""\nError Text = "비밀번호가 입력되지 않았습니다."', () => { 
    const inputValue = '';
    const errorText = '비밀번호가 입력되지 않았습니다.';
    const testValue = 'password';
    wrapper.find('input').at(PASSWORD_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(PASSWORD_INPUT).text()).toBe(errorText);
  });

  // 6자 아래의 비밀번호를 입력했을 때
  it('비밀번호는 6자 이상입니다.\nInput Value = "123js"\nError Text = "6자 이상의 비밀번호를 사용해야 합니다."', () => { 
    const inputValue = '123js';
    const errorText = '6자 이상의 비밀번호를 사용해야 합니다.';
    const testValue = 'password';
    wrapper.find('input').at(PASSWORD_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(PASSWORD_INPUT).text()).toBe(errorText);
  });

  // 6자 이상의 비밀번호를 입력했을 때
  it('비밀번호는 6자 이상입니다.\nInput Value = "abc123"\nError Text = ""', () => { 
    const inputValue = 'abc123';
    const errorText = '';
    const testValue = 'password';
    wrapper.find('input').at(PASSWORD_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(PASSWORD_INPUT).text()).toBe(errorText);
  });

  // 15자 이상의 비밀번호를 입력했을 때
  it('비밀번호는 15자 이하입니다.\nInput Value = "abc12312312321312"\nError Text = "15자 이하의 비밀번호를 사용해야 합니다."', () => { 
    const inputValue = 'abc12312312321312';
    const errorText = '15자 이하의 비밀번호를 사용해야 합니다.';
    const testValue = 'password';
    wrapper.find('input').at(PASSWORD_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(PASSWORD_INPUT).text()).toBe(errorText);
  });

  // 비밀번호에 한글을 입력했을 때
  it('비밀번호는 영문자 또는 숫자만 가능합니다.\nInput Value = "abc123정"\nError Text = "비밀번호는 영문자 또는 숫자만 가능합니다."', () => { 
    const inputValue = 'abc123정';
    const errorText = '비밀번호는 영문자 또는 숫자만 가능합니다.';
    const testValue = 'password';
    wrapper.find('input').at(PASSWORD_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(PASSWORD_INPUT).text()).toBe(errorText);
  });

  // 올바른 비밀번호를 입력했을 때
  it('비밀번호에 올바른 값을 입력했을 때는 오류메세지가 뜨지 않습니다.\nInput Value = "abc1231"\nError Text = ""', () => { 
    const inputValue = 'abc1231';
    const errorText = '';
    const testValue = 'password';
    wrapper.find('input').at(PASSWORD_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(PASSWORD_INPUT).text()).toBe(errorText);
  });

  // 아이디에 아무런 값도 입력하지 않았을 때
  it('아이디는 필수 입력값입니다.\nInput Value = ""\nError Text = "아이디가 입력되지 않았습니다."', () => { 
    const inputValue = '';
    const errorText = '아이디가 입력되지 않았습니다.';
    const testValue = 'id';
    wrapper.find('input').at(ID_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(ID_INPUT).text()).toBe(errorText);
  });

  // 6자 이하의 아이디를 입력했을 때
  it('아이디는 6자 이상입니다.\nInput Value = "w1234"\nError Text = "6자 이상의 아이디를 사용해야 합니다."', () => { 
    const inputValue = 'w1234';
    const errorText = '6자 이상의 아이디를 사용해야 합니다.';
    const testValue = 'id';
    wrapper.find('input').at(ID_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(ID_INPUT).text()).toBe(errorText);
  });

  // 15자 이상의 아이디를 입력했을 때
  it('아이디는 15자 이하입니다.\nInput Value = "w1234df12321321dsfsf"\nError Text = "15자 이하의 아이디를 사용해야 합니다."', () => { 
    const inputValue = 'w1234df12321321dsfsf';
    const errorText = '15자 이하의 아이디를 사용해야 합니다.';
    const testValue = 'id';
    wrapper.find('input').at(ID_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(ID_INPUT).text()).toBe(errorText);
  });

  // 아이디에 한글을 입력했을 때
  it('아이디는 영문자 또는 숫자로 이루어져야 합니다.\nInput Value = "w123w정현수"\nError Text = "아이디는 영문자 또는 숫자로 이루어져야 합니다."', () => { 
    const inputValue = 'w123w정현수';
    const errorText = '아이디는 영문자 또는 숫자로 이루어져야 합니다.';
    const testValue = 'id';
    wrapper.find('input').at(ID_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(ID_INPUT).text()).toBe(errorText);
  });

  // 올바른 아이디를 입력했을 떄
  it('아이디에 올바른 값을 입력했을 때는 오류메세지가 뜨지 않습니다.\nInput Value = "w123123"\nError Text = ""', () => { 
    const inputValue = 'w123123';
    const errorText = '';
    const testValue = 'id';
    wrapper.find('input').at(ID_INPUT).simulate('change', { target: { name: testValue, value: inputValue } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('FormErrorMessage').at(ID_INPUT).text()).toBe(errorText);
  });
});
