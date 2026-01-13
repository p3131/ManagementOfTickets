# Management Of Tickets

## Technologies
- Node.js 22+
- .NET 8 Minimal API
- Angular CLI 17


##  Backend

### Environment
Visual Studio 2022 or later

### Running the Backend
cd Api<br>
dotnet run

The API will be available at:<br>
https://localhost:7078


Data is stored in memory (no database).<br>
Swagger is enabled for API testing.<br>
Swagger UI available at:<br>
https://localhost:7078/swagger


### Backend Structure
- Endpoints - responsible for handling HTTP requests<br>
- Services - contain the business logic<br>
- Models - define the domain entities (Ticket)


### API Endpoints:
GET /tickets - Retrieve all tickets<br>
POST /tickets - Create a new ticket<br>
PUT /tickets/{id}/close - Close an existing ticket

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
Although the project currently uses in-memory storage (without a database),<br>
the application was designed with a proper separation of concerns.<br>
This structure allows an easy transition to a real database in the future<br>
without changing the API or endpoint logic.


### Security Considerations

Instead of using an open CORS policy (`AllowAnyOrigin`), a specific policy was
defined for the Angular application.<br>
This approach provides better security practices following best practices and avoiding open
cross-origin access.<br> 
Authentication and authorization are intentionally out of scope for this project.



##  Frontend

### Environment
visual studio code 

### Running the Frontend
cd FE/ticket-app<br>
npm install<br>
ng serve

The application will be available at:<br>
http://localhost:4200<br>
Ensure the backend API is running before starting the frontend.

### Frontend Structure
- Components - Handle UI and user interactions (TicketsComponent).<br>
- Services - Handle API calls and business logic (TicketService).<br>
- Models - Define data structures (Ticket interface).

