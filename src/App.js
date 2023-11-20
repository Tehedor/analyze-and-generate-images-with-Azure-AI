import React from 'react';

function App() {
  // const value = 'World';
  // return <div>Hello {value} mama</div>;
// Create a simple graphical user interface, eenabling the user to interact with the computer vision models. This GUI need to have the next elements:
// 1. A title
// 2. A text box to enter the URL of the image to be analyzed or the prompt of the image to generate
// 3. A button to trigger the image analysis and one to trigger image generation
  const [url, setUrl] = useState('');

  const handleAnalysis = () => {
    // Aquí va el código para analizar la imagen
    
  };

  const handleGeneration = () => {
    // Aquí va el código para generar la imagen
  };

  return (
    <div>
      <h1>Título</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleAnalysis}>Analizar imagen</button>
      <button onClick={handleGeneration}>Generar imagen</button>
    </div>
  );

}

export default App;
