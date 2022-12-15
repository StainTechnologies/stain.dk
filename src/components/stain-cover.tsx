import * as React from "react"

interface StainCoverProps {
    title?: String,
    subtitle?: String,
    coverImage: any,
    contain?: boolean
}

function StainCover(props: StainCoverProps) {
    return (
        <div className={"w-full relative" + (props.contain ? " bg-transparent" : " bg-black")}>
            <img src={props.coverImage} className={"w-full" + (props.contain ? " object-contain" : " h-[85vh] object-cover opacity-50")} alt="Family using tablet in a couch" />
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center">
                <h1 className="text-4xl md:text-5xl text-white font-bold uppercase mb-1">
                    {props.title}
                </h1>
                <h5 className="text-lg md:text-xl text-white font-normal">{props.subtitle}</h5>
            </div>
        </div>
    )
}

export default StainCover;