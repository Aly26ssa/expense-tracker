import React from 'react'


const ExpenseList = () => {
  return (
    <table class="table-auto">
  <thead>
    <tr className='flex flex-row'>
      <th className='px-6'>Description</th>
      <th className='px-6'>Amount</th>
      <th className='px-6'>Category</th>
    </tr>
  </thead>
  <tbody>
    <tr className='flex flex-row'>
      <td className='px-12'>Eggs</td>
      <td className='px-12'>$6</td>
      <td className='px-7'>Groceries</td>
    </tr>
  </tbody>
</table>
    
  )
}

export default ExpenseList