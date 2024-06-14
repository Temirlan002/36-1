import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAction } from '../../redux/actions'
import UserCard from '../../components/UserCard'

function UsersPage() {
    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch()

    console.log(users)
  return (
      <div>
          <button onClick={() => dispatch(fetchUsersAction())}>get users</button>
          
          <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {users.map((item, idx) => <UserCard userInfo={item} />)}
          </div>
      </div> 
  )
}

export default UsersPage