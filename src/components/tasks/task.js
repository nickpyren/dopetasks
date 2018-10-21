import React, {PureComponent} from 'react'

export default class Task extends PureComponent {
    render(){
        return (
            <div className='task'>
                {this.props.title}
            </div>
        )
    }
}