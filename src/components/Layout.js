import { Outlet } from 'react-router-dom'
import '../css/Layout.css'

const Layout = () => {
    const content = (
        <>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
    return content
}
export default Layout