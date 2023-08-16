import Image from "next/image";
import image from "../../public/landingImage.jpg"
export default function () {

    return (
        <div className="flex xl:flex-row flex-col-reverse gap-12 w-full justify-between items-center mb-12">
            <Image priority={true}	placeholder="blur"	 src={image} alt="adidas" className="rounded-lg xl:w-2/3 w-full md:h-3/6" />
            <div className="flex items-center justify-center xl:w-1/3 w-full py-20">
                <h1 className="sm:text-8xl text-6xl text-center font-roboto">Embrace the stripes</h1>
            </div>
        </div>
    )
}