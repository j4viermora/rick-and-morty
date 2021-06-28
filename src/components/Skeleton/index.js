import Skeleton from 'react-loading-skeleton';


const LoadingSkeleton = () => {
    return (
        <div className="column is-one-quarter">
            <Skeleton height={ 200 } />
            <Skeleton count={ 3 } />
        </div>
    )
}

export default LoadingSkeleton
