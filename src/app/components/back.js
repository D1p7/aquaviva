import { IoArrowBack } from 'react-icons/io5';

export default function BackArrow({onClick, size = 40}) {
    //componente do botão voltar que importa da lib react icons, 
    //com a função onClick e o tamanho sendo passado como props
    return (
        <button onClick={onClick}>
            <IoArrowBack size={size} color='#4d8587'/>
        </button>
    );
}