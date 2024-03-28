import useSWR from "swr";
import apiClient from "../api/request";

const fetcher = url => apiClient.get(url).then(res => res.data);

const Page1 = () => {
  const { data, error } = useSWR('/price/list', fetcher, {dedupingInterval : 6000, revalidateOnFocus: true});
  console.log('error: ', error);
  console.log('data2: ', data);

  return <div>this is Page1</div>;
};
export default Page1;
