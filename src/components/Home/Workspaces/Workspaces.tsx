import React, { Component} from 'react';
import { FiUsers } from "react-icons/fi";
import { IWorkspace } from '../../../utils/Rest';
import { Link } from 'react-router-dom';
import RestService from '../../../utils/RestService';
import styles from "./Workspaces.module.scss";

type S = {
    workspaces: Array<IWorkspace> | null
}

class Workspaces extends Component<{}, S> {
   
    constructor(props: {}) {
        super(props);
        this.state = {
            workspaces: null
        }
    }

    componentDidMount() {
        const service = new RestService();
        this.setState({
            workspaces: service.getWorkspaces()
        })
    }

    getWorkspaceTile(work: IWorkspace) {
        return <Link className={styles.tile} to={`/workspace/${work.id}`} key={`ws_${work.id}`}>
            <div>
            <div className={styles.tileBg} style={{ backgroundImage: `url(${work.background})` }}></div>
            <div className={styles.tileContent}>
                <div className={styles.tileTitle}>
                    
                    <h3>{work.title}</h3>
                </div>
                <div className={styles.tileInfo}>
                    
                    <span>{work.type}</span>
                    <div className={styles.separator} />
                    <FiUsers />
                    <span>{work.users} users</span>
                </div>
                
            </div>
            </div>
        </Link>
    }

    render() {
        const { workspaces } = this.state;
        return (<>
            <h2 className={'header-2 header-indent'}>Workspaces</h2>
            <section className={styles.Workspaces} >
                {workspaces?.map((ws) => this.getWorkspaceTile(ws))}
            </section>
        </>);
    }
}

export default Workspaces;