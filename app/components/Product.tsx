import { ItemType } from "@/types/ItemType";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import Link from "next/link";

export default function Product({
  name,
  image,
  unit_amount,
  id,
  description,
}: ItemType) {
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description },
      }}
    >
      <div className="flex flex-col">
        <Image
          src={image}
          alt={name}
          height={800}
          width={800}
          className="w-full h-96 object-cover rounded-lg"
          priority={true}
        />
        <div className="font-medium">
          <h1>{name}</h1>
          <h2 className="text-sm text-teal-700 ">
            {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
          </h2>
        </div>
      </div>
    </Link>
  );
}
