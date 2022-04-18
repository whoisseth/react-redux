import { useRecoilState, useRecoilValue } from 'recoil'
import { charCounterState } from '../recoil/selectors/charCounterState'
import { textState } from '../recoil/atoms/textState'
function CharacterCounter() {
  return (
    <div className="m-4 w-60 rounded border px-4  py-2 hover:border-black">
      <h1 className="mb-4 text-xl">
        Character Counter with <span className="text-pink-500">recoil</span>
      </h1>
      <TextInput />
      <CharacterCount />
    </div>
  )
}
function TextInput() {
  const [text, setText] = useRecoilState(textState)
  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="space-y-1 ">
      <input
        type="text"
        value={text}
        onChange={onChange}
        className="rounded border-2 px-2"
      />
      <br />
      <div>Echo :{text}</div>
    </div>
  )
}

function CharacterCount() {
  const count = useRecoilValue(charCounterState)
  return <div> Character Count: {count} </div>
}
export default CharacterCounter
