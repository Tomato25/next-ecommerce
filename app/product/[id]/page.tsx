import Image from "next/image";
import { SearchParamsTypes } from "@/types/SearchParamsType"
import formatPrice from "@/util/PriceFormat";
import AddCart from "./AddCart";


export default async function Product({searchParams} : SearchParamsTypes) {
  return (
    <div className="flex justify-between gap-24 p-12 text-gray-700">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={600}
        height={600}
      />
      <div className="font-medium text-gray-700">
        <h1 className="text-2xl  py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
 
      <div className="flex gap-2">
        <p className="font-bold text-teal-700">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
      </div>
      <AddCart {...searchParams}/>
    </div>
    </div>
  );
}
