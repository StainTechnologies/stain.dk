import * as React from "react"
import {Property} from "csstype"

interface StainCoverProps {
    title?: String,
    subtitle?: String,
    coverImage: any,
    contain?: boolean
}

function StainCover(props: StainCoverProps) {
    let objectFit: Property.ObjectFit = props.contain ? "contain" : "cover"
    let opacity = props.contain ? "100%" : "50%"
    let background_color = props.contain ? "transparent" : "black"

    return (
        <div style={{ height: "75vh", width: "100%", backgroundColor: background_color }}>
            <img src={props.coverImage} style={{ height: "100%", width: "100%", objectFit: objectFit, opacity: opacity }} alt="Family using tablet in a couch" />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: `translate(-50%, -50%)`, textAlign: "center" }}>
                <h1 style={{ color: "white", fontWeight: "normal", fontSize: "4em", textTransform: "uppercase" }}>
                    {props.title}
                </h1>
                <h5 style={{ color: "white", fontWeight: "normal" }}>{props.subtitle}</h5>
            </div>
        </div>
    )
}

export default StainCover;