import { ReactNode } from 'react'
import styles from './AppLayout.module.scss'

import { Button, Layout, Typography } from 'antd'

const { Paragraph } = Typography

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
  return (
    <Layout>
      <header className={styles.header}>
        <Button >Expenses</Button>
        <Paragraph className={styles.headerTitle}>Financial counter</Paragraph>
        <Button className={styles.btn} disabled>Income</Button>
      </header>
      <div className={styles.main}>

        {children}
        
      </div>
      <footer className={styles.footer}>Assistant to calculate expenses for a monthly period</footer>
    </Layout>
  )
}
export default AppLayout