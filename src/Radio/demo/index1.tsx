import React from 'react'
import RadioGroup from '../RadioGroup'
import Radio from '..'

export default function index() {
	return (
		<div>
		<RadioGroup value={0}>
			<Radio>Apple</Radio>
			<Radio>Orange</Radio>
			<Radio>Watch</Radio>
		</RadioGroup></div>
	)
}
