import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import styles from "./TestPage.module.scss";

type P = RouteComponentProps;

class TestPage extends Component<P> {

    render() {
        return (
            <div className={styles.TestPage}>
                <span className={styles.BgText}>Test</span>
                <p>Test page</p>
            </div>
        );
    }
}

export default withRouter(TestPage);