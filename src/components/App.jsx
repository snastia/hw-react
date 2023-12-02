import appchik from "/components/app1.json"

const options = appchik[0]

const colors = ["Червоний", "Синій", "Жовтий"]

export const App = () => {
  const name = "Nastya"
  const firstNum = 4
  const secondNum = 8
  return (
    <>
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fs0.rbk.ru%2Fv6_top_pics%2Fmedia%2Fimg%2F2%2F16%2F346928865645162.webp&tbnid=HgsKuTffThBsfM&vet=12ahUKEwjoj8OXne6CAxVp7LsIHSWyDFUQMygAegQIARBJ..i&imgrefurl=https%3A%2F%2Fwww.rbc.ru%2Flife%2Fnews%2F64e762d19a7947e2616fcc23&docid=03w2oV2XGcqggM&w=1600&h=900&q=%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0&ved=2ahUKEwjoj8OXne6CAxVp7LsIHSWyDFUQMygAegQIARBJ" alt="" />
      <a href={options.url}></a>
      <p>{firstNum+secondNum}</p>
      {appchik.map(option
       <ul>
       <li>
              {option.colors[0]}
        </li>
        <li>
        {option.colors[1]}
        </li>
        <li>
        {option.colors[2]}
        </li>
      </ul>
  )}
    </div>
    )};
    </>
    

