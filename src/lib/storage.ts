/*
usage: 로컬 스토리지에 JSON 형태로 저장 / 불러오기 / 삭제 헬퍼
storage.set('foo', 'bar');
storage.set('foobar', { foo: 'bar' });
let foo = storage.get('foo'); // bar
storage.remove('foo');
*/
const storage = {
  // eslint-disable-next-line
  set: (key: string, object: string | {[name: string]: string | number | any }) => {
    if (!localStorage) return;
    localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
  },
  get: (key: string) => {
    if (!localStorage) return null;

    if (!localStorage[key]) {
      return null;
    }

    try {
      const parsed = JSON.parse(localStorage[key]);
      return parsed;
    } catch (e) {
      return localStorage[key];
    }
  },
  remove: (key: string) => {
    if (!localStorage) return null;

    if (localStorage[key]) {
      localStorage.removeItem(key);
    }
    return null;
  },
};

export default storage;
