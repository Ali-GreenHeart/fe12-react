export function App(props) {
    console.log(props)
    return (
        <div>
            <h3>I'm App! {props.ad} {props.soyad}</h3>
        </div>
    )
}
