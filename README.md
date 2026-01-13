# Management Of Tickets

## Technologies
- Node.js 22+
- .NET 8 Minimal API
- Angular CLI 17


##  Backend

### Environment
Visual Studio 2022 or later

### Running the Backend
cd Api
dotnet run

The API will be available at:
https://localhost:7078


Data is stored in memory (no database).
Swagger is enabled for API testing.
Swagger UI available at:
https://localhost:7078/swagger


### Backend Structure
- Endpoints � responsible for handling HTTP requests  
- Services � contain the business logic  
- Models � define the domain entities (Ticket)


### API Endpoints:
GET /tickets � Retrieve all tickets
POST /tickets � Create a new ticket
PUT /tickets/{id}/close � Close an existing ticket

### Data Model
```csharp
public record Ticket(
    int TicketId,
    int UserId,
    string Subject,
    string Description,
    bool IsClosed
);
```

### Layer Separation Rationale
Although the project currently uses in-memory storage (without a database),
the application was designed with a proper separation of concerns.
This structure allows an easy transition to a real database in the future
without changing the API or endpoint logic.


### Security Considerations

Instead of using an open CORS policy (`AllowAnyOrigin`), a specific policy was
defined for the Angular application.
This approach provides better security practices following best practices and avoiding open
cross-origin access.  
Authentication and authorization are intentionally out of scope for this project.



##  Frontend

### Environment
visual studio code 

### Running the Frontend
cd FE/ticket-app
npm install
ng serve

The application will be available at:
http://localhost:4200
Ensure the backend API is running before starting the frontend.

### Frontend Structure
Components � Handle UI and user interactions (TicketsComponent).
Services � Handle API calls and business logic (TicketService).
Models � Define data structures (Ticket interface).

