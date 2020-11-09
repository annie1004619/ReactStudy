import React,{ useEffect,useState } from 'react';
import useInput from "./hooks/useInput";

const PasswordConfirm = () => {
   // const [password, setPassword] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');
    const [pwd, setPwd] = useInput({
        password:'',
        confirmPassword:''
    });
    const{password, confirmPassword} = pwd;
    const[passwordOk, setPasswordOk] = useState(false);

    useEffect(()=>{
        if(password !== confirmPassword){
            console.log("패스워드가 다릅니다");
            setPasswordOk(true);
        } else{
            setPasswordOk(false);
        }
    },[confirmPassword]);

    /*const passwordChange =(e:any)=>{
        setPassword(e.target.value);
    };

    const confirmPasswordChange = (e:any) =>{
        setConfirmPassword(e.target.value);
    };*/

    return (
        <div>
            <input type="password" value={password} placeholder="비밀번호" onChange={setPwd}/>
            <input type="password" value={confirmPassword} placeholder="비밀번호 확인" onChange={setPwd}/>
            {passwordOk && <p style={{color: 'red'}}>비밀번호가 다릅니다.</p>}
        </div>

    );
}


export default PasswordConfirm;