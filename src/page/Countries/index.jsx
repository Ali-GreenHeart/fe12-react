import axios from "axios"
import { useState, useEffect } from "react"
import PageContainer from "../../components/PageContainer"

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
        <PageContainer>
            <div className="countries">
                {
                    countries.map((country) => {
                        return (
                            <div key={country.name.common}>
                                <img src={country.flags.png} alt="" />
                                <h3>{country.name.common}
                                    <button onClick={() => deleteCountry(country.name.common)}>x</button>
                                </h3>
                                <h4>{country.capital && country.capital[0]}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </PageContainer>
    )
}
export default Countries
