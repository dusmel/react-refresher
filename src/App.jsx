import { useMemo } from "react";
import "./App.css";
import viteLogo from "./assets/vite.svg";
import reactLogo from "./assets/react.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import generalTopics from "./routes/generalTopics";
import hooksTopics from "./routes/hooksTopics";
import IconFolder from "./components/Icons/IconFolder";

function App({ errorFallback }) {
  const { pathname } = useLocation();

  const topic = useMemo(
    () =>
      [...generalTopics, ...hooksTopics].find(
        (topic) => topic.path === pathname,
      ),
    [pathname],
  );

  return (
    <div className="m-0  h-screen bg-gradient-to-r from-slate-100 via-gray-50 to-neutral-100 px-10 py-24 dark:from-slate-700 dark:to-slate-900 ">
      <div className="flex w-full gap-10">
        <div className="h-[32rem] w-2/5 flex-initial rounded border border-inherit border-slate-300 px-12 py-6 text-left shadow-lg shadow-slate-300 dark:shadow-slate-900">
          <div className="mb-6 flex justify-center">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h3 className="font-semi-bold mb-1 text-3xl">React refresher</h3>
          <hr className=" mb-6" />

          <nav>
            <h3 className="font-bold">General Topics</h3>
            <ul className="space-y-1">
              {generalTopics.map((topic) => (
                <li className="mb-1 ml-2" key={topic.path}>
                  <Link
                    className="flex gap-2 text-slate-600 dark:text-slate-200"
                    to={topic.path}
                  >
                    <IconFolder />
                    {topic.linkLabel}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-2 font-bold">Hooks</h3>
            <ul className="space-y-1">
              {hooksTopics.map((topic) => (
                <li className="ml-2" key={topic.path}>
                  <Link
                    className="flex gap-2 text-slate-600 dark:text-slate-200"
                    to={topic.path}
                  >
                    <IconFolder />
                    {topic.linkLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="w-3/5 flex-initial rounded border border-inherit border-slate-300  p-8 px-16 shadow-lg shadow-slate-300 dark:shadow-slate-950">
          {errorFallback || (
            <div>
              <h2 className="mb-3 text-lg font-bold">{topic.title}</h2>
              <Outlet />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
