import useSWR from "swr";
import apiClient from "../api/request";

const fetcher = url => apiClient.get(url).then(res => res.data);

const Home = () => {
  const { data, error } = useSWR('/price/list', fetcher, { dedupingInterval: 6000, revalidateOnFocus: true });

  const openLink = () => {
    window.open(`http://${window.location.hostname}:${window.location.port}`, '_blank', 'private=yes');
  }
  return (
    <div style={{ padding: "12px" }}>
      <div>this is homepage</div>
      <button onClick={() => openLink()}>Open link with Private</button>
    </div>)
};
export default Home;
