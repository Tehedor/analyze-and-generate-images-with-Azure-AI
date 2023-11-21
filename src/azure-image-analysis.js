export function isConfigured() {

  if (process.env.process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_KEY ) {
    console.log('prueba 1');
  }
  if (process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_ENDPOINT) {
    console.log('prueba 2');
  }
    return process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_KEY && process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_ENDPOINT;
  }



export async function analyzeImage(imageUrl) {
    const endpoint = process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_ENDPOINT;
    const subscriptionKey = process.env.REACT_APP_AZURE_IMAGE_ANALYSIS_KEY;
    const features = "Categories,Description,Color";
    const apiUrl = `${endpoint}vision/v3.1/analyze?visualFeatures=${features}&details=Landmarks&language=en`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey,
      },
      body: JSON.stringify({ url: imageUrl }),
    });
  
    return await response.json();
}