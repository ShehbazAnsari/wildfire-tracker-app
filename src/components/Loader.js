import { Icon } from '@iconify/react'
import googleIcon from '@iconify/icons-mdi/google'

const Loader = () => {
    return (
        <div className="loader">
            <Icon icon={googleIcon} />
            <h1>Fetching Map Data</h1>
        </div>
    )
}

export default Loader
