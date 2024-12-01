export function Card({ content }: { content: string }) {
  const styles = {
    border: "1px solid black",
    borderRadius: "15px",
    padding: "10px 20px",
  };

  return (
    <div style={styles}>
      <p>{content}</p>
    </div>
  );
}
