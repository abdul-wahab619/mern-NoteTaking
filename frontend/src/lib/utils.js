export function formatDate(date) {
  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const diffMs = Date.now() - new Date(date).getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  let relative = "";

  if (diffSec < 60) {
    relative = `${diffSec}s ago`;
  } else if (diffMin < 60) {
    relative = `${diffMin}m ago`;
  } else if (diffHr < 24) {
    relative = `${diffHr}h ago`;
  } else {
    relative = `${diffDay}d ago`;
  }

  return `${formatted} (${relative})`;
}
