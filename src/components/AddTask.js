const AddTask = () => {
    return (
        <form className='addform'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Input the date and time'/>
            </div>
            <div className='form-control form-control-check'>
                <label>Remnder</label>
                <input type='checkbox'/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
