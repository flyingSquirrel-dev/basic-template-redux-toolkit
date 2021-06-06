import { useAppDispatch } from '../../app/store/dispatch'
import { useAppSelector } from '../../app/store/selector'
import { decrement, increment, selectCount } from './slice'

const Count = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const handleIncreaseButtonClick = () => dispatch(increment())

  const handleDecreaseButtonClick = () => dispatch(decrement())

  return (
    <section>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button type="button" onClick={handleIncreaseButtonClick}>
        +
      </button>
      <button type="button" onClick={handleDecreaseButtonClick}>
        -
      </button>
    </section>
  )
}

export default Count
