import { useEffect, useRef, useState } from "react"
import { panoramaData } from "../../pages/map/panoramaData"
import ArrowUp from "../../assets/icons/arrow_up.svg"
import Vr from "../../assets/icons/vr.svg"
import "aframe";
import 'aframe-rounded'

const Arrow = props => {
    return (
        <a-image
            class='clickable'
            onClick={() => props.eventHandler(props.next)}
            src="#arrow"
            position={props.position}
            rotation={props.rotation}
            width='0.8'
            height='0.65'
            scale='1 1 1'
        />
    )
}

export const PanoramaTour = () => {
    const [event, setEvent] = useState(panoramaData.screen1)
    const [isVrMode, setVrMode] = useState(false)
    const scenesRef = useRef(null)


    const eventHandler = event => {
        setEvent(panoramaData[event])
    }
    const getArrow = () => {
        console.log(event?.nextScense)
        if(event?.nextScense !==undefined){
            console.log(event?.nextScense)
            return event?.nextScense?.map(e => {
                return (
                    <Arrow position={e.position} rotation={e.rotation} next={e.next} eventHandler={eventHandler} key={e.position} />
                )
            })
        }
    }

    useEffect(() => {
        isVrMode ? scenesRef?.current?.enterVR() : scenesRef?.current?.exitVR()
    }, [isVrMode])

    return <div className="canvas">
            <a-scene  embedded ref={scenesRef} cursor='rayOrigin: mouse;' raycaster='objects: .clickable' style={{position: 'static'}}>
                <a-light type='ambient' />
                <a-assets timeout='5000'>
                    <img id='vr' src={Vr} />
                    <img id='arrow' src={ArrowUp} />
                </a-assets>
                {event?.nextScense&&getArrow()}
                <a-camera position='0 1 -1' rotation='0 0 0'>
                    <a-image
                        class='clickable'
                        onClick={() => setVrMode(!isVrMode)}
                        src='#vr'
                        position='-1.5 2.7 -4'
                        rotation='0 0 0'
                        width='1'
                        height='1'
                    />
                </a-camera>
                <a-sky 
                    style={{position: 'static'}}
                    position='0 1 -10'
                    rotation='0 0 0'
                    src={event.img}
                    radius='100' />
            </a-scene>
        </div>
}