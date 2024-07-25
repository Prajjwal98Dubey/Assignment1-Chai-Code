import { Link } from "react-router-dom"
import { CHAI_AUR_CODE_IMG } from "../assets/image"

const Brand = () => {
    return (
        <Link to="https://chaicode.com" target='_blank'>
            <img className=' fixed bottom-3 right-6 w-[90px] h-[95px] rounded-lg cursor-pointer' src={CHAI_AUR_CODE_IMG} alt="loading" loading='lazy' />
        </Link>
    )
}
export default Brand
