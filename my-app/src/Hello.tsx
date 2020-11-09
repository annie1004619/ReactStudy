import React from 'react';

interface HelloProps{
    name: string;
    color: string;
}
//함수형 컴포넌트로 반환하겠다.(React.FC)
//props의 타입을 정해줘야지 실행이됨
//가독성이 좋아지게 <HelloProps>로 줌

//default props는 함수의 인자값으로 주면됨
const Hello: React.FC <HelloProps> = ({name="김지원", color="red"}) => {
    return (
        <div style={{color}}>{name}</div>
    );
};

export default Hello;