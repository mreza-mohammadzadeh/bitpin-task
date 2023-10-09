import { Col, Row, Table} from 'antd';
import { HomeLogic } from "./home_logic";
import styles from "./home.module.scss";
import LoadingComponent from 'components/Loading/loading';

const HomePage = () => {
    const { state, isLoading,currentPage,cryptoData,resultsPerPage,totalPages, handlePageChange,navigate} = HomeLogic();

    const columns = [
        {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text:string, record:any, index:number) => <p >{record?.currency1?.title}</p>
        },
        {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        },
    ];

    return (
        <>
            <LoadingComponent loading={isLoading} />

            <Col className={styles.container_main}>
            <Table dataSource={state?.cryptoData?.results} columns={columns} />;
                {/* {state?.cryptoData?.results?.map((item:any) => (
                    <Row>
                        <Col md={12}>
                            <span  key={item.id}>{item?.currency1?.title}</span>
                        </Col>
                        <Col md={12}>
                            <span key={item.id}>{item.price}</span>
                        </Col>

                    </Row>
                ))} */}
            </Col>

            {/* <div>
                <button onClick={() => handlePageChange(currentPage - 1)}>Previous Page</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
            </div> */}
        </>
    );
}

export default HomePage;