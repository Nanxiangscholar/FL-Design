import React from 'react'
import Radio from '..'
import RadioGroup from '../RadioGroup'

export default function index() {
	return (
		<RadioGroup value={0}>
			<Radio value={1} disabled>Apple</Radio>
			<Radio value={2}>Orange</Radio>
			<Radio value={3}>Watch</Radio>
		</RadioGroup>
	)
}
