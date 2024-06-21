import Image from "next/image";
interface CreditsProps{
    name: string[];
    title: String;
}
interface ItensProps{
    key: number;
    name: string;
}

export const Credits: React.FC<CreditsProps> = ({name,title}) => {
    return(
        <section className='flexCenter flex-col mt-5 gap-y-2'>
            <h2 className='font-bold text-xl max-w-2xl text-center'>{title}</h2>
            <div className='flex flex-col border-4 p-4 border-black gap-y-4'>
            {name.map((nome,index)=>(
                <div className="flex gap-x-4 max-h-40"><Itens key={index} name={nome} />
                <p key={index} className='max-w-4xl items-start text-justify'> {nome}</p></div>
            ))}
            </div>
        </section>

    );
};


function Itens({key,name}:ItensProps){
    return(
        <div key={key}>
            <Image width={150} height={100} src={`/${name}.jpg`} alt="gato"/>
        </div>
    )
}