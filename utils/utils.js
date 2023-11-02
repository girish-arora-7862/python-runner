export const formatPyodideError = (errorObj) => {
  let errorMsg = errorObj?.message ?? "";
  const errorBreak = `"<exec>",`;
  let idx = errorMsg.indexOf(errorBreak);
  return errorMsg.slice(idx + errorBreak.length + 1);
};
