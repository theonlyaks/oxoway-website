import React from 'react';

const FormattedText = ({ content }) => {
  const formatText = (text) => {
    if (typeof text !== 'string') {
      return <p>Invalid text input</p>;
    }

    // Replace '/n' and '\\n' with actual newline character and remove spaces around newlines
    const processedText = text
      .replace(/\/n/g, '\n')
      .replace(/\\n/g, '\n')
      .replace(/ *\n */g, '\n');

    const lines = processedText.split('\n');

    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\#{3}.*?\#{3}|\*\*.*?\*\*)/g);
      
      const formattedLine = parts.map((part, partIndex) => {
        if (part.startsWith('###') && part.endsWith('###')) {
          return (
            <span key={`${lineIndex}-${partIndex}`} className="font-bold text-lg">
              {part.slice(3, -3)}
            </span>
          );
        } else if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={`${lineIndex}-${partIndex}`} className="font-bold">
              {part.slice(2, -2)}
            </span>
          );
        } else {
          return <span key={`${lineIndex}-${partIndex}`}>{part}</span>;
        }
      });

      return (
        <React.Fragment key={`line-${lineIndex}`}>
          {formattedLine}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return <div className="formatted-text">{formatText(content)}</div>;
};

export default FormattedText;