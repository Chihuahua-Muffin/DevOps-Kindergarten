import React from 'react';
import { mount } from 'enzyme';
import Comment from '#/components/molecules/Comment';

describe('<Comment /> 테스트', () => {
  const wrapper = mount(<Comment />);
  // console.log(wrapper.debug());

  // To do: Axios 연동 후 바꿔야함
  it('좋아요 버튼 클릭 시 좋아요 수는 1 증가합니다.', () => {
    const beforeLikeCount = wrapper.find('Text[name="likeCount"]').text();
    wrapper.find('Button[name="likeButton"]').simulate('click');
    const afterLikeCount = wrapper.find('Text[name="likeCount"]').text();
    expect(Number(afterLikeCount)).toBe(Number(beforeLikeCount) + 1);
  });

  // To do: Axios 연동 후 바꿔야함
  it('이미 클릭 된 좋아요 버튼 클릭 시 좋아요 수는 1 감소합니다.', () => {
    const beforeLikeCount = wrapper.find('Text[name="likeCount"]').text();
    wrapper.find('Button[name="likeButton"]').simulate('click');
    const afterLikeCount = wrapper.find('Text[name="likeCount"]').text();
    expect(Number(afterLikeCount)).toBe(Number(beforeLikeCount) - 1);
  });

  it('답글 달기 버튼을 클릭하면 취소 텍스트로 변경됩니다.', () => {
    wrapper.find('Button[name="recommentButton"]').simulate('click');
    const buttonText = wrapper.find('Button[name="recommentButton"]').text();
    expect(buttonText).toBe('취소');
  });

  it('취소 버튼을 클릭하면 답글 달기 텍스트로 변경됩니다.', () => {
    wrapper.find('Button[name="recommentButton"]').simulate('click');
    const buttonText = wrapper.find('Button[name="recommentButton"]').text();
    expect(buttonText).toBe('답글 달기');
  });
});
