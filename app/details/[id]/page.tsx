import { fetchAnimeDetail } from "@/app/actions";
import DetailComponent from "@/components/DetailComponent";

type props = {
  params: { id: any };
};
const ProductDetails =  async({ params: { id } }: props) => {

  const details  = await fetchAnimeDetail(id)
  return (
    <div>
      <DetailComponent item={details}></DetailComponent>
      {/* <h1>{ details.id}</h1> */}
    </div>
  );
};

export default ProductDetails;
