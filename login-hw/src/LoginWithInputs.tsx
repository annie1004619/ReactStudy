import React,{useState} from 'react';

const LoginWithInputs:any = ()=> {
    const [mode, setMode] =useState("LOGIN");
    const [inputs, setInputs] = useState({
        id:"",
        pwd: ""
    });
    const { id,pwd } = inputs;

    const onChange = ( e: any) => {
        const {value, name} = e.target;

        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onSubmit =()=>{
        if(id === ''){
            alert("아이디를 입력해주세요")
        }else if(pwd ===''){
            alert("비밀번호를 입력해주세요")
        }else if(pwd === '1234'){
            alert(`${id} 님 환영합니다`);
            setMode("MAIN");
        }else if(pwd !== '1234'){
            alert("비밀번호가 틀렸습니다.")
        }
    }

    if(mode === "LOGIN") {
        return (
            <div>
                <form>
                    <label htmlFor="user_id">아이디:</label>
                    <input id="user_id" value={id} onChange={onChange} required/>
                    <label htmlFor="user_pwd">비밀번호:</label>
                    <input id="user_pwd" value={pwd} onChange={onChange} required/>
                    <input type="submit" value="로그인" onClick={onSubmit}/>
                </form>
            </div>
        );
    }
    else if(mode === "MAIN"){

        const onclick = ()=>{
            alert("로그아웃 합니다.");
            setMode("LOGIN");
            setInputs({
                id:'',
                pwd: ''
            });
        }

        return (
            <div>
                <p>{id}님의 로그인을 환영합니다.</p>
                <input type="submit" value="로그아웃" onClick={onclick} />
            </div>
        );
    }
};

export default LoginWithInputs;