import  { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const handleColorChange = (selectedColor) => {
        setColor(selectedColor);
    };

    const toggleColor = () => {
        if (color === "red") {
            setColor("green");
        } else if (color === "green") {
            setColor("yellow");
        } else {
            setColor("red");
        }
    };

    const addPurple = () => {
        setColor("purple");
    };

    return (
        <div>
            <div className="traffic-light">
                <div
                    className={`light red ${color === "red" ? "selected" : ""}`}
                    onClick={() => handleColorChange("red")}
                ></div>
                <div
                    className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                    onClick={() => handleColorChange("yellow")}
                ></div>
                <div
                    className={`light green ${color === "green" ? "selected" : ""}`}
                    onClick={() => handleColorChange("green")}
                ></div>
                {color === "purple" && (
                    <div className="light purple selected"></div>
                )}
            </div>
            <button className="btn btn-primary mt-3" onClick={toggleColor}>Toggle Color</button>
            <button className="btn btn-secondary mt-3" onClick={addPurple}>Add Purple</button>
        </div>
    );
};

export default TrafficLight;
