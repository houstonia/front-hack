import {Circle, Image, Layer, Line, Stage} from 'react-konva';
import FloorPlanImg from "@/assets/map.png";
import useImage from 'use-image';
import {useEffect, useState} from "react";

const FloorPlanImage = () => {
    const [image] = useImage(FloorPlanImg);
    return <Image image={image}/>;
}

const AnimatedLine = ({points, duration}) => {
    const [animatedPoints, setAnimatedPoints] = useState([]);

    useEffect(() => {
        const startTime = Date.now();
        const animation = requestAnimationFrame(function animate() {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentPoints = points.map((point, index) => {
                if (index % 2 === 0) {
                    return points[index] * progress;
                } else {
                    return points[index - 1] + (points[index] - points[index - 1]) * progress;
                }
            });
            setAnimatedPoints(currentPoints);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        });

        return () => cancelAnimationFrame(animation);
    }, [points, duration]);

    return <Line points={animatedPoints} stroke="#A779F6" strokeWidth={5} tension={0.05}/>
};

const FloorNavigator = () => {

    // const lineRef = useRef(null);
    //
    // useEffect(() => {
    //     const animateLine = () => {
    //         let length = 0;
    //         const points = lineRef.current.points(); // Получаем текущие координаты точек линии
    //
    //
    //         const x1 = points[0];
    //         const y1 = points[1];
    //         const x2 = points[2];
    //         const y2 = points[3];
    //
    //         const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); // Вычисляем длину линии
    //
    //         const animation = requestAnimationFrame(function drawLine() {
    //             length += distance / 100;
    //             lineRef.current.points([x1, y1, x1 + (x2 - x1) * (length / distance), y1 + (y2 - y1) * (length / distance)]);
    //
    //             if (length < distance) {
    //                 requestAnimationFrame(drawLine);
    //             }
    //         });
    //
    //         return () => cancelAnimationFrame(animation);
    //     };
    //
    //     animateLine();
    // }, []);

    // const points = [170, 265, 546, 265, 546, 360];
    const points = [50, 380, 415, 380, 415, 75, 470, 75, 470, 25]
    const animationDuration = 1000; // Длительность анимации в миллисекундах

    return (
        <div style={{
            height: '531px',
            width: '944px',
            backgroundColor: '#191925',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Stage width={656} height={464}>
                <Layer>
                    <FloorPlanImage/>
                    <AnimatedLine points={points} duration={animationDuration}/>
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