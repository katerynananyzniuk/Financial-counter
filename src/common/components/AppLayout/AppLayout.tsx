import styles from './AppLayout.module.scss'
import {Layout} from 'antd'
import {Header} from 'common/components/Header'
import {Footer} from 'common/components/Footer'

interface AppLayoutProps {
  children?: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
  return (
    <Layout>
      <Header />
      <div className={styles.main}>

        {children}
        
      </div>
      <Footer />
    </Layout>
  )
}
export {AppLayout}