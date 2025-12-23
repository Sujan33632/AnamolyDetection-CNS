export const formatScore = (score) => {
  if (score === undefined || score === null) return "-";
  return Number(score).toFixed(4);
};

export const formatDate = (dateString) => {
  if (!dateString) return "-";
  return new Date(dateString).toLocaleDateString();
};

// Format durations from CSV 'dur' field
// - If dur < 1 second, show in milliseconds (ms)
// - If dur >= 1 second, show in seconds (s)
// - Always format to 2 decimal places
// Accepts number or string; returns '-' for invalid inputs
export const formatDuration = (dur) => {
  if (dur === undefined || dur === null || dur === "") return "-";
  const n = Number(dur);
  if (Number.isNaN(n)) return "-";
  if (n < 1) {
    const ms = n * 1000;
    return `${ms.toFixed(2)} ms`;
  }
  return `${n.toFixed(2)} s`;
};
