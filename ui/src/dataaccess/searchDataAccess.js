import * as baseDataAccess from './baseDataAccess'; 
import {axiosCall} from './baseDataAccess';

export const loadFilters = () => {
    return axiosCall.get( baseDataAccess.baseUrl+"/api/datasets/filters")
      .then((response) => {
        return {
          res: response,
          success: true,
        };
      })
      .catch((error) => {
        return {
          res: error,
          success: false,
        };
      });
}
