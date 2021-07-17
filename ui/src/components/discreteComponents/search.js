import React ,{ Fragment } from "react";
import { Row, Col } from 'antd';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretSquareUp, faCaretSquareDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { updateSearchText, hitSearch, updateSelectedFilterType, updateSelectedFilterValueSelections, removeFilters } from '../../store/searchStore/searchActions';
import { connect } from 'react-redux';
// import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { filterTypes } from "../../store/searchStore/searchActions";
import Select from 'react-select';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdownFilter: false,
            selectedFilters : []
        }
    }

    toggleFilter = () => {
        this.setState({
          showDropdownFilter: !this.state.showDropdownFilter
        });
    }

    renderFilterValueSelections = (searchFilters) => {
        let { selectedMimetypes, selectedYears } = searchFilters;

        return (
            <Col xs={24} sm={24} md={24} lg={24}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}}>
                    {
                        selectedMimetypes.length > 0 &&
                        <Col xs='auto' sm='auto' md='auto' lg='auto' className="filter">
                            <label>FileType:</label>
                            {selectedMimetypes.map(mimetype => {
                                return (<label className="filters-label">{mimetype}</label>)
                            })}
                            <Button onClick={() => this.removeFilter(filterTypes.fileType)} title='Remove' style={{background: 'transparent', color: 'black', padding: '2px 5px', border: 'none'}}>
                                <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} onClick={() => this.removeFilter(filterTypes.fileType)} />
                            </Button>
                        </Col>
                    }

                    {
                        selectedYears.length > 0 &&
                        <Col xs='auto' sm='auto' md='auto' lg='auto' className="filter">
                            <label>Year:</label>
                            {selectedYears.map(year => {
                                return (<label className="filters-label">{year} </label>)
                            })}
                            <FontAwesomeIcon type='button' icon={faTimesCircle} style={{ color: 'red' }} onClick={() => this.removeFilter(filterTypes.year)} title='Remove'></FontAwesomeIcon>
                        </Col>
                    }
                </Row>
            </Col>
        );
    }

    searchTextChangeHandler = (e) => {
        this.props.updateSearchText(e.target.value);
    }

    searchOnEnterHit = (e) => {
        if (e.keyCode === 13) {
            this.hitSearch();
        }
    }

    hitSearch = () => {
        this.props.hitSearch()
    }

    handleFilterTypesSelection = (selectedOption) => {
        this.props.updateSelectedFilterType(selectedOption)
    }

    handleSelectedFilterValueSelections = (selectedOptions) => {
        this.props.updateSelectedFilterValueSelections(selectedOptions, this.props.searchStore.selectedFilterType.value);
    }

    removeFilter = (filterType) => {
        if(filterType === this.props.searchStore.selectedFilterType.value){
            this.props.updateSelectedFilterValueSelections([], filterType);
            return;
        }
        this.props.removeFilters(filterType);
    }

    render() {
        return (
            <div className="mb-3">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} className='mb-1'>
                        <InputGroup size='lg'>
                            <FormControl
                                type="text"
                                placeholder="Search in Medical Inventory"
                                value={this.props.searchStore.searchText}
                                onChange={(e) => this.searchTextChangeHandler(e)}
                                onKeyUp={(e) => this.searchOnEnterHit(e)}
                            />
                            <InputGroup.Prepend>
                                <Button title='Search' onClick={this.hitSearch}><FontAwesomeIcon icon={faSearch}/></Button>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <Button title='Filter' onClick={this.toggleFilter}>
                                    <FontAwesomeIcon icon={this.state.showDropdownFilter ? faCaretSquareUp : faCaretSquareDown}></FontAwesomeIcon>
                                </Button>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Col>
                </Row>

                    {this.state.showDropdownFilter &&
                        <Fragment>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40}} className='mb-1' style={{ padding: '1em 0', margin: '0 1em', background: '#add8e675', borderRadius: '.3rem' }}>
                                <Col xs={8} sm={8} md={8} lg={8} className='gutter-row'>
                                    <Select
                                        value={this.props.searchStore.selectedFilterType}
                                        onChange={this.handleFilterTypesSelection}
                                        options={this.props.searchStore.filterTypes}
                                        isMulti={false}
                                        isSearchable={true}
                                        styles={{ menu: provided => ({ ...provided, zIndex: 9999 }) }}
                                        placeholder='Select filter type'
                                    />
                                </Col>

                                <Col xs={16} sm={16} md={16} lg={16} className='gutter-row'>
                                    <Select
                                        value={this.props.searchStore.selectedFilterValueSelections}
                                        onChange={this.handleSelectedFilterValueSelections}
                                        options={this.props.searchStore.filterValueSelections}
                                        isMulti={true}
                                        isSearchable={true}
                                        styles={{ menu: provided => ({ ...provided, zIndex: 9999 }) }}
                                        placeholder='Select filter values'
                                    />
                                </Col>
                            </Row>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40}} className='mb-1' style={{ margin: '0em',fontSize: 'small' }}>
                                {this.renderFilterValueSelections(this.props.searchStore.searchFilters)}
                            </Row>
                        </Fragment>
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchStore: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchText : (searchText) => dispatch(updateSearchText(searchText)),
        hitSearch: () => dispatch(hitSearch()),
        updateSelectedFilterType : (filterType) => dispatch(updateSelectedFilterType(filterType)),
        updateSelectedFilterValueSelections: (selectedOptions, filterType) => dispatch(updateSelectedFilterValueSelections(selectedOptions, filterType)),
        removeFilters: (filterType) => dispatch(removeFilters(filterType)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)