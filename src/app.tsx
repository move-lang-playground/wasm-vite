import init,{ parse_str } from "@wgb5445/hello-wasm"
import './app.css'

init(import.meta.env.DEV?"./node_modules/@wgb5445/hello-wasm/hello_wasm_bg.wasm":undefined).then(()=>{
  console.log("wasm loaded")
})



 
export  function App() {
  return (
    <>
      <button onClick={async()=>{
        await parse_str("module test::test {}")
      }}>Click Me</button>
    </>
  )
}
