import React from 'react'
import Layout from '../index'
export default ()=>{
    return (
        <Layout>
            <Layout className='head'>
                head
            </Layout>
            <Layout className='transverse'>
                <Layout className='slider' row={3} extraStyle={{fontSize:'12px'}}>
                    slider
                </Layout>
                <Layout className='content' row={7} extraStyle={{fontSize:'50px'}}>
                    content
                </Layout>
            </Layout>
            <Layout className='footer'>
                footer
            </Layout>
        </Layout>
    )
}