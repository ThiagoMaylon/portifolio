import './style.css'

interface props{
    img: string
}
export const Photo = ({img}: props) => {
    return(
        <div className='line-photo'>
            <div className='content-photo'>
                <img src={img} />
            </div>
        </div>
    )
}