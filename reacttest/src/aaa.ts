let 이름: string = '1090';

let array자료: string[] = ['kim', 'jung'];

let obj자료: { 너의이름?: string } = { 너의이름: 'name' };

// 숫자도 문자도 들어오게 해야함
let 숫자문자: MyType = 1234;

type MyType = string | number;

//number를 넣고 number가 리턴되어야하는 함수
function 함수(x: number): number {
  return x * 2;
}

//첫번째는 숫자, 두번째는 TF
type Member = [number, boolean];
let john: Member = [123, true];

//들어가야할 속성이 많을 때
type typeAll = {
  [key: string]: string;
};
let paul: typeAll = { name: 'kim', age: '123' };
