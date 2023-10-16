import './globals.css';

export const metadata = {
  title: 'Brilho da Magia Decorações',
  description: 'Empresa de aluguel de material para decoração de festas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Kaushan+Script&family=Nunito:ital,wght@1,200;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./img/favicon.ico" type="image/x-icon"></link>
      </head>

      <body>{children}</body>
    </html>
  );
}
