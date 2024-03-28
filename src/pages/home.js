import useSWR from "swr";
import apiClient from "../api/request";

const fetcher = url => apiClient.get(url).then(res => res.data);

const Home = () => {
  const { data, error } = useSWR('/price/list', fetcher, { dedupingInterval : 6000, revalidateOnFocus: true});
  console.log('error: ', error);
  console.log("Data2 :", data);
  return <div>this is homepage</div>;
};
export default Home;
