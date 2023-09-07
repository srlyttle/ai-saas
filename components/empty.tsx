import Image from "next/image";

interface Props {
  label: string;
  showImage?: boolean;
}

export const Empty = ({ label, showImage = false }: Props) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        {showImage && <Image src="/empty.png" fill alt="Empty" />}
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
