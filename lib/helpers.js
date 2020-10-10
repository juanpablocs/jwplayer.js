export const installPlayerScript = ({
  onLoadCallback,
  onErrorCallback,
  scriptSrc,
  uniqueScriptId,
}) => {
  const jwPlayerScript = document.createElement("script");
  jwPlayerScript.id = uniqueScriptId;
  jwPlayerScript.src = scriptSrc;
  jwPlayerScript.onload = onLoadCallback;
  jwPlayerScript.onerror = onErrorCallback;
  if(typeof document !== 'undefined') {
    document.head.appendChild(jwPlayerScript);
  }
};
