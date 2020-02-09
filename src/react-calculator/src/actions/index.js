// let nextTodoId = 0
// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })
// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })
// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

export const addValue = value => ({
  type: 'ADD_VALUE',
  value
})

export const typeValue = value => ({
  type: 'TYPE_VALUE',
  value
})

export const calculate = operator => ({
  type: 'CALCULATE',
  operator
})

export const Operators = {
  ADDITION: 'ADDITION',
  SUBSTRACTION: 'SUBSTRACTION',
  MULTIPLICATION: 'MULTIPLICATION',
  DIVISION: 'DIVISION',
  EQUAL: 'EQUAL'
}