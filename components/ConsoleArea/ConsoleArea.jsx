import { useEffect, useRef, useState } from "react";
import styles from "./ConsoleArea.module.css";
import { PYODIDE_CODE } from "../../constants/data";
import { formatPyodideError } from "../../utils/utils";

const ConsoleArea = (props) => {
  const {
    code = "",
    runCompile = 0,
    clearConsole = 0,
    isLoading = false,
    setIsLoading = () => {},
  } = props;

  const pyodide = useRef(null);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const compile = async () => {
    setIsLoading(true);
    if (!pyodide.current) {
      pyodide.current = await window.loadPyodide({
        indexURL: PYODIDE_CODE,
        stdout: (text) => setOutput((i) => `${i}\n${text}`.trim()),
      });
    }
    try {
      await pyodide.current.runPythonAsync(code);
    } catch (error) {
      setError(formatPyodideError(error));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setOutput("");
    setError("");
    compile();
  }, [runCompile]);

  useEffect(() => {
    setOutput("");
    setError("");
  }, [clearConsole]);

  return (
    <div>
      {isLoading && <div data-cy="console_area_loader">Loading...</div>}
      {!isLoading && (
        <div data-cy="console_area_output">
          {!error ? (
            <div
              className={`${styles.console_area_output} ${styles.console_area_wrapper}`}
            >
              {output}
            </div>
          ) : (
            <div
              className={`${styles.console_area_error} ${styles.console_area_wrapper}`}
            >
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConsoleArea;
