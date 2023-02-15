interface TotalRemoveProps {
  total: number
}

const TotalRemove = ({total}: TotalRemoveProps) => {
  return (
    <>
      <div>Do you wish to remove the total sum?</div>
      <p>Total: {total}</p>
    </>
  )
}
export {TotalRemove}