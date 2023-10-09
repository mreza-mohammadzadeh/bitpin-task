import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ConnectServer from "services/connect_server"
import { setCryptoData, setCurrentPage  } from "store/slices/home_slice"


export const HomeLogic = () => {
  
    const dispatch = useDispatch()
    const state = useSelector((state:any)=> state.homeReducer)
    const cryptoData = useSelector((state:any) => state.cryptoData);
    const currentPage = useSelector((state:any) => state.currentPage);
    const totalPages = useSelector((state:any) => state.totalPages);
    const resultsPerPage = useSelector((state:any) => state.resultsPerPage);
    const navigate = useNavigate()

    const { isLoading, isError, data: jsonData, error }: any = useQuery('home', () =>
        ConnectServer(`v1/mkt/markets/`, "GET", "application/json", null, null).then((res) => { return res }), {
        enabled: true,
    })

    useEffect(() => {

        if (jsonData !== null) {
            dispatch(setCryptoData({ results: jsonData, count: jsonData?.length }));
        }
    }, [jsonData])

    useEffect(() => {
        // Define the WebSocket URL
        const socket = new WebSocket('wss://ws.bitpin.ir');
    
        // Handle connection open
        socket.addEventListener('open', (event) => {
          console.log('WebSocket connected:', event);
    
          // Send the subscription message
          const subscriptionMessage = {
            method: 'sub_to_price_info',
          };
          socket.send(JSON.stringify(subscriptionMessage));
        });
    
        // Handle incoming WebSocket data
        socket.addEventListener('message', (event) => {
          const data = JSON.parse(event.data);
          console.log('Received WebSocket data:', data);
    
          // Process and handle the data as needed
        });
    
        // Handle connection close
        socket.addEventListener('close', (event) => {
          console.log('WebSocket connection closed:', event);
    
          // You can handle reconnection or cleanup here if needed
        });
    
        // Clean up the WebSocket connection when the component unmounts
        return () => {
          socket.close();
        };
      }, []);
    const fetchDataForPage = (page:any) => {
        const start = (page - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        const paginatedData = jsonData.results.slice(start, end);
        dispatch(setCryptoData({ results: paginatedData, count: jsonData.count }));
      };
    
      const handlePageChange = (newPage:any) => {
        if (newPage >= 1 && newPage <= totalPages) {
          dispatch(setCurrentPage(newPage));
          fetchDataForPage(newPage);
        }
      };

    return { state,totalPages,currentPage,resultsPerPage,cryptoData,handlePageChange, isLoading, navigate }
}