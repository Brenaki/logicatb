
// Define a interface para os props do componente Explanation
interface ExplanationProps {
  title: string;
  text: string[];
}

// Componente Explanation
export const Explanation: React.FC<ExplanationProps> = ({ title, text }) => {
  return (
    <section className='flexCenter flex-col mt-5 gap-y-2'>
        <h2 className=' font-bold text-xl max-w- text-center'>{title}</h2>
        <div className='flex flex-col border-4 p-4 border-black gap-y-4'>{text.map((paragraph, index) => (
        <p key={index} className=' max-w-4xl items-start text-justify' >{paragraph}</p>
        ))}</div>
    </section>
  );
};

