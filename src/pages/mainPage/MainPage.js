import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncFunctionAction, changeTitleAction } from '../../redux/actions'

function MainPage() {

  const title = useSelector(state => state.mainReducer.title)
  const dispatch = useDispatch()

  const changeTitle = () => {
    dispatch(changeTitleAction())
  }

  return (
    <div>
      <h1>{ title }</h1>
      <button onClick={changeTitle}>change title</button>
      <button onClick={() => dispatch(asyncFunctionAction())}>async</button>
    </div>
  )
}

export default MainPage;