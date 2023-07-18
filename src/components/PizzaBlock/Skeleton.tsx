import React from "react"
import ContentLoader from "react-content-loader"

type SkeletonProps = {
    speed: number,
    width: number,
    height: number
}

const Skeleton: React.FC<SkeletonProps> = (props) => (
    <ContentLoader
        className="pizza-block"
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
    <circle cx="140" cy="131" r="122" /> 
    <rect x="4" y="316" rx="10" ry="10" width="280" height="86" /> 
    <rect x="133" y="415" rx="25" ry="25" width="147" height="46" /> 
    <rect x="4" y="431" rx="10" ry="10" width="94" height="27" /> 
    <rect x="1" y="271" rx="10" ry="10" width="280" height="27" />
    </ContentLoader>
)

export default Skeleton