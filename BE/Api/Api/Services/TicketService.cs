using Api.Models;

namespace Api.Services
{
    public class TicketService
    {
        private readonly List<Ticket> _tickets = new();
        private int _nextId = 1;

        public IEnumerable<Ticket> GetAll()
        {
            return _tickets;
        }

        public Ticket Create(int userId, string subject, string description)
        {
            var ticket = new Ticket(_nextId++, userId, subject, description, false);
            _tickets.Add(ticket);
            return ticket;
        }

        public bool Close(int id)
        {
            var index = _tickets.FindIndex(t => t.TicketId == id);
            if (index == -1) return false;

            _tickets[index] = _tickets[index] with { IsClosed = true };
            return true;
        }
    }
}
