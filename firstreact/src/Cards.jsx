import './Card.css'

const Cards = ({top_Image,top_Para,card_TopHeading,list3,list2,List1,cardMiddlePara})=>{
    return(
        <div className="Cards">
            <div className="card_Top">
                <h1>{card_TopHeading}</h1>
                <img src={top_Image}></img>
                <p>{top_Para}</p>
            </div>
            <hr></hr>
            <div className="card_Middle">
                <p>{cardMiddlePara}</p>
                <li>{List1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
            </div>
            <div className="card_Bottom">
                <button>Choose Plan</button>
            </div>
        </div>
    )
}
export default Cards