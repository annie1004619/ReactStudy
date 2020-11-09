//https://usehooks.com/useWindowSize/
import React,{useState} from 'react';
//리액트에서 form을 만들때 라이브러리 react hook form
const SignUp = () => {
    //동시에 이루어질 때 하나의 상태로 만들어줘도 됨
    const [inputs, setInputs] = useState({
        name:"",
        nickName: ""
    });
    const {name, nickName} = inputs;
   // const [name,setName] = useState('');
   // const [nickname, setNickname] = useState('');

    //event 객체의 타입도 가져와야함 : React.ChangeEvent
    const onChange =(e: any) => {
        const {value, name} = e.target;

        //name값만 바꾸고 싶은데 nickName값이 같이 바뀌니까 ...inputs으로 써줌
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onReset=()=>{
        setInputs({
            name:'',
            nickName: ''
        });
    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input
                name="nickName"
                placeholder="닉네임"
                onChange={onChange}
                value={nickName}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickName}
            </div>
        </div>
    );
};

export default SignUp;