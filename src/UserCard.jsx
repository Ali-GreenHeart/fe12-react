function UserCard(props) {
    return (
        <div className="usercard">
            <p className="usercard_name"> {props.isMan ? "Mr." : "Mrs."} {props.ad}</p>
            <img src={props.img} alt="" />
        </div>
    )
}
export default UserCard;
