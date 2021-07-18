export const parseFilterValues = (filters) => {
    let parsedFilters = [];
    filters.forEach(
        (filter) => {
            parsedFilters.push({label: filter, value: filter})
        }
    );
    return parsedFilters;
}

export const parseFilterTypes = (filterTypes) => {
    let parsedTypes = [];
    Object.entries(filterTypes).forEach(
        ([key, value]) => {
            parsedTypes.push({label: key, value:key});
        }
    );
    return parsedTypes;
}