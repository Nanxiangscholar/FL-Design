import React from 'react'
import Divider from '..';
export default () => {
    return (
        <div>
            <div style={{ marginBottom: '40px' }}>
                <Divider flexBefore={0.2} flexAfter={9}>Concis</Divider>
            </div>
            <div style={{ marginBottom: '40px' }}>
                <Divider>Concis</Divider>
            </div>
            <div style={{ marginBottom: '40px' }}>
                <Divider flexBefore={9} flexAfter={0.2}>Concis</Divider>
            </div>
        </div>
    )
}