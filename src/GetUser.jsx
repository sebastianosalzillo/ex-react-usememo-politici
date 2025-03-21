import { useState, useEffect } from "react"
import "./GetUser.css"
import PoliticianCard from "./PoliticianCard";

function GetUser() {
    const [user, setUser] = useState([])

    useEffect(() => {
        async function fetchData() {
            const api = "https://boolean-spec-frontend.vercel.app/freetestapi/politicians"
            const data = await fetch(api).then(r => r.json())

            setUser([...user, ...data])
        }
        fetchData()
    }, []);



    const [valore, setValore] = useState("")

    function handleChange(e) {
        setValore(e.target.value)
    }

    const filtrati = user.filter((d) =>
        d.name.toLowerCase().includes(valore.toLowerCase())
    );

    const bioFiltrata = user.filter(d => d.biography.toLowerCase().includes(valore.toLocaleLowerCase()))

    const risultati = filtrati.length > 0 ? filtrati : bioFiltrata;
    return (
        <div className="container">
            <h1>Lista Politici</h1>
            <div>
                <input className="input-search" type="text" onChange={handleChange} value={valore} placeholder="Cerca per nome o biografia..." />

                {risultati.map(cur => (
                    <PoliticianCard
                        key={cur.id}
                        name={cur.name}
                        image={cur.image}
                        position={cur.position}
                        biography={cur.biography}
                    />
                ))}
            </div>

        </div>
    )
}

export default GetUser