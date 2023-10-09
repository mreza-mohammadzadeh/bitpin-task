import { Col, Row} from 'antd';
import { HomeLogic } from "./home_logic";
import styles from "./home.module.scss";
import LoadingComponent from 'components/Loading/loading';

const HomePage = () => {
    const { state, isLoading,currentPage,cryptoData,resultsPerPage,totalPages, handlePageChange,navigate} = HomeLogic();
console.warn(cryptoData);

    return (
        <>
            <LoadingComponent loading={isLoading} />

            <Col className={styles.container_main}>
                {cryptoData?.map((item:any) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </Col>

            <div>
                <button onClick={() => handlePageChange(currentPage - 1)}>Previous Page</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
            </div>
        </>
    );
}

export default HomePage;