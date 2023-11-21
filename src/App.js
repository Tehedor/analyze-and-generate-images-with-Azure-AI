import React, { useState, useEffect } from 'react';
import { analyzeImage, isConfigured as isAnalysisConfigured } from './azure-image-analysis';
import { generateImage, isConfigured as isGenerationConfigured } from './azure-image-generation';

function App() {
  const [url, setUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    if (isAnalysisConfigured() && isGenerationConfigured()) {
      setIsConfigured(true);
    }
  }, []);

  const handleAnalysis = async () => {
    if (!url) {
      alert('No url de la imagen para analizar.');
      return;
    }
    const result = await analyzeImage(url);
    console.log(result);
    setAnalysisResult(result);
  };

  const handleGeneration = async () => {
    // if (!analysisResult) return;
    
    if (!analysisResult) {
      alert('No hay datos para generar una imagen.');
      return;
    }
    const result = await generateImage(analysisResult);
    console.log(result);
    // Assuming the result contains a property 'imageUrl' with the URL of the generated image
    setGeneratedImageUrl(result.imageUrl);  
  };

  const DisplayResults = () => {
    if (!analysisResult && !generatedImageUrl) return null;
    return (
      <div>
        {analysisResult && (
          <div>
            <h2>Analysis Results:</h2>
            <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
          </div>
        )}
        {generatedImageUrl && (
          <div>
            <h2>Generated Image:</h2>
            {/* <img src={generatedImageUrl}  style={{width: '300px', height: '300px'}} /> */}
            <img src={generatedImageUrl} alt="Generated" style={{width: '300px', height: '300px'}} />
          </div>
        )}
      </div>
    );
  };
  if (!isConfigured) {
    return (
      <div>
        <h1>Computer Vision</h1>
        <p>Warning: The application is not configured properly. Please check your environment variables.</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>Computer Vision</h1>
      </div>
      <div>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL to analyze or textual prompt to generate an image" />
      </div>
      <div>  
        <button onClick={handleAnalysis}>Analizar imagen</button>
        <button onClick={handleGeneration}>Generar imagen</button>
      </div>
      <div>
        {url && <img src={url} alt="Input" style={{width: '300px', height: '300px'}} />}
      </div>
      <div>
        <DisplayResults />
      </div>
    </div>
  );
}

export default App;