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
    return (
        <div className="container">
            <h1>Lista Politici</h1>
            {user.map(cur => {
                return (
                    <div className="card">
                       
                       <h2>{cur.name}</h2>
                       <div className="img-container">
                        <img src={cur.image} alt="" />
                       </div>
                       <p>{cur.position}</p>
                       <p>{cur.biography}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default GetUser