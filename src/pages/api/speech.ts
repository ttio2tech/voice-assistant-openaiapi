// pages/api/speech.ts
import OpenAI from "openai";

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { text,voice } = req.body;
      console.log('----')
      console.log(text)

      if (!text) {
        return res.status(400).json({ error: 'No text provided' });
      }

      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: voice,
        input: text,
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());

      // Instead of saving to a file, send the MP3 buffer directly
      res.setHeader('Content-Type', 'audio/mpeg');
      return res.send(buffer);
    } catch (error) {
      console.error('Error creating speech:', error);
      return res.status(500).json({ error: 'Error creating speech' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
