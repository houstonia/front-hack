import {Circle, Image, Layer, Line, Stage} from 'react-konva';
import FloorPlanImg from "@/assets/map.png";
import useImage from 'use-image';
import {useEffect, useRef, useState} from "react";

const FloorPlanImage = () => {
    const [image] = useImage(FloorPlanImg);
    return <Image image={image}/>;
}

const FloorNavigator = ({points}) => {

    const lineRef = useRef(null);

    useEffect(() => {
        const animateLine = () => {
            let opacity = 0;
            const animation = setInterval(() => {
                opacity += 0.03; // Постепенное увеличение прозрачности
                lineRef.current.opacity(opacity);
                if (opacity >= 1) clearInterval(animation); // Остановка анимации, когда достигнута полная прозрачность
            }, 100);
        };

        animateLine();

        return () => clearInterval(animateLine);
    }, []);

    return (
        <div style={{
            height: 'fit-content',
            width: '100%',
            backgroundColor: '#191925',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Stage width={656} height={464}>
                <Layer>
                    <FloorPlanImage/>
                    <Line points={points} stroke="#A779F6" strokeWidth={5} tension={0.05} ref={lineRef}/>
                    <Circle
                        x={points[0]}
                        y={points[1]}
                        radius={8}
                        fill="#5E10E5"
                        stroke="rgba(154, 102, 244, 0.3)"
                        strokeWidth={10}
                    />
                    <Circle
                        x={points.at(-2)}
                        y={points.at(-1)}
                        radius={8}
                        fill="#FFC100"
                        stroke="rgba(255, 193, 0, 0.3)"
                        strokeWidth={10}
                    />
                </Layer>
            </Stage>
        </div>
    );
};

export default FloorNavigator;