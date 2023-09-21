import express from 'express';
import OpenAI from 'openai';
import path from "path"
const __dirname = path.resolve()
const app = express();
app.use(express.json());

// Configure your OpenAI API key
const apiKey = "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";
const openai = new OpenAI({ apiKey });

app.post('/sendmsg', async (req, res) => {
  try {
    const userMessage = req.body.message; // Assuming you send the message in the request body

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{"role": "system", "content": "phone number is 99933333  your name is muhammd hamd 19 years old web developer work at zcoders i am student of commerce and web development i study commerce at  7d anda more college and i study web develpment at SMIT i am coding since i was 12 years old i live in karachi pakistan i also work as freelancer, you should reply as i am speaking my commerce teacher name is Sir Adnan i am in 2nd year of my collegeand my web development teacher name is sir Inzamam my facebook url is https://facebook.com/muhammadhamd11 "},
       
        
        {"role": "user", "content":userMessage}
    ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,

     
    });

    const aiResponse = response.choices[0].message.content;

    res.json({ aiResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.use(express.static(__dirname))
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
