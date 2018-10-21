import React, {Component} from 'react'
import Task from './task'

export default class TaskList extends Component {

    render(){
        return (
            <div className='task-list'>
                <Task title='Get groceries'></Task>
                <Task title='Wash car'></Task>
                <Task title='call parents'></Task>
                <Task></Task>
            </div>
        )
    }
}