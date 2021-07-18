import React, { Fragment } from 'react';
import { Button, Card, Accordion, Alert } from 'react-bootstrap';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faRegistered, faSoap, faBullhorn, 
    faTrashAlt, faSyncAlt, faFileArchive
    } from '@fortawesome/free-solid-svg-icons';
import { PropagateNotifier } from '../../utilityComponents/propagateLoader';
import { 
    loadDatasets, loadDetails, appendNewData, appendNewLink,
    appendNewMetadata, selectADataset, loadDatasetSearchResults, 
    closeDatasetSearchAlert, updateActiveAccordion,
    syncDataset, showAddDatasetModal, showRegisterDatasetModal,
    showSubmitMetadataAlert, publishDataset
    } from '../../../store/datasetsStore/datasetActions';
import { connect } from 'react-redux';
import DatasetHeader from './datasetHeader';
import DatasetBody from './datasetBody';
import { Divider } from "antd";

class Datasets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            metadataTemplate: [],
            versions: []
        }
    }

    addEditDatasetModal = () => {
        this.props.showAddDatasetModal();
    }

    appendNewData = (newData) => {
        this.props.appendNewData(newData)
    }

    appendNewLink = (newLink) => {
        this.props.appendNewLink(newLink)
    }

    appendNewMetadata = (newMetadata) => {
        this.props.appendNewMetadata(newMetadata)
    }

    showRegisterDatasetModal = (datasetId) => {
        this.props.selectADataset(datasetId)
        this.props.showRegisterDatasetModal()
    }

    getDatasetDetails = (e, dataset) => {
        if(this.props.datasetStore.shouldMetadataTabChanged){
            if(dataset.id === this.props.datasetStore.activeAccordion){
                this.props.updateActiveAccordion(null)
                return
            }
            else{
                this.props.updateActiveAccordion(dataset.id)
            }

            if(dataset.status === "Published" || this.props.authData.isAuthenticated){
                this.props.selectADataset(dataset.id)
                this.props.loadDetails(dataset.id)
            }
        }
        else{
            this.props.showSubmitMetadataAlert()
        }
    }

    loadDatasets = (searchFilters, isInitialLoading) => {
        let pageNum = isInitialLoading ? 1 : this.props.datasetStore.pageNum + 1
        if (searchFilters.searchText || (searchFilters.selectedMimetypes && searchFilters.selectedMimetypes.length) 
            || ( searchFilters.selectedYears && searchFilters.selectedYears.length)) {
                this.props.loadDatasetSearchResults(searchFilters, pageNum, this.props.datasetStore.numOfItems, isInitialLoading);
                return;
        }
        this.props.loadDatasets(pageNum, this.props.datasetStore.numOfItems, isInitialLoading);
    }

    componentDidMount() {
        this.loadDatasets(this.props.search.searchFilters, true);

        const scrollObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        let scrollObserver = new IntersectionObserver(this.observeScroll, scrollObserverOptions);
        scrollObserver.observe(document.querySelector("#endOfList"));
    }

    componentDidUpdate(prevProps) {
        if (this.props.search.hitSearch !== prevProps.search.hitSearch) {
            this.loadDatasets(this.props.search.searchFilters, true);
        }
    }

    closeAlert = () => {
        this.props.closeDatasetSearchAlert();
    }

    observeScroll = (entries, observer) => {
        if(entries[0].isIntersecting && this.props.datasetStore.hasMore){
            this.loadDatasets(this.props.search.searchFilters, false);
        }
    }

    renderDataset = (datasets) => {
        return (
            datasets.map(dataset => {
                return (
                    <Fragment key={dataset.id}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={dataset.id} className="dataset-header" onClick={(e) => this.getDatasetDetails(e, dataset)}>
                                <DatasetHeader properties={dataset} key={dataset.id}/>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={dataset.id}>
                                <Fragment>
                                    <Card.Body>
                                        {dataset.type === 'My dataset' || dataset.type === 'My group dataset' ? 
                                            <Fragment>
                                                <div className='floating-toolbar'>
                                                    <Button className='m-1 floating-toolbar-button' onClick={() => this.showRegisterDatasetModal(dataset.id)} title='Register'>
                                                        <FontAwesomeIcon icon={faRegistered} />
                                                    </Button>
                                                    <Button className='m-1 floating-toolbar-button' title='Sync' onClick={() => this.props.syncDataset(dataset.id)}>
                                                        <FontAwesomeIcon icon={faSyncAlt} />
                                                    </Button>
                                                    <Button className='m-1 floating-toolbar-button' title='Clean Dataset'>
                                                        <FontAwesomeIcon icon={faSoap} />
                                                    </Button>
                                                    <Button className='m-1 floating-toolbar-button' title='Publish Dataset' onClick={() => this.props.publishDataset(dataset.id)}>
                                                        <FontAwesomeIcon icon={faBullhorn} />
                                                    </Button>
                                                    <Button className='m-1 floating-toolbar-button' onClick={() => console.log('Feature is under development!')} title='Download Dataset'>
                                                        <FontAwesomeIcon icon={faFileArchive} />
                                                    </Button>
                                                    <Button className='m-1 floating-toolbar-button' title='Delete Dataset' variant='danger'>
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </Button>
                                                </div>
                                                <br />
                                            </Fragment>  
                                            : 
                                            <Fragment></Fragment>
                                        }
                                        {dataset.status === "Published" || this.props.authData.isAuthenticated
                                            ?   <DatasetBody key={dataset.id} type={dataset.type}/>
                                            :   !this.props.authData.isAuthenticated &&
                                                <span style={{ color: 'red', fontSize: 'large' }}>
                                                    Please login to view details!
                                                </span>
                                        }
                                    </Card.Body>
                                </Fragment>
                            </Accordion.Collapse>
                        </Card>
                        <br />
                    </Fragment>
                )
            })
        )
    }

    render() {
      
        return (
            <Row style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                <Col span={24}>
                    <Accordion activeKey={this.props.datasetStore.activeAccordion}>
                        <Row>
                            <Col flex="auto">
                                {this.props.datasetStore.numberOfTotalItem !== null &&
                                    <Alert variant="success" dismissible onClose={this.closeAlert} className="mr-3">
                                        {this.props.datasetStore.numberOfTotalItem} dataset(s) found.
                                    </Alert>
                                }
                            </Col>

                            {this.props.authData.isAuthenticated &&
                                <Col flex="none" align="end">
                                    <Button title="Add New Dataset" onClick={this.addEditDatasetModal} className="mt-1 mb-3" style={{fontSize: 'larger'}}>Create Dataset</Button>
                                </Col>
                            }
                        </Row>

                        <PropagateNotifier isLoading={this.props.datasetStore.isListInitLoading} />
                        <PropagateNotifier isLoading={this.props.datasetStore.isListInitLoading} />
                        <PropagateNotifier isLoading={this.props.datasetStore.isListInitLoading} />
                        {!this.props.datasetStore.isListInitLoading && this.renderDataset(this.props.datasetStore.datasets)}

                        <div id='endOfList' className='col-sm-12'>
                            {!this.props.datasetStore.hasMore && !this.props.datasetStore.isListInitLoading &&
                                <Divider>End of List</Divider>
                            }
                            <PropagateNotifier isLoading={this.props.datasetStore.hasMore} />
                        </div>
                    </Accordion>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authData: state.auth,
        datasetStore: state.datasets,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDatasets: (pageNum, numOfItems, isInitLoading) => dispatch(loadDatasets(pageNum, numOfItems, isInitLoading)),
        loadDatasetSearchResults: (searchFilters, pageNum, numOfItems, isInitLoad) => dispatch(loadDatasetSearchResults(searchFilters, pageNum, numOfItems ,isInitLoad)),
        loadDetails: (datasetID) => dispatch(loadDetails(datasetID)),
        selectADataset: (datasetID) => dispatch(selectADataset(datasetID)),
        appendNewData: (newData) => dispatch(appendNewData(newData)),
        appendNewLink: (newLink) => dispatch(appendNewLink(newLink)),
        appendNewMetadata: (newMetadata) => dispatch(appendNewMetadata(newMetadata)),
        closeDatasetSearchAlert: () => dispatch(closeDatasetSearchAlert()),
        syncDataset: (datasetId) => dispatch(syncDataset(datasetId)),
        publishDataset: (datasetId) => dispatch(publishDataset(datasetId)),
        updateActiveAccordion: (datasetId) => dispatch(updateActiveAccordion(datasetId)),
        showAddDatasetModal : () => dispatch(showAddDatasetModal()),
        showRegisterDatasetModal: () => dispatch(showRegisterDatasetModal()),
        showSubmitMetadataAlert: () => dispatch(showSubmitMetadataAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Datasets)
