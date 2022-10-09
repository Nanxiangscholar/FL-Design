import React from 'react'
import Layout from '..'
export default ()=>{
    return (
        <>
            <Layout>
                <Layout className='head'>
                    head
                </Layout>
                <Layout className='content'>
                    content
                </Layout>
                <Layout className='footer'>
                    footer
                </Layout>
            </Layout>
            <br />


            <Layout>
                <Layout className='head'>
                    head
                </Layout>
                <Layout className='transverse'>
                    <Layout className='slider' row={3}>
                        slider
                    </Layout>
                    <Layout className='content' row={7}>
                        content
                    </Layout>
                </Layout>
                <Layout className='footer'>
                    footer
                </Layout>
            </Layout>
            <br />


            <Layout>
                <Layout className='head'>
                    head
                </Layout>
                <Layout className='transverse'>
                    <Layout className='content' row={5}>
                        content
                    </Layout>
                    <Layout className='slider' row={5}>
                        slider
                    </Layout>
                </Layout>
                <Layout className='footer'>
                    footer
                </Layout>
            </Layout>
            <br />


            <Layout>
                <Layout className='head'>
                    head
                </Layout>
                <Layout className='transverse'>
                    <Layout className='slider' row={3}>
                        slider
                    </Layout>
                    <Layout className='content' row={4}>
                        content
                    </Layout>
                    <Layout className='slider' row={3}>
                        slider
                    </Layout>
                </Layout>
                <Layout className='footer'>
                    footer
                </Layout>
            </Layout>
            <br />

            
            <Layout className='transverse'>
                <Layout className='slider' row={3}>
                    slider
                </Layout>
                <Layout row={7}>
                    <Layout className='head'>
                        head
                    </Layout>
                    <Layout className='content'>
                        content
                    </Layout>
                    <Layout className='footer'>
                        footer
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}
