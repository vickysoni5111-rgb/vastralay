import { ReactNode } from "react";

type Props = {
  title: string;
  updated?: string;
  children: ReactNode;
};

export default function PolicyLayout({ title, updated, children }: Props) {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "48px 20px",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>{title}</h1>
      {updated && (
        <p style={{ color: "#777", marginBottom: 32 }}>Last updated: {updated}</p>
      )}
      {children}
    </main>
  );
}