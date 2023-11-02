import Head from "next/head";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import { useEffect, useState } from "react";
import ConsoleArea from "../components/ConsoleArea/ConsoleArea";
import { DEFAULT_CODE } from "../constants/data";
import styles from "../styles/home.module.css";

export default function Home() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [codeToCompile, setCodeToCompile] = useState("");
  const [runCompile, setRunCompile] = useState(0);
  const [clearConsole, setClearConsole] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleRun = () => {
    setCodeToCompile(code);
    setRunCompile((i) => i + 1);
  };

  const handleClear = () => {
    setClearConsole((i) => i + 1);
  };

  return (
    <div>
      <Head>
        <title>Python Runner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>
          <CodeEditor code={code} onCodeChange={onCodeChange} />
        </div>
        <div className={styles.button_wrapper}>
          <button
            onClick={handleRun}
            className={styles.button}
            disabled={isLoading}
          >
            Run
          </button>
          <button
            onClick={handleClear}
            className={styles.button}
            disabled={isLoading}
          >
            Clear
          </button>
        </div>
        <div>
          <ConsoleArea
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            code={codeToCompile}
            runCompile={runCompile}
            clearConsole={clearConsole}
          />
        </div>
      </div>
    </div>
  );
}
