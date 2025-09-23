export function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Фіксована локаль та часовий пояс UTC
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${day}.${month} ${hours}:${minutes}`;
}
