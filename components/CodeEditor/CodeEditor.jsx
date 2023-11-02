import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import styles from "./CodeEditor.module.css";

const extensions = [python()];

const CodeEditor = (props) => {
  const { onCodeChange = () => {}, code = "" } = props;

  const onChange = React.useCallback((val) => {
    onCodeChange(val);
  }, []);

  return (
    <div className={styles.code_editor_wrapper}>
      <CodeMirror
        value={code}
        height="500px"
        extensions={extensions}
        onChange={onChange}
      />
    </div>
  );
};
export default CodeEditor;
