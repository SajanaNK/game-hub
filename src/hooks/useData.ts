// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { FetchResponse } from "../types/types";
// import { AxiosRequestConfig, CanceledError } from "axios";

// const useData = <T>(endPoint:string,requestConfig?: AxiosRequestConfig, deps?: any, ) => {
//     const [data, setData] = useState<T[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
  
//     useEffect(() => {
//       const controller = new AbortController();
  
//       setIsLoading(true);
//       apiClient
//         .get<FetchResponse<T>>(endPoint, { signal: controller.signal, ...requestConfig })
//         .then((res) => {
//           setData(res.data.results);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//           setIsLoading(false);
//         });
  
//       return () => {
//         controller.abort();
//       };
//     }, deps ? [...deps] : []);
  
//     return { data, error, isLoading };
//   };
  
//   export default useData;
  