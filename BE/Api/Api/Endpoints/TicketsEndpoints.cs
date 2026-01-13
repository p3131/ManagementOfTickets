using Api.Services;
using Api.Models;

namespace Api.Endpoints
{
    public static class TicketsEndpoints
    {
        public static void MapTicketEndpoints(this WebApplication app)
        {
            app.MapGet("/tickets", (TicketService service) =>
            {
                return service.GetAll();
            });

            app.MapPost("/tickets", (Ticket ticket, TicketService service) =>
            {
                return service.Create(ticket.UserId, ticket.Subject, ticket.Description);
            });

            app.MapPut("/tickets/{id}/close", (int id, TicketService service) =>
            {
                return service.Close(id)
                    ? Results.Ok()
                    : Results.NotFound();
            });
        }
    }
}
