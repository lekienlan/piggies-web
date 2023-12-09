import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Markdown({ mdFile }: { mdFile: RequestInfo | URL }) {
  const [md, setMd] = useState('');

  useEffect(() => {
    fetch(mdFile)
      .then((res) => res.text())
      .then((text) => setMd(text));
  }, []);

  return <ReactMarkdown children={md} />;
}
