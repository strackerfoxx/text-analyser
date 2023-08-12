import { useState } from "react"
import Form from "./components/Form"

export default function App() {
  const [mode, setMode] = useState("")
  const [result, setResult] = useState([])
  function handleChange(text){
    setMode(text)
    setResult([])
  }
  return (
    <>
      <aside>
        <a href="http://127.0.0.1:5173/"><img src="../logo-T-cube.png" alt="logo" /></a>
        <button className="icon" onClick={() => handleChange("feels")} >😀 <span> analyze feels</span></button>
        <button className="icon" onClick={() => handleChange("summarizes")} >📄 <span>summarizes text</span></button>
        <button className="icon" onClick={() => handleChange("scan")} >🖨️ <span>scan text</span></button>
      </aside>

      {mode === "" ? (
        <main>
        <section id="section-1">
        <h1 className="text-pop-up-top">
          Text Analyser
        </h1>
        <div >
          <button className="icon" onClick={() => handleChange("feels")}>😀</button>
          <button className="icon" onClick={() => handleChange("summarizes")}>📄</button>
          <button className="icon" onClick={() => handleChange("scan")}>🖨️</button>
        </div>
            <a href="#section-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
        </section>

        <section id="section-2">
          <img src="../logo-T-cube.png" alt="logo" />
          <h2>Introducing Text Analyser</h2>
          <p> Power your text analysis with our advanced online tool. Detect emotions, summarize long texts instantly. Simplify understanding of content and comments.</p>
          <p>You can also scan and extract text from files for quick analysis. Experience the efficiency of text analysis with our innovative platform today!</p>
        </section>

        <section id="section-3">
          <div id="card-container">
            <div className="card">
            <button className="icon" onClick={() => handleChange("feels")}>😀</button>
              <p>analyze feels</p>
              <button className="btn">Analyze Text</button> 
            </div>
            <div className="card">
              <button className="icon" onClick={() => handleChange("summarizes")}>📄</button>
              <p>summarizes text</p>
              <button className="btn">Analyze Text</button>
            </div>
            <div className="card">
              <button className="icon" onClick={() => handleChange("scan")}>🖨️</button>
              <p>scan text</p>
              <button className="btn">Analyze Text</button>
            </div>
          </div>
        </section>
      </main>

      ): mode === "feels" ? (
          <Form title="Analyze the text's sentiments" type={mode} result={result} setResult={setResult}/>
      ): mode === "summarizes" ? (
          <Form title="Summarize Text" type={mode} result={result} setResult={setResult}/>
      ): mode === "scan" && (
          <Form title="Scan the text from the document" type={mode} result={result} setResult={setResult}/>
      )}
    </>
  )
}