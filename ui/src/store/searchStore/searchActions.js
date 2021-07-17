import * as searchActiontypes from "./searchActionTypes";
import { loadFilters } from "../../dataaccess/searchDataAccess";
import { parseFilterValues, parseFilterTypes } from "../../helperMethods/filterParser";
import { NotificationManager } from "react-notifications";


// Filter types

export const filterTypes = {
    fileType : 'FileType',
    year: 'Year',
    variety: 'Variety',
    location: 'Location'
}

Object.freeze(filterTypes);

//Actions

const actionGetFiltersRequest = () => {
    return {
        type: searchActiontypes.GET_FILTERS_REQUEST
    }
}

const actionGetFiltersSuccess = (payload) => {
    return {
        type: searchActiontypes.GET_FILTERS_SUCCESS,
        payload: payload
    }
}

const actionGetFiltersFailed = (payload) => {
    return {
        type: searchActiontypes.GET_FILTERS_FAILED,
        payload: payload
    }
}

const actionUpdateSearchText = (payload) => {
    return {
        type: searchActiontypes.UPDATE_SEARCH_TEXT,
        payload: payload
    }
}

const actionUpdateSelectedMimetypes = (payload) => {
    return {
        type: searchActiontypes.UPDATE_SELECTED_MIMETYPES,
        payload: payload
    }
}

const actionUpdateSelectedYears = (payload) => {
    return {
        type: searchActiontypes.UPDATE_SELECTED_DATASETYEARS,
        payload: payload
    }
}

const actionHitSearch = () => {
    return {
        type: searchActiontypes.HIT_SEARCH
    }
}

const actionUpdateSelectedFilterType = (payload) => {
    return {
        type: searchActiontypes.UPDATE_SELECTED_FILTER_TYPE,
        payload: payload
    }
}

const actionSetFilterValueSelections = (payload) => {
    return {
        type: searchActiontypes.SET_FILTER_SELECTIONS,
        payload: payload
    }
}

const actionUpdateSelectedFilterValueSelections = (payload) => {
    return {
        type: searchActiontypes.UPDATE_SELECTED_FILTER_VALUE_SELECTIONS,
        payload: payload
    }
}

//Action Creators

export const updateSearchText = (searchText) => {
    return (dispatch) => {
        dispatch(actionUpdateSearchText({searchText: searchText}));
    }
}

// const updateSelectedMimetypes = (selectedMimetypes) => {
//     let mimeFilters = [];
//     if(selectedMimetypes){
//         selectedMimetypes.forEach(selectedMimetype => {
//             mimeFilters.push(selectedMimetype.value);
//         });
//     }
//     selectedMimetypes = {selectedMimetypes: selectedMimetypes, mimeFilters: mimeFilters};

//     return (dispatch) => {
//         dispatch(actionUpdateSelectedMimetypes(selectedMimetypes))
//     }
// }

// const updateSelectedYears = (selectedYears) => {
//     let yearFilters = [];
//     if(selectedYears){
//         selectedYears.forEach(selectedYear => {
//             yearFilters.push(selectedYear.value);
//         });
//     }
//     selectedYears = {selectedYears: selectedYears, yearFilters: yearFilters};

//     return (dispatch) => {
//         dispatch(actionUpdateSelectedYears(selectedYears));
//     }
// }

export const hitSearch = () => {
    return(dispatch) => {
        dispatch(actionHitSearch())
    }
}

export const getFilters = () => {
    return (dispatch) => {
        dispatch(actionGetFiltersRequest());
        loadFilters()
        .then(response => {
            if (response.success) {
                let mimetypes = parseFilterValues(response.res.data.FileType);
                let years = parseFilterValues(response.res.data.Year);
                // let variety = parseFilterValues(response.res.data.Variety);
                let filterTypes = parseFilterTypes(response.res.data);
                
                dispatch(actionGetFiltersSuccess({ mimetypes: mimetypes, datasetYears: years, filterTypes: filterTypes }));
                return;
            }
            else{
                NotificationManager.error('Failed to load filters', 'Error!');
            }
        })
        .catch(err => {
            NotificationManager.error('Failed to load filters', 'Error!');
        })
    }
}

export const updateSelectedFilterType = (filterType) => {
    return (dispatch) => {
        dispatch(actionUpdateSelectedFilterType(filterType));
        dispatch(actionSetFilterValueSelections(filterType.value));
    }
}

export const updateSelectedFilterValueSelections = (selectedOptions, selectedFilterType) => {
    return (dispatch) => {
        switch (selectedFilterType) {
            case filterTypes.fileType:
                let mimeFilters = [];
                if (selectedOptions) {
                    selectedOptions.forEach(selectedMimetype => {
                        mimeFilters.push(selectedMimetype.value);
                    });
                }
                let selectedMimetypes = { selectedMimetypes: selectedOptions, mimeFilters: mimeFilters };
                dispatch(actionUpdateSelectedMimetypes(selectedMimetypes));
                dispatch(actionHitSearch());
                break;

            case filterTypes.year:
                let yearFilters = [];
                if (selectedOptions) {
                    selectedOptions.forEach(selectedYear => {
                        yearFilters.push(selectedYear.value);
                    });
                }
                let selectedYears = { selectedYears: selectedOptions, yearFilters: yearFilters };
                dispatch(actionUpdateSelectedYears(selectedYears));
                dispatch(actionHitSearch());
                break;

            case filterTypes.variety:
                break;

            case filterTypes.location:
                break;

            default:
                break;
        }
        dispatch(actionUpdateSelectedFilterValueSelections(selectedOptions));
    }
}

export const removeFilters = (filterType) => {
    return (dispatch) => {
        switch (filterType) {
            case filterTypes.fileType:
                let selectedMimetypes = { selectedMimetypes: [], mimeFilters: [] };
                dispatch(actionUpdateSelectedMimetypes(selectedMimetypes));
                dispatch(actionHitSearch());
                break;

            case filterTypes.year:
                let selectedYears = { selectedYears: [], yearFilters: [] };
                dispatch(actionUpdateSelectedYears(selectedYears));
                dispatch(actionHitSearch());
                break;

            case filterTypes.variety:
                break;

            case filterTypes.location:
                break;

            default:
                break;
        }
    }
}