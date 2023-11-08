# Voice assistant using openai API
> _Next.js app_, _OpenAI Whisper_, _OpenAI chatgpt API_, _OpenAI TTS API_,

push-to-talk and transcribe it using Whisper, response by chatgpt models, and turn the response into speech. All using OpenAI APIs. Implemented as a Next.js app.

Pay attention that the OpenAI API is not free.

[Demo Video](https://youtu.be/7wgytBVindk)

For tutorials on obtaining OpenAI key, see [video tutorial](https://youtu.be/D3XxIIDKT_0)

## Usage

1. Create .env.local file with the following content:

```
OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
```
There is a template. Rename it and add the OPENAI_API_KEY. Make sure to secure it and also recommend to set a usage cap for it. 

2. Run the following commands:

```sh
npm install
npm run dev
```

3. Go to http://localhost:3000/ in your browser
