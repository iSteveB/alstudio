export const metadata = {
  title: 'Sanity',
  description: 'Dashboard for Sanity Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
