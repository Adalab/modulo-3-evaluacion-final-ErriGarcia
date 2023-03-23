import '../../styles/components/Pages/Loading.scss'

const Loading = () => {
    return (
        <div className='container-loading'>
            <div>
                <div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}

export default Loading