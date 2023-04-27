import { AddCartType } from "@/types/AddCartType"
import formatPrice from "@/util/PriceFormat"
import Image from "next/image"
import Link from "next/link"

export default function Product({name,image,unit_amount,id, description} : AddCartType) {
    return (
        <Link  href={{pathname:`/product/${id}`, query:{name, image, unit_amount, id, description} }}>
        <div className="text-gray-700">
            <Image src={image} alt={name} height={800} width={800} className="w-full h-96 object-cover rounded-lg"/>
            <div className="font-medium">
            <h1>{name}</h1>
            <h2 className="text-sm text-teal-700 ">{unit_amount !== null ? formatPrice(unit_amount) : "N/A"}</h2>
            </div>
        </div>
        </Link>
    )
}