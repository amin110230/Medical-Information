import React from 'react';

export default class PageNotFound extends React.Component{
  render(){
    return(
        <div className='container-full' style={{position:'absolute', height:'100%', width: '100%', textAlign: 'center'}}>
            <h2> Resource Not Found </h2>
            <span> Under Construction </span>
        </div>
    )
  }
}
