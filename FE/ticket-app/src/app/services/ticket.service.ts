import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'https://localhost:7078/tickets'; 

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  createTicket(ticket: Partial<Ticket>) {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }

  closeTicket(id: number) {
    return this.http.put(`${this.apiUrl}/${id}/close`, {});
  }
}
