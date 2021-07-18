import React, { Fragment } from 'react';
import DatasetProperties from './datasetProperties';
import { PropagateNotifier } from '../../utilityComponents/propagateLoader';
import { connect } from 'react-redux';

class datasetBody extends React.Component {
     render() {
        let { expandedDatsetDetails, expandedDatasetData, isDetailsLoading, selectedDatasetId } = this.props.datasetData;

        return (
            <Fragment>
                <h5 className='title-line'>Metadata</h5>
                <PropagateNotifier isLoading={isDetailsLoading} />
                {!isDetailsLoading &&
                    <Fragment>
                        {expandedDatsetDetails && expandedDatsetDetails.length > 0
                            ?   <DatasetProperties key={selectedDatasetId} type={this.props.type}/>

                            :   <div className="border border-gray rounded-lg p-1" style={{ display: 'flex' }}>
                                    <span className='m-auto'>No Properties Found.</span>
                                </div>
                        }
                    </Fragment>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        datasetData: state.datasets
    }
}


export default connect(mapStateToProps, null)(datasetBody)