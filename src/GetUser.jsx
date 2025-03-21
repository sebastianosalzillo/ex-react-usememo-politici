import { useState, useEffect } from "react"
import "./GetUser.css"

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


    return (
        <div className="container">
            <h1>Lista Politici</h1>
            <div>
                <input  className="input-search" type="text" onChange={handleChange} value={valore} placeholder="Cerca per nome o biografia..." />
                
                {filtrati.length > 0 
                ? filtrati.map(cur => (
                    <div className="card">

                    <h2>{cur.name}</h2>
                    <div className="img-container">
                        <img src={cur.image} alt="" />
                    </div>
                    <p>{cur.position}</p>
                    <p>{cur.biography}</p>
                </div>
            )) 
                : bioFiltrata.map(cur => (
                    <div className="card">

                    <h2>{cur.name}</h2>
                    <div className="img-container">
                        <img src={cur.image} alt="" />
                    </div>
                    <p>{cur.position}</p>
                    <p>{cur.biography}</p>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default GetUser