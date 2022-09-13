import React from "react";
import { setTechnology } from "../actions";
import { store } from '../store';

const ButtonGroup = ({ technologies }) => {

    const dispatchBtnAction = function (e) {
        const tech = e.target.dataset.tech;
        store.dispatch(setTechnology(tech));
    }

    return <div>
        {technologies.map((tech, i) => (
            <button
                data-tech={tech}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
}
export default ButtonGroup;