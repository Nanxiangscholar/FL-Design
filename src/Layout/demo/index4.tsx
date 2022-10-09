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
            <Layout className='transverse' extraStyle={{minHeight: '280px'}}>
                <Layout className='slider' row={3} extraStyle={{borderRight:'1px solid #ccc',background: 'white'}}>
                    <div>
                        
                    </div>
                </Layout>
                <Layout className='content' row={7} extraStyle={{background: 'white',margin: '24px'}}>
                    content
                </Layout>
            </Layout>
        </Layout>
    )
}