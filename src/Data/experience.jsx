import '../Data/data.js'

export default function Experience(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "Sold out"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }


    return(
    <div className='experience'>
      <div className='ex-img' id={props.img}>
       {badgeText && <div className='info'>{badgeText}</div>}
        </div>
     <div className='rating'>
         <img src='https://raw.githubusercontent.com/GIGIsOtherStuff/BNBclone/main/Media/star.svg' className='star'></img>
         <span>{props.stats?.rating}</span>
         <span>({props.stats?.reviewCount}) • </span>
     <span>{props.location}</span>
     </div>
     <p className='exp-desc'>{props.title}</p>
     <span className='price'>From ${props.price} / person</span>
    </div>

    )
}