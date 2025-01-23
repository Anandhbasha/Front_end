const Info = ({name,age,Gender,Location})=>{
    return(
        <div className="info">
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{Gender}</h1>
            <h1>{Location}</h1>
        </div>
    )
}
export default Info