export interface Ticket {
  ticketId: number;
  userId: number;
  subject: string;
  description: string;
  isClosed: boolean;
}