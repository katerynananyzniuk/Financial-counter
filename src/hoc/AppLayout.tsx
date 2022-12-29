import { ReactNode } from 'react'
import styles from './AppLayout.module.scss'

import { Layout, Typography } from 'antd'

const { Paragraph } = Typography
const { Header, Footer } = Layout

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
  return (
    <Layout>
      <Header>
        <Paragraph className={styles.header}>Financial counter</Paragraph>
      </Header>
      <div className={styles.main}>
        {children}
      </div>
      <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
export default AppLayout