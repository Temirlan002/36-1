import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAboutTitle, changeAboutTitleWithParams, changeInput, getUsers } from '../../store/AboutSlice'
import UsersCard from '../../components/UsersCard'

function AboutPage() {
    const dispatch = useDispatch()
    const { title, inputValue, users } = useSelector(state => state.aboutReducer)
    
    const inputEvent = (event) => {
        dispatch(changeInput(event.target.value))
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    console.log(users)

  return (
      <div>
          {/* <h1>{ aboutTitle }</h1> */}
          {/* <button onClick={() => dispatch(changeAboutTitle())}>change title</button>
          <button onClick={() => dispatch(changeAboutTitleWithParams('aavsdfdsfdsf'))}>change title with params</button> */}
          {/* <input type='text' onChange={inputEvent} />
          <button>add</button>
          <p>{inputValue}</p> */}
          
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {users.map((user, idx) => <UsersCard key={idx} userInfo={user} />)}
          </div>
      </div>
  )
}

export default AboutPage