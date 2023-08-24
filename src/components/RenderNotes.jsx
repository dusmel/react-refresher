import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const RenderNotes = ({ note }) => {
  return (
    <div className="prose prose-sm mx-auto dark:prose-invert prose-headings:inline-block prose-headings:border-b-2 prose-headings:border-gray-400 prose-headings:bg-gray-500 prose-headings:bg-opacity-30 prose-headings:p-1 prose-h1:text-[1.1em] prose-h1:font-semibold prose-h2:text-[0.9em] prose-code:border-b-2 prose-code:border-yellow-400 prose-code:bg-yellow-500 prose-code:bg-opacity-20 prose-code:p-1 prose-ul:text-left">
      <div className="font-semi-bold rounded-lg bg-gray-200 p-2 font-mono text-[0.95em] dark:bg-slate-900">
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={note}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};

export default RenderNotes;
