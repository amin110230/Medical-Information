import React, {Fragment} from 'react';
import AddEditDatasetModal from '../midPanel/dataset/addEditDatasetModal';
import RegisterDatasetModal from '../midPanel/dataset/registerDatasetModal';
import DatasetShare from '../midPanel/dataset/datasetShareModal'; 
import DatasetDetailModal from '../midPanel/dataset/datasetDetailModal';


class ModalComponents extends React.Component {
    render(){
        return (
            <Fragment>
                <AddEditDatasetModal/>
                <RegisterDatasetModal/>
                <DatasetShare/>
                <DatasetDetailModal />
            </Fragment>
        )
    }
}

export default ModalComponents
