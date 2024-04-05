import { format, parseISO } from "date-fns";

export const formatDate = (dateString: string): string =>
  format(parseISO(dateString).toISOString(), "M/d/yyyy");
