import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";

const UseProducts = () => {
  const axiosPublic = UseAxios();
  const { data: allProducts = [] } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });
  return [allProducts];
};

export default UseProducts;
