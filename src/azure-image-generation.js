export function isConfigured() {
  return process.env.REACT_APP_AZURE_IMAGE_GENERATION_KEY ;
}


export async function generateImage(json) {
  const key = process.env.REACT_APP_AZURE_IMAGE_GENERATION_KEY ;
  const description = json.description.captions[0]?.text || "tortilla de patatas";

  const response = await fetch(
    'https://api.openai.com/v1/images/generations',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        // model: "dall-e",
        // model: "dall-e-2",
        // model: "dall-e-3",
        // prompt: "A cute baby sea otter",
        prompt: description,
        n: 1,
        size: "1024x1024"
      })
    }
  );

  const data = await response.json();
  return data;
}

export default generateImage;