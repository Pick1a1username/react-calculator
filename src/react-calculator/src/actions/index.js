export const typeValue = value => ({
  type: 'TYPE_VALUE',
  value
})

export const calculate = operator => ({
  type: 'CALCULATE',
  operator
})

export const ac = () => ({
  type: 'AC'
})

export const c = () => ({
  type: 'C'
})

export const Operators = {
  ADDITION: 'ADDITION',
  SUBSTRACTION: 'SUBSTRACTION',
  MULTIPLICATION: 'MULTIPLICATION',
  DIVISION: 'DIVISION',
  EQUAL: 'EQUAL'
}