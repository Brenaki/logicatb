import { person } from "@/constants";
import Image from "next/image";

interface CreditsProps{
    title: string;
}

export const Credits = ({title}:CreditsProps) => {
    return(
        <section className='flexCenter flex-col mt-5 gap-y-2'>
            <h2 className='font-bold text-xl text-center'>{title}</h2>
            <div className='flex flex-col rounded-md border-4 p-10 px-20 border-black gap-y-4'>  
                {person.map((valor,index)=>(
                    <Itens description={valor.description} name={valor.name} image={valor.image} key={index} />
                ))}
            </div>
        </section>
    );
};


interface ItensProps{
    name: string;
    description: string;
    image: string;
    key: number;
}


function Itens({name,description,image,key}:ItensProps){
    return(
        <div key={key} className="flex gap-x-4 max-h-40">
            <Image width={150} height={100} src={`/${image}.jpg`} alt="gato"/>
        <div className="flex flex-col items-start ">
            <p className='items-start text-justify font-bold'> {name}</p>
            <p className="capitalize">{description}</p>
        </div>
        </div>
    )
}
