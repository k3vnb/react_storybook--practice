import React from 'react';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => (
    <div className={`list-item ${state}`}>
        <label className="checkbox">
            <input 
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled
                name="checked"
            />
            <span className="checkbox-custom"/>
        </label>
        <div className="title">
            <input type="text" value={title} readOnly placeholder="Input title" />
        </div>
        <div className="actions" onClick></div>
    </div>
);

export default Task;
