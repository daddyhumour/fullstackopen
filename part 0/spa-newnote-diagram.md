```mermaid
sequenceDiagram
    participant browser
    participant server

    activate browser
    browser->>browser: Add new note to the page
    deactivate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>server: Process new note in JSON format 
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes 
 ```