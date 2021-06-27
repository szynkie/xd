import React, {Component} from 'react';

import Publications from './Publications/Publications';
import Work from '../Work/Work';
import styles from "./Home.module.scss";
import Workspaces from './Workspaces/Workspaces';

class Home extends Component {

    render() {
        return (
            <div className={styles.Home}>
                <Publications/>
                <Workspaces/>
                <Work/>
            </div>
        );
    }
}

export default Home;