import { connect } from 'react-redux';

import { IState } from '../../models';
import { Main } from './component';

export interface IMapStateToProps {

}

export interface IMapDispatchToProps {

}

const mapStateToProps = (state: IState): IMapStateToProps => ({

});

const mapDispatchToProps = (dispatch): IMapDispatchToProps => ({

});

export const MainContainer = connect<IMapStateToProps, IMapDispatchToProps>(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
