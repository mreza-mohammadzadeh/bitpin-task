import { Col, Spin } from 'antd'
import styles from './loading.module.scss'

const LoadingComponent = ({ loading }: any) => {
    return (
        <>
            {loading &&
                <div className={styles.container}>
                    <Spin size="large" />
                    <h3 className={styles.text_loadin}>کمی صبر کنید</h3>
                </div>
            }
        </>
    )
}

export default LoadingComponent