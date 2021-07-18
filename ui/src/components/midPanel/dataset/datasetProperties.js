import React from 'react';
import { Card, ButtonGroup } from 'react-bootstrap';
import { Row, Col, Popconfirm } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faCloudDownloadAlt, faPen, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { updateDatasetMetadata } from '../../../dataaccess/datasetsDataAccess';
import { loadDetails } from '../../../store/datasetsStore/datasetActions';
import RecursiveComponent from 'react-json-component';
import ReactJson from 'react-json-view';
import { loadProperties, showSubmitMetadataAlert, setMetadataTabChangeFlag, 
         resetMetadataTabChangeFlag, hideSubmitMetadataAlert } from '../../../store/datasetsStore/datasetActions';
import { NotificationManager } from 'react-notifications';
import { getAFile } from '../../../dataaccess/datasetsDataAccess';
import { Skeleton } from '@chakra-ui/core';
import { connect } from 'react-redux';

class datasetProperties extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTab: this.props.datasetData.expandedDatsetDetails[0]
        }
    }

    componentDidMount = () => {
        this.createEditableSection()
    }

    createEditableSection = () => {
        let sections = this.getAllSection()
        
        sections.forEach(section =>{
            let sectionID = `isSection${section}Editable`
            this.setState({
                [sectionID]: false
            })
        })

        this.setState({
            editableMetadata: this.state.currentTab.file
        })
    }

    handleSelectTab = (tab) => {
        this.props.resetMetadataTabChangeFlag()

        let sections = this.getAllSection()
        
        for(let i=0; i<sections.length; i++){
            let sectionID = `isSection${sections[i]}Editable`;
            if(this.state[sectionID]){
                this.props.setMetadataTabChangeFlag()
                this.props.showSubmitMetadataAlert()
                return
            }
        }

        if(!this.props.datasetData.showSubmitMetadataAlert){
            if(tab.id !== this.state.currentTab.id && this.props.datasetData.shouldMetadataTabChanged){
                this.props.loadProperties(tab.id).then(() => {
                    this.props.datasetData.expandedDatsetDetails.forEach(metadata => {
                        if(metadata.id === tab.id){
                            this.setState({
                                currentTab: metadata
                            }, () => this.createEditableSection());
                        }
                    }) 
                })
            }
        }
    }

    showFileName = (tab) => {
        let fileId = `isFile${tab.id}Shown`;
        this.setState({
            [fileId]: true
        })
    }

    hideFileName = (tab) => {
        let fileId = `isFile${tab.id}Shown`;
        this.setState({
            [fileId]: false
        })
    }

    createTabs = () => {
        let { currentTab } = this.state;

        let allTabs = this.props.datasetData.expandedDatsetDetails.map((tab) => {
            let fileId = `isFile${tab.id}Shown`;

            return (
                <span 
                    style={{padding: '0.5em', display: 'flex'}} 
                    className={ currentTab.id === tab.id ? 'top-menu-bar-button active-elem tab-active' : 'top-menu-bar-button border border-gray' } 
                    onClick={() => this.handleSelectTab(tab)}
                    onMouseEnter={() => this.showFileName(tab)}
                    onMouseLeave={() => this.hideFileName(tab)}
                    key={tab.id}
                >
                    <span> 
                        {tab.Name}
                    </span>
                    {currentTab.id !== tab.id && this.state[fileId] && 
                        <span style={{color: 'gray'}}>&nbsp;· 
                            <FontAwesomeIcon icon={faPaperclip} style={{ marginRight: '5px'}}/>
                            {tab["File Name"]}
                        </span>
                    }
                </span>
            )
        })
    
        return <ul className="nav nav-tabs">{allTabs}</ul>
    }

    currentMetadataFile = (metadata) => {
        return(
            <Popconfirm
                title="You are editing a metadata file. Want to discard the change?"
                trigger="click"
                placement="left"
                visible={this.props.datasetData.showSubmitMetadataAlert}
                onConfirm={this.cancelAllPropSectionEdit}
                onCancel={this.props.hideModal}
                getPopupContainer={trigger => trigger.parentElement}
            >
                <a target='_blank' rel="noopener noreferrer" href={'/api/storage' + metadata.url} onClick={() => viewFile(metadata.url)}>
                    <strong style={{fontSize: 'large'}}>{metadata["File Name"]} </strong>
                    <FontAwesomeIcon icon={faCloudDownloadAlt}/>
                </a>
            </Popconfirm>
        )
    }

    togglePropSectionEdit = (sectionID) => {
        this.setState({
            [sectionID]: !this.state[sectionID]
        }, () => this.props.setMetadataTabChangeFlag())
    }

    cancelPropSectionEdit = (sectionID) => {
        this.setState({
            [sectionID]: !this.state[sectionID]
        }, () => {
            let isAnySectionEditing = false;
            let sections = this.getAllSection();
            
            for(let i=0; i<sections.length; i++){
                let section = `isSection${sections[i]}Editable`;
                if(this.state[section]){
                    isAnySectionEditing = true
                    this.props.setMetadataTabChangeFlag()
                }
            }
            if(!isAnySectionEditing){
                this.cancelAllPropSectionEdit()
            }
        })
    }

    cancelAllPropSectionEdit = () => {
        let sections = this.getAllSection()
        
        for(let i=0; i<sections.length; i++){
            let section = `isSection${sections[i]}Editable`;
            this.setState({
                [section]: false
            })
        }
        this.props.resetMetadataTabChangeFlag() 
        this.props.hideModal()
    }

    getAllSection = () => {
        let sectionArray = [];
        this.state.currentTab.file.forEach(metadataSection => {
            for(var key in metadataSection){
                sectionArray.push(key)
            }
        })
        return sectionArray;
    }

    renderEditableProp = (sectionKey) => {
        let sectionData = null;
        this.state.currentTab.file.forEach(metadataSection => {
            for(var key in metadataSection){
                if(key === sectionKey)
                    sectionData = metadataSection[key]
            }
        })
            
        return (
            <ReactJson 
                src={sectionData}
                name={sectionKey}
                iconStyle="circle"
                collapsed="1"
                displayDataTypes={false}
                enableClipboard={false}
                onEdit={(edit) => this.handleUpdateMetadata(edit, sectionKey)}
            />
        )
    }

    handleUpdateMetadata = (editDetails, sectionKey) => {
        let newEditableMetadata = this.state.editableMetadata.map(metadataSection => {
            for(let key in metadataSection){
                return key === sectionKey
                ?   {[key]: editDetails.updated_src}
                :   metadataSection
            }
        })

        this.setState({
            editableMetadata: newEditableMetadata
        })
    }

    handleSubmitUpdatedMetadata = (sectionKey, sectionID) => {
        let formData = new FormData();

        this.state.editableMetadata.forEach(metadataSection => {
            for (var key in metadataSection) {
                if(key === sectionKey){

                    formData.append('metadata_id', this.state.currentTab.id);
                    formData.append('metadata_section', sectionKey);
                    formData.append('metadata_value', JSON.stringify(metadataSection[key]));

                    updateDatasetMetadata(this.props.datasetData.selectedDatasetId, formData).then(response =>{
                        if(response.success){
                            if(response.res.data.isDBUpdated && response.res.data.isLocalFileUpdated){
                                this.togglePropSectionEdit(sectionID)
                                NotificationManager.success('Metadata updated!', 'Success!');
                                this.props.loadDetails(this.props.datasetData.selectedDatasetId)
                            }

                            else if(!response.res.data.isDBUpdated || !response.res.data.isLocalFileUpdated){
                                this.togglePropSectionEdit(sectionID)
                                NotificationManager.error('Failed to Update Metadata','Error!');
                            }
                        }
                        else{
                            NotificationManager.error('Failed to Update Metadata','Error!');
                        }
                    })
                }
            }
        })
    }

    renderPropTables = (metadataFile) => {
        let tableArray = [];
        metadataFile.forEach(metadataSection => {
            for (var sectionName in metadataSection) {
                let sectionID = `isSection${sectionName}Editable`;
                
                tableArray.push(
                    <Col xs={24} sm={24} md={12} lg={12} key={sectionName}>
                        <Card bg="light" className="prop-table">
                            <Card.Header style={{background: 'rgb(0 0 0 / 3%)', color: 'black', fontWeight: 'bold'}}>
                                {sectionName}
                                {
                                    this.props.type === 'My dataset' || this.props.type === 'My group dataset'
                                    ?    !this.state[sectionID]
                                            ?   <FontAwesomeIcon icon={faPen} onClick={() => this.togglePropSectionEdit(sectionID)}
                                                    className="properties-edit-button" style={{margin: '0em 0.5em'}} title="Edit"
                                                />
                                            :   <ButtonGroup style={{float: 'right'}}>
                                                    <FontAwesomeIcon title='Cancel' icon={faTimes} 
                                                        style={{ color: 'red', fontSize: 'x-large', cursor: 'pointer' }} 
                                                        onClick={() => this.cancelPropSectionEdit(sectionID)}>
                                                    </FontAwesomeIcon>
                                                    <FontAwesomeIcon title='Submit' icon={faCheck} 
                                                        style={{ color: 'green', fontSize: 'x-large', margin: '0 0 0 1vw', cursor: 'pointer' }} 
                                                        onClick={() => this.handleSubmitUpdatedMetadata(sectionName, sectionID)}>
                                                    </FontAwesomeIcon>
                                                </ButtonGroup>
                                    :   null
                                }
                            </Card.Header>
                            <Card.Body style={{padding: '0'}}>
                                {
                                    this.state[sectionID]
                                    ?   this.renderEditableProp(sectionName)
                                    :   <RecursiveComponent
                                            property={metadataSection[sectionName]} // JSON
                                            propertyName={sectionName} // root dropdown menu label
                                            excludeBottomBorder={true} // to include or exclude bottom border on the last entry in the list, default: false
                                            emptyPropertyLabel="Property is empty" // text to display for null or undefined values
                                            rootProperty={true} // to signify that this is the root of the document, from a user perspective always needs to be true
                                            propertyNameProcessor={(name) => name + ""} // function that processes property names, default: processes from camelCase to normal text
                                        />
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                );
        }})

        return <Row>{tableArray}</Row> 
    }

    render() {
        return(
            <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}} style={{display: 'flex'}}>    
                    <Col xs={18} sm={18} md={18} lg={18}>{this.createTabs()}</Col>
                    <Col xs={6} sm={6} md={6} lg={6} align="end">{this.currentMetadataFile(this.state.currentTab)}</Col>
                </Row>
                {
                    !this.props.datasetData.isPropertiesDetailsLoading
                    ?   this.renderPropTables(this.state.currentTab.file)
                    :   <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}} style={{display: 'flex'}}>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                            </Col>
                        </Row>
                }
            </div>
        )
    }
}

export const viewFile = (filePath) => {
  getAFile('/api/storage' + filePath).then(response =>{
      if (!response.success) {
          NotificationManager.error('Failed to download file','Error!');
      }
      else{
          let type = response.res.headers['content-type'];
          let blobData = (type === 'application/json') 
              ? JSON.stringify(response.res.data, null, 4)        //json pretty print content
              : response.res.data
          let url = window.URL.createObjectURL(new Blob([blobData], { type: type, encoding: 'UTF-8' }));
          let link = document.createElement('a');
          link.href = url;
          document.body.appendChild(link);
          link.remove();
      }
  })
}

const mapStateToProps = (state) => {
    return{
        authData: state.auth,
        datasetData: state.datasets,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProperties : (metadataId) => dispatch(loadProperties(metadataId)),
        loadDetails: (datasetID) => dispatch(loadDetails(datasetID)),
        showSubmitMetadataAlert: () => dispatch(showSubmitMetadataAlert()),
        setMetadataTabChangeFlag: () => dispatch(setMetadataTabChangeFlag()),
        resetMetadataTabChangeFlag: () => dispatch(resetMetadataTabChangeFlag()),
        hideModal: () => dispatch(hideSubmitMetadataAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(datasetProperties)