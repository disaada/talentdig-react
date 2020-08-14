import React from 'react'

function rootPage(props) {

	const { onClickLogOut } = props

	return(
		<div>
			[Root Page]
			<br /><br />
			<button onClick={onClickLogOut} className="btn btn-primary btn-sm"> Log Out </button>
		</div>
	)
}

export default rootPage