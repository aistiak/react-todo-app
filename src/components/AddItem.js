import React ,{ useEffect} from 'react';
import { useDispatch , useSelector } from "react-redux"
import { addTodo ,setTodos   } from "../redux"

const AddItem = () => {
	
	const dispatch = useDispatch()
	
	const todos = useSelector( state => state.todos )
	
	useEffect( () => {
		// local -> store 
		let t = JSON.parse ( localStorage.getItem('my-awsome-todos') ) || []
		dispatch( setTodos( t ) )

	}, [])

	useEffect( () => {
		// store -> local 
		localStorage.setItem('my-awsome-todos',JSON.stringify(todos)) 

	}, [todos])
	


	const addItem = () => {	
		const text = document.querySelector("#todo-input").value
		if( text ) {
			dispatch( addTodo(text) )
			document.querySelector("#todo-input").value = ""
		}
	}

	const handelKeyPress = (arg,event) => {
		
		if(event.keyCode  == 13) addItem() 
	}


	return (
		
		<div>
			<input placeholder="enter todo" id="todo-input" onKeyDown={ (event) => handelKeyPress({},event) }/>
				
		</div> 
	)
}

export default AddItem 
