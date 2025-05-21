export default function checkData(data) {
  if (data === null || data === undefined) return false;
  if (typeof data === "string") return data.trim() !== "";
  if (Array.isArray(data)) return data.length > 0;
  if (typeof data === "object") return Object.keys(data).length > 0;
  return Boolean(data);
}
