export default function Home() {
  return (
    <div style={{
      backgroundColor: "#131314",
      color: "#e3e3e3",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "sans-serif"
    }}>
      
      {/* 1. Header / Rubrik */}
      <header style={{ padding: "20px", borderBottom: "1px solid #2d2d2e", width: "100%", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Sayumi AI</h1>
      </header>

      {/* 2. Chattfönstret (Här hamnar meddelandena sen) */}
      <main style={{
        flex: 1,
        width: "100%",
        maxWidth: "700px",
        padding: "20px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>
        <div style={{ backgroundColor: "#1e1e20", padding: "15px", borderRadius: "8px", maxWidth: "80%" }}>
          <strong>Claude:</strong> Hej! Jag är din AI-assistent. Vad vill du bygga idag?
        </div>
      </main>

      {/* 3. Inputfältet längst ner */}
      <footer style={{
        padding: "20px",
        width: "100%",
        maxWidth: "700px",
        display: "flex",
        gap: "10px"
      }}>
        <input 
          type="text" 
          placeholder="Skriv ett meddelande till Claude..." 
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "24px",
            border: "1px solid #3c4043",
            backgroundColor: "#1e1e20",
            color: "#ffffff",
            outline: "none",
            fontSize: "1rem"
          }}
        />
        <button style={{
          padding: "0 24px",
          borderRadius: "24px",
          border: "none",
          backgroundColor: "#a8c7fa",
          color: "#041e49",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem"
        }}>
          Skicka
        </button>
      </footer>

    </div>
  );
}