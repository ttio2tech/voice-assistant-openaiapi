import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
  });

export default async (req: any, res: any) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  //console.log(req.body)
  //const { text } = req.body;
  //console.log(req)
  //console.log(typeof req.body, req.body);   req.body is a string. can be used directly. 

  try {
    //console.log(text)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: req.body }],
        model: 'gpt-3.5-turbo',
      });
      //console.log(text)
    
    res.status(200).json(chatCompletion.choices);
  } catch (error: unknown) {
    res.status(500).send({ error: error });
  }
};
