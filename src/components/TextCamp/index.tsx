interface TextCampProps {
    className: string;
    type: string;
    placeholder: string;
    onChange: (evento:any) => void;
}



export default function TextCamp ({ className, type , placeholder , onChange}: TextCampProps){
    return (
        <input
                className={className}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
    )
}