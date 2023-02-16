import styles from './AppLayout.module.scss'
import {Layout} from 'antd'
import {Header} from 'common/components/Header'
import {Footer} from 'common/components/Footer'

const AppLayout = ({children}: {children: React.ReactNode}) => {
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