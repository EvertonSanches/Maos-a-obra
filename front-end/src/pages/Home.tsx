import type { Order } from "../types/Order"
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
    <h1>Home</h1>

    {orders.map(order => (
        <div key={order.id}>
            <h3>{order.title}</h3>
            <p>{order.description}</p>
            <span>{order.status}</span>
            </div>
    ))}
    </div>
    )
}


export default Home


