export const formatDateForCV = (date: Date): string => {
  const year = date.getUTCFullYear()
  const month = date.toLocaleString("default", { month: "long" })
  return `${month} de ${year}`
}