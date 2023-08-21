import { SearchParamsTypes } from "@/types/SearchParamsType"
import Description from "../Description";


export default async function Product({searchParams} : SearchParamsTypes) {


  return (
    <Description {...searchParams} />
  );
}
