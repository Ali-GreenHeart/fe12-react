import { useContext } from "react"
import PageContainer from "../../components/PageContainer"
import { DataContext } from "../../context/DataContext"

const Contact = ({ }) => {
    const obj = useContext(DataContext)
    return (
        <PageContainer>
            <h1>im contact page</h1>
            <div>asdjvslkadbdfknl</div>
            <p>here is {obj.age}</p>
        </PageContainer>
    )
}
export default Contact
