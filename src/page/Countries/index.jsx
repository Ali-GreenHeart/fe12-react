import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const url = "https://restcountries.com/v3.1/all"


const Countries = () => {
    const [countries, setCountries] = useState([])

    function deleteCountry(ad) {
        setCountries((pre) => pre.filter((country) => country.name.common !== ad))
    }

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setCountries(data)
        })
    }, [])

    useEffect(() => {
        console.log('countries state-i deyisdi')
    }, [countries])

    return (
        <div className="countries">
            {
                countries.map((country) => {
                    return (
                        <div key={country.name.common}>
                            <img src={country.flags.png} alt="" />
                            <h3>{country.name.official}
                                <button onClick={() => deleteCountry(country.name.common)}>x</button>
                            </h3>
                            <h4>{country.capital && country.capital[0]}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Countries
