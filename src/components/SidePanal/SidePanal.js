import React from 'react';
import classes from './SidePanal.module.css';
import { Link } from 'react-router-dom';

const SidePanal= ()=>  {
        return (
            <aside className={classes.Aside}>
                <div><Link to="Medical">Medical</Link> </div>
                <div><Link to="Engineering">Engineering</Link></div>
                <div><Link to="Commerce">Commerce</Link></div>
                <div><Link to="Arts">Arts</Link></div>
            </aside>
        );
}

export default SidePanal;