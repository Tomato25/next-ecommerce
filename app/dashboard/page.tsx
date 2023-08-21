import { prisma } from "@/util/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import Orders from "./Orders";

export const revalidate = 0;

const fetchOrders = async () => {
  const user = await getServerSession(authOptions);
  if (!user) {
    return null;
  }

  const orders = await prisma.order.findMany({
    where: { userId: user?.user?.id, /* status: "complete" */ },
    include: { products: true },
  });
  return orders;
};

export default async function Dashboard() {
  const orders = await fetchOrders();
  if (orders === null)
    return <div>You need to be logged in to view your orders</div>;
  if (orders.length === 0) {
    return (
      <div>
        <h1>No orders placed</h1>
      </div>
    );
  }
  return (
    <div>
      <Orders orders={orders}/>
    </div>
  );
}
