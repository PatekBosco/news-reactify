import Skeleton from "../../Skeleton/Skeleton";

function withSkeleton(Component, type, count, direction) {
    return function WithSkeletin(props) {
        const {isLoading, ...restProps} = props;
        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction}/>;
        }

        return <Component {...restProps}/>;
    };
}

export default withSkeleton;