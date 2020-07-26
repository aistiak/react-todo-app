import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { toggleTodo } from "../redux.js"
const ItemList = () => {
	
	const dispatch = useDispatch() 
	
	const todos = useSelector( state => state.todos ).filter( v => ! v.done  )
	
	const toggleItem = id => dispatch( toggleTodo(id) ) 
	
	const todoList = todos.length !=0 ?  todos.map( (v,k) => {
		return (
			<li key={k} > 
				<input type="checkbox" name={v.id}  onChange={ event => {event.preventDefault();toggleItem( event.target.name )}}  />
				{v.text} 
			</li> 
		)
	}) :  <p className="empty-list" > All Done 🎉  </p> ;

	return (
		<div>
			<ul className="todo-list">
				{ todoList}
			</ul>
		</div>
	)
}

export default ItemList 