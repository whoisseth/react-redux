import { FiShoppingCart } from 'react-icons/fi'
import Image from 'next/image'
import data from '../pages/api/data.json'
function CartContainer() {
  console.log(data)
  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 md:px-16">
        <div />
        <h1 className=" text-4xl font-semibold ">Boat EarPods</h1>
        <FiShoppingCart className="text-4xl" />
      </nav>
      <div className=" my-8  flex flex-wrap  items-center justify-center gap-2 ">
        {data.map((data) => (
          <Cart
            key={data.id}
            name={data.name}
            price={data.price}
            img={data.imgSrc}
          />
        ))}
      </div>
    </div>
  )
}

function Cart({ name, price, img }) {
  return (
    <div className=" flex w-[350px] flex-col items-center rounded  border-[1px] p-2 pb-4 hover:border-gray-300 md:w-[600px] md:flex-row ">
      <div className=" relative h-[400px] w-[400px] ">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
      <div>
        <div className="flex flex-col text-center  ">
          <h2 className="-mt-4 mb-2 text-4xl font-bold">{name}</h2>
          <h3 className="font-bold">WIRELESS EARBUDS</h3>
          <h3 className="mb-4 text-lg font-bold">Rs. {price} </h3>
        </div>

        <div className="flex flex-col gap-3 px-8">
          <button className="rounded bg-red-500 px-16  py-4 text-lg font-bold uppercase text-white">
            buy it now
          </button>
          <button className="whitespace-nowrap rounded border-2 border-black  px-16 py-4 text-lg font-bold uppercase  ">
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default CartContainer
