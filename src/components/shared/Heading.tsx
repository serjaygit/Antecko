interface Props {
  title: string;
}

export default function Heading({ title }: Props) {
  return (
    <h2 className="text-4xl md:text-5xl font-semibold max-w-md md:max-w-xl leading-[1.05] mb-8">
      {title}
    </h2>
  );
}
