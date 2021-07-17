import * as searchActionTypes from './searchActionTypes';
import { filterTypes } from "./searchActions";

const initialState = {
    searchText : '',
    filterValueSelections: [],
    selectedFilterValueSelections: null,
    selectedFilterType: null,
    mimetypes: [],
    selectedMimetypes: null,
    datasetYears: [],
    selectedYears: null,
    variety: [],
    selectedVarieties: null,
    searchFilters: {
        searchText: '',
        selectedMimetypes: [],
        selectedYears: [],
        selectedVarieties: []
    },
    error: null,
    isFilterLoading: false,
    hitSearch: false
}

const searchReducer = (state= initialState, action) => {
    switch (action.type) {
        case searchActionTypes.GET_FILTERS_REQUEST:
            return{
                ...state,
                isFilterLoading: true
            }
        
        case searchActionTypes.GET_FILTERS_SUCCESS:
            return{
                ...state,
                filterTypes: action.payload.filterTypes,
                mimetypes: action.payload.mimetypes,
                datasetYears: action.payload.datasetYears,
                // variety: action.payload.variety,
                isFilterLoading: false
            }
        
        case searchActionTypes.GET_FILTERS_FAILED:
            return{
                ...state,
                isFilterLoading: false,
                error: action.payload.error
            }
        
        case searchActionTypes.UPDATE_SEARCH_TEXT:
            return{
                ...state,
                searchText: action.payload.searchText,
                searchFilters: {
                    ...state.searchFilters,
                    searchText: action.payload.searchText
                }
            }
        
        // case searchActionTypes.UPDATE_MIMETYPES:
        //     return{
        //         ...state,
        //         mimetypes: action.payload.mimetypes
        //     }
        
        // case searchActionTypes.UPDATE_DATASETYEARS:
        //     return{
        //         ...state,
        //         datasetYears: action.payload.datasetYears
        //     }
        
        case searchActionTypes.UPDATE_SELECTED_MIMETYPES:
            return{
                ...state,
                selectedMimetypes: action.payload.selectedMimetypes,
                searchFilters:{
                    ...state.searchFilters,
                    selectedMimetypes: action.payload.mimeFilters
                }
            }

        case searchActionTypes.UPDATE_SELECTED_DATASETYEARS:
            return {
                ...state,
                selectedYears: action.payload.selectedYears,
                searchFilters: {
                    ...state.searchFilters,
                    selectedYears: action.payload.yearFilters
                }
            }

        case searchActionTypes.UPDATE_SELECTED_VARIETIES:
            return {
                ...state,
                selectedVarieties: action.payload.selectedVarieties,
                searchFilters: {
                    ...state.searchFilters,
                    selectedVarieties: action.payload.selectedVarieties
                }
            }
        
        case searchActionTypes.HIT_SEARCH:
            return {
                ...state,
                searchText: state.searchText.trim(),
                searchFilters: {
                    ...state.searchFilters,
                    searchText: state.searchFilters.searchText !== ''
                                ?   state.searchFilters.searchText.trim()
                                :   state.searchFilters.searchText
                },
                hitSearch: !state.hitSearch
            }
        
        case searchActionTypes.UPDATE_SELECTED_FILTER_TYPE:
            return {
                ...state,
                selectedFilterType: action.payload
            }
        
        case searchActionTypes.SET_FILTER_SELECTIONS:
            return {
                ...state,
                filterValueSelections: setFilterValueSelections(action.payload, state),
                selectedFilterValueSelections: updateSelectedFilterValueSelections(action.payload, state)
            }
        
        case searchActionTypes.UPDATE_SELECTED_FILTER_VALUE_SELECTIONS:
            return {
                ...state,
                selectedFilterValueSelections: action.payload
            }

        default:
            return state;
    }

}

export default searchReducer;

const setFilterValueSelections = (filterType, state) => {
    switch (filterType) {
        case filterTypes.fileType:
            return state.mimetypes;

        case filterTypes.year:
            return state.datasetYears;

        case filterTypes.variety:
            return state.variety;

        case filterTypes.location:
            return [];

        default:
            return [];
    }
}

const updateSelectedFilterValueSelections = (filterType, state) => {
    switch (filterType) {
        case filterTypes.fileType:
            return state.selectedMimetypes;

        case filterTypes.year:
            return state.selectedYears;

        case filterTypes.variety:
            return state.selectedVarieties;

        case filterTypes.location:
            return [];

        default:
            return [];
    }
}