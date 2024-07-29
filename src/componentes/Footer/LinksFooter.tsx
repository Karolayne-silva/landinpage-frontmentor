interface link {
  title: string;
  arrayLinks: string[];
}
interface linksProps {
  links: link[];
}
export default function LinksFooter({ links }: linksProps) {
  return (
    
    <div className="grid grid-cols-4">
      {links.map((link) => {
        return (
          <div>
            <h1 className="uppercase text-grayish_violet font-bold mb-5 text-sm mt-7">
              {link.title}
            </h1>
            <ul className="uppercase font-bold text-sm">
              {link.arrayLinks.map((link)=> <li className="pb-3 hover:underline cursor-pointer ">{link}</li>)}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
