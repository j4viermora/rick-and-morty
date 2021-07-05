import Skeleton from 'react-loading-skeleton';


const LoadingSkeleton = () => {
    return (
        <div className="column is-half" >
                <Skeleton height={ 200 } />
                <Skeleton count={ 3 } />
        </div>
    )
}

export default LoadingSkeleton
