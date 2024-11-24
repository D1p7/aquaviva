import { IoArrowBack } from 'react-icons/io5';

export default function BackArrow({onClick, size = 40}) {

    return (
        <button onClick={onClick}>
            <IoArrowBack size={size} color='#4d8587'/>
        </button>
    );
}