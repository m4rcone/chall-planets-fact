import { Card } from "./styles";

interface CardInfoProps {
  title: string;
  info: string;
}

export function CardInfo({ title, info }: CardInfoProps) {
  return (
    <Card>
      <h2>{title.toLocaleUpperCase()}</h2>
      <span>{info.toLocaleUpperCase()}</span>
    </Card>
  );
}
