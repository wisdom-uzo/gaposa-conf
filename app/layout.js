import "./globals.css";


export const metadata = {
  title: "NTERNATIONAL CONFERENCE ON SCIENCE AND TECHNOLOGY",
  description: "INTERNATIONAL CONFERENCE ON SCIENCE AND TECHNOLOGY; Green Economy: A Multidimensional Approach to Sustainable Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
