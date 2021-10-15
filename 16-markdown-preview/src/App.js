import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('## Markdown preview');

  return (
    <main>
      <section className='section markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>{markdown}</article>
      </section>
    </main>
  );
}

export default App;
