import React, {useState} from 'react'

function Notification() {
    const [AllUser, setAllUser] = useState(0)
    return (
        <div className='add__notification container-fluid'>
            <h2>Add Notification</h2>
            <div className='add__notification__form container'>
                <form>
                    <div className='form-group'>
                        <label className="checkbox-inline"><input type="checkbox" onChange={(e) => setAllUser(!AllUser)}/>Notify All Users</label>
                    </div>

                    <div className='form-group'>
                        {/* fetch data of all users and place in these select tag. value in the option tag should be the user id of that user */}
                        <label htmlFor='users'>Select user to be notified:</label>
                        {
                            // if all users to be notified then disable the input
                            AllUser == 0 ?
                            <select name="users" id="users" className='form-control'>
                                <option value="volvo">User A</option>
                                <option value="saab">User B</option>
                                <option value="opel">User C</option>
                                <option value="audi">User D</option>
                            </select>
                            :
                            <select name="users" id="users" className='form-control' disabled>
                                <option value="volvo">User A</option>
                                <option value="saab">User B</option>
                                <option value="opel">User C</option>
                                <option value="audi">User D</option>
                            </select>
                        } 
                    </div>

                    <div className='form-group'>
                        <label htmlFor='notification-title'>Notification Title</label>
                        <input name='notification-title' className='form-control' placeholder='Enter Notification Title Here'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='notification'>Notification Body</label>
                        <textarea name='notification' className='form-control' rows={5} placeholder='Type Notification Here'></textarea>
                    </div>
                    
                    <button className='btn btn-primary'>Notify</button>
                </form>
            </div> 
        </div>
    )
}

export default Notification
