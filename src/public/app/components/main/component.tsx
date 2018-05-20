import * as React from 'react';

import { IMapStateToProps, IMapDispatchToProps } from './container';

interface IProps extends IMapStateToProps, IMapDispatchToProps {

}

export class Main extends React.Component<IProps, {}> {
    props: IProps;

    render(): JSX.Element {
        return (
            <main className="diploma-container">
                hello world
            </main>
        );
    }
}
