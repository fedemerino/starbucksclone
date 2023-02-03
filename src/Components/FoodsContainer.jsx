import Foods from './Foods'
import { Link } from 'react-router-dom'
const FoodsContainer = ({variants, title,data}) => {
    return (
        <div className='menuContainer'>
            <div className='menuTop'>
                <Link to={"/menu"}><span className="ruta">Menú</span></Link><span style={{fontWeight:'600','color': 'rgba(0,0,0,.58)'}}> / {title}</span>
                <p className="text">{title}</p>
            </div>
            <Foods variants={variants} data={data}/>
        </div>
    )
}

export default FoodsContainer