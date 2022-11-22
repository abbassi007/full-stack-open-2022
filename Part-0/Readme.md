EXERCISE PART 0

Exercise 0.4



```mermaid
sequenceDiagram
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->>browser: HTTP status code 302
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/note
    server-->>browser: HTML-code
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->browser: main.css
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->browser: main.js

    note over browser:browser starts executing js-code <br>that requests JSON data from server 

    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: [{ content: "Add new note", date: "2022-11-22" }, ...]

    note over browser:browser executes the event handler<br>that renders notes to display
   
```

Exercise 0.5



```mermaid
sequenceDiagram
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML-code
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: main.css
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->browser: spa.js

    note over browser:browser starts executing js-code <br>that requests JSON data from server 

    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: [{ content: "Notes data", date: "2022-11-22" }, ...]

    note over browser:browser executes the event handler<br>that renders notes to display
   
```


Exercise 0.6




```mermaid
sequenceDiagram
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML-code
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: JSON data


    note over browser:browser starts executing js-code <br>that requests JSON data from server 

    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: [{ content: "Added new note", date: "2022-11-22" }, ...]

    note over browser:browser executes the event handler<br>that renders notes to display
   
```