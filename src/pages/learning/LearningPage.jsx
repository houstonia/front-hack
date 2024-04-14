import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./org-chart.json";
import {useCenteredTree} from "./helpers";
import './styles.css';
import {useNavigate, useNavigation} from "react-router-dom";

const containerStyles = {
    width: "100%",
    height: "calc(100vh - 300px)"
};

const getColor = (level) => {
    switch(level) {
        case "passed":
            return 'gray';
        case "easy":
            return '#0CCE6B';
        case "medium":
            return '#A779F6';
        case "hard":
            return '#FFC100';
    }
}

const renderForeignObjectNode = ({
                                     nodeDatum,
                                     toggleNode,
                                     foreignObjectProps,
                                     navigate
                                 }) => (
    <g>
        <circle r={15}></circle>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
            <div onClick={() => navigate('/education-test')}
                style={{
                    border: "1px solid transparent",
                    borderRadius: "12px",
                    backgroundColor: getColor(nodeDatum.level),
                    color: 'white',
                    width: 'fit-content',
                    minWidth: '170px'
                }}
                className='px-[6px] py-[16px] mx-4'
            >
                <div className='text-center font-semibold'
                     style={{maxWidth: '250px', margin: '0 auto'}}>{nodeDatum.name}</div>
                {/*<h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>*/}
                {/*{nodeDatum.children && (*/}
                {/*    <button*/}
                {/*        style={{*/}
                {/*            width: "75%",*/}
                {/*            margin: "0 auto 1rem auto",*/}
                {/*            display: "block"*/}
                {/*        }}*/}
                {/*        onClick={toggleNode}*/}
                {/*    >*/}
                {/*        {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}*/}
                {/*    </button>*/}
                {/*)}*/}
            </div>
        </foreignObject>
    </g>
);

export default function LearningPage() {
    const navigate = useNavigate();
    const [translate, containerRef] = useCenteredTree();
    const nodeSize = {x: 200, y: 200};
    const foreignObjectProps = {
        width: nodeSize.x,
        height: nodeSize.y,
        x: -100,
        y: -20
    };
    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={orgChartJson}
                translate={translate}
                nodeSize={nodeSize}
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
                pathClassFunc={() => "node__link"}
                renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({...rd3tProps, foreignObjectProps, navigate})
                }
                orientation="vertical"
            />
        </div>
    );
}
