import { format } from "date-fns";

export const formatDate = (date: string): string => format(date, "M/d/yyyy");
