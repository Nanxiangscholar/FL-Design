import React from 'react'
import Layout from '..'
let headline = ['nav 1','nav 2','nav 3','nav 4','nav 5','nav 6','nav 7']
export default () => {
    return (
        <Layout>
            <Layout className='header'>
                <Layout className='logo'></Layout>
                <ul className='fl-layout-header-headline'>
                    {
                        headline.map((item)=>{
                            return (
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </Layout>
            <Layout className='content' extraStyle={{minHeight: '280px',margin: '24px',background: 'white'}}>
                content
            </Layout>
            <Layout className='footer' extraStyle={{padding:'0 0 24px 0',textAlign:'center',backgroundColor:'inherit'}}>
                react-view-design ©2022 Created by fl-wpy
            </Layout>
        </Layout>
    )
}