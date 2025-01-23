const Info = ({name,age,Degree,Location})=>{
    return (
        <div className="information">
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{Degree}</h1>
            <h1>{Location}</h1>
            {/* <h1>{marks1}</h1>
            <h1>{names}</h1> */}
        </div>
    )
}
export default Info