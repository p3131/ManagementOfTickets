import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = [];
  filterStatus: 'all' | 'open' | 'closed' = 'all';
  filteredTickets: Ticket[] = [];

  newTicket = {
    userId: 0,
    subject: '',
    description: ''
  };

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
      this.applyFilter();
    });
  }


  applyFilter() {
    if (this.filterStatus === 'all') {
      this.filteredTickets = this.tickets;
    } 
    else if (this.filterStatus === 'open') {
      this.filteredTickets = this.tickets.filter(t => !t.isClosed);
    } 
    else {
      this.filteredTickets = this.tickets.filter(t => t.isClosed);
    }
  }


  addTicket() {
    this.newTicket.userId = Number(this.newTicket.userId);
    if (isNaN(this.newTicket.userId) || this.newTicket.userId <= 0 || this.newTicket.userId > 999999999 || this.isValidIsraeliId(this.newTicket.userId) === false) {
      alert("אנא הכנס מספר תעודת זהות תקני");
      return;
    }

    this.ticketService.createTicket(this.newTicket).subscribe(() => {
      this.loadTickets();
      this.newTicket = { userId: 0, subject: '', description: '' };
    });
  }

  closeTicket(id: number) {
    this.ticketService.closeTicket(id).subscribe(() => {
      this.loadTickets();
    });
  }

  isValidIsraeliId(id: number | string): boolean {
  let idStr = String(id).trim();

  // חייב להכיל רק ספרות
  if (!/^\d+$/.test(idStr)) return false;

  // השלמה ל־9 ספרות
  if (idStr.length < 9) {
    idStr = idStr.padStart(9, '0');
  }

  if (idStr.length !== 9) return false;

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    let digit = Number(idStr[i]) * ((i % 2) + 1);
    if (digit > 9) digit -= 9;
    sum += digit;
  }

  return sum % 10 === 0;
}

}
