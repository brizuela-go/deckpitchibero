import { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

type Props = {
  params: { number: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const number = params.number;

  console.log("params", params);

  return {
    title: `Slide ${number}`,
    description: `You are viewing slide ${number}`,
  };
}
