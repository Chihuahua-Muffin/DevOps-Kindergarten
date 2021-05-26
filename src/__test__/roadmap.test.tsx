import React from 'react';
import { mount } from 'enzyme';
import RoadMapPage from '#/pages/roadmap/index';

describe('<RoadMapPage /> 테스트', () => {
  const wrapper = mount(<RoadMapPage />);

  // 분야는 총 8개 입니다.
  it('분야는 총 8개 입니다.', () => {
    expect(wrapper.find('Box .field')).toHaveLength(8);
  });

  // 각 분야를 클릭했을 때는 어느 페이지로 이동합니다.
  let field = 'plan';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  field = 'code';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  field = 'build';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  field = 'test';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  field = 'release';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  field = 'deploy';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  field = 'operate';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  field = 'monitor';
  it(`"${field}" 분야를 클릭했을 때는 "/explain/${field}" 페이지로 이동합니다.`, () => {
    const href = wrapper.find(`Box #${field} Link`).prop('href');
    expect(href).toBe(`/explain/${field}`);
  });

  // 각 분야를 호버했을 때는 어느 툴팁을 띄웁니다.
  field = 'plan';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });

  field = 'code';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });

  field = 'build';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });

  field = 'test';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });

  field = 'release';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });

  field = 'deploy';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });

  field = 'operate';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });

  field = 'monitor';
  it(`"${field}" 분야에 마우스를 올렸을 때 나타나는 "${field}" 툴팁은 하나여야 합니다.`, () => {
    expect(wrapper.find(`Tooltip[label="${field}"]`)).toHaveLength(1);
  });
});
