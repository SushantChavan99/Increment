import React, {useState} from 'react';
import './index.css';

function Count(){
	const [count, setCount] = useState(0);
	const [descrClass, setDesc] = useState('disableBtn');
	const increament = () => {
		let num = count;
		num = num +1;
		if(num >= 1){
			setDesc('active');
		}
		setCount(num);		
	}
	const descrement = () =>{
		//debugger;
		let num = count;
		num = num - 1;
		if(num <= 0){
			setCount(0);
			setDesc('disableBtn');
		}else{
			setCount(num);
		}
		

	}
	return (
		<>
			<div className="container">
				<h1 style={{paddingLeft:'120px', color:'red'}}>{count}</h1>
				<button className="btn btn-primary mr-5" onClick={increament}> Increament</button>
				<button className={`btn btn-primary ${descrClass}`}  onClick={descrement}> Descrement</button>
			</div>
		</>
	)
}

export default Count;