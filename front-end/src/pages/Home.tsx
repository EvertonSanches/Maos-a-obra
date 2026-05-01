import type { Order } from "../types/Order"
import OrderCard from "../components/OrderCard"

function Home() {
    const orders: Order[] = [
    {
        id: 1,
        title: "Troca de torneira",
        description: "Vazamento na cozinha",
        status: "Agendada",
        createdAt: "2026-05-12",
        estimatedValue: 150.00,   
    },
    {
        id: 2,
        title: "Reparo eletrico",
        description: "Tomada não funciona",
        status: "Iniciada",
        createdAt: "2026-05-10"
    }
]   
    return (<div>
    <h1>Serviços</h1>
    <br />

    {orders.map(order => (
        <OrderCard key={order.id} order={order} />
    ))}
    </div>
    )
}


export default Home


