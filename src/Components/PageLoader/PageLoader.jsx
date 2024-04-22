import { useEffect, useState } from "react";
import './PageLoader.css'

const PageLoader = ({ setHideLoader }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            if (counter < 100) {
                setCounter(counter + 2);
            } else {
                clearInterval(count);
                setHideLoader(false);
            }
        }, 25);

        return () => {
            clearInterval(count);
        };
    }, [counter, setHideLoader]);

    return (
        <div className="pgl">
            <div className="pgl_con">
                <h3>TECH FEST 2024</h3>
                <h2>ANOKHYA </h2>
                <p>WHERE TECH MEETS UNFORSEEN</p>

            </div>
            <div className="pgl_ld">{counter} %</div>
        </div>
    );
}

export default PageLoader;