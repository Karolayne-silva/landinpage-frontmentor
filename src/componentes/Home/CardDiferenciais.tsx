interface CardDiferencial {
  diferencial: { img: string; title: string; description: string }[];
}
export default function CardDiferencial({ diferencial }: CardDiferencial) {
  return (
    <div className="flex gap-8">
      {diferencial.map((diferencial) => {
        return (
          <div >
            <img src={diferencial.img} />
            <h3 className="text-3xl font-dmserif  text-dark_violet pb-5 pt-5">
              {diferencial.title}
            </h3>
            <p className="text-grayish_violet w-[35ch]">{diferencial.description}</p>
          </div>
        );
      })}
    </div>
  );
}
