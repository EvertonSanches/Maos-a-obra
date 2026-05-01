import type { Order } from "../types/Order"

type OrderCardProps = {
    order: Order
}

function OrderCard({ order }: OrderCardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px'}}>
            <h3>{order.title}</h3>

            <p>{order.description}</p>

            <div>
                <span>Status: {order.status}</span>
            </div>

            {order.estimatedValue && (
                <p>Valor estimado: R$ {order.estimatedValue.toFixed(2)}</p>
            )}
        </div>
    )
}

export default OrderCard