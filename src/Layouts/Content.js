import React from 'react'
import { Layout } from 'antd';
import Section from "./Section"
const { Content } = Layout;
export default function Body() {
    return (
        <>
         <Content style={{ padding: '0 24px', minHeight: 280 }}>
         <Section/>    
         </Content>   
        </>
    )
}
