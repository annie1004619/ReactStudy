import React,{ useEffect,useState } from 'react';

const UserList = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("로드됨");
        return () =>{
            //unmount 화면에서 볼 수 없다. (return)
            console.log("컴포넌트가 화면에서 사라졌습니다.")
        };
    },[]); //deps가 비워져 있어야지 mount나 unmount 될때



    useEffect(()=>{
        console.log("count가 바뀜");
    }, [count]);//deps안에 들어가 있는 값이 바뀌면 호출됨

    return (
        <div>
            <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>+1</button>
        </div>

            );
};

export default UserList;