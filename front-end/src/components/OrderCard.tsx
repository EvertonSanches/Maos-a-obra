import type { Order } from "../types/Order"

type OrderCardProps = {
    order: Order
}

function OrderCard({ order }: OrderCardProps) {
    return (
        <div>
            <h3>
                {order.title}
            </h3>
            <p>{order.description}</p>
            <span>{order.status}</span>
        </div>
    )
}

export default OrderCard