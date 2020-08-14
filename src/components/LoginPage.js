import React, {useState} from 'react'

function LoginPage(props) {

	const [valuePass, setPass] = useState(false)
	const { onClickLogIn } = props

	function handleClick() {
		setPass(!valuePass)
	}

	return(
		<div>
			[LoginPage]
			<br /><br />
			<div className="row justify-content-center">
			<div className="col-3">
				<div className="form-group">
					<label>Username</label>
					<input type="text" className="form-control form-control-sm" />
				</div>

				<div className="form-group">
					<label>Password</label>
					<input type={valuePass ? 'password' : 'text'} className="form-control form-control-sm" />
					<input type="checkbox" checked={!valuePass} onChange={handleClick}/> Show
				</div>

				<button className="btn btn-primary btn-sm" onClick={handleClick}>Show</button>
				<br/><br/>
				<button className="btn btn-primary btn-sm" onClick={onClickLogIn}>Log In</button>
			</div>	
			</div>		
		</div>
	)
}

export default LoginPage