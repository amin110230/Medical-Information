import React, {Fragment} from 'react'
import {Spinner} from 'react-bootstrap';


export class PropagateNotifier extends React.Component{
    render(){
        return(
            <Fragment>
                {
                    this.props.isLoading &&

                    <div className='pb-2 m-auto' style={{display: 'table'}}>
                        <Spinner animation='grow' variant='primary' />
                        <Spinner animation='grow' variant='primary' />
                        <Spinner animation='grow' variant='primary' />
                    </div>
                }
            </Fragment>
        )
    }
}