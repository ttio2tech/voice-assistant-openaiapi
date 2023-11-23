# Voice assistant using openai API
> _Next.js app_, _OpenAI Whisper_, _OpenAI chatgpt API_, _OpenAI TTS API_,

push-to-talk and transcribe it using Whisper, response by chatgpt models, and turn the response into speech. All using OpenAI APIs. Implemented as a Next.js app.

[Demo Video](https://youtu.be/7wgytBVindk)

**Note:** The OpenAI API is a paid service. Please ensure you are aware of the costs associated with its use.

For tutorials on obtaining OpenAI key, see [OpenAI key video tutorial](https://youtu.be/D3XxIIDKT_0)

## Updates

[11/22/23]: Updated UI - added the voice type selection (6 voice types to select from). 


## Getting started

### Prerequisites

- Node.js and npm installed on your machine.

### Setup

1. **Environment Configuration:**

   - Copy the provided `.env.local.template` file to a new file named `.env.local`.
   - Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key in the `.env.local` file.
   - **Important:** Ensure your API key is kept secure. It's also recommended to set a usage cap to avoid unexpected charges.

2. **Project Installation:**

   Open your terminal and run the following commands:
   ```sh
   npm install     # Installs the necessary dependencies
   npm run dev     # Starts the development server
3. **Accessing the Application:**
    
    Once the server is running, open a web browser and navigate to [localhost:3000](http://localhost:3000/).

    Interact with the voice assistant via the push-to-talk feature.


## Contributions

Contributions to this project are welcome. 

