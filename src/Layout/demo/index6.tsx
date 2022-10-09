import React from 'react'
import Layout from '..'
let headline = ['nav 1','nav 2','nav 3','nav 4','nav 5','nav 6','nav 7']
export default () => {
    return (
        <Layout className='transverse'>
            <Layout className='side-list'>
                <Layout className='logo' extraStyle={{marginLeft:'20px'}}></Layout>
                <ul className='fl-layout-list'>
                    {
                        headline.map((item)=>{
                            return (
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </Layout>
            <Layout row={1}>
                <Layout className='head' extraStyle={{background:'white'}}></Layout>
                <Layout className='content' row={1} extraStyle={{margin:'24px',background:'white'}}>
                    content
                </Layout>
                <Layout className='footer' extraStyle={{textAlign:'center',backgroundColor:'inherit'}}>
                    react-view-design ©2022 Created by fl-wpy
                </Layout>
            </Layout>
        </Layout>
    )
}