import './globals.css';

export const metadata = {
  title: 'Piyush Rawat — AI/ML Engineer',
  description: 'Portfolio of Piyush Rawat — AI/ML Engineer specializing in Machine Learning, Deep Learning, NLP, and Computer Vision.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
