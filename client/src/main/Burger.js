import { BurgerIcon } from '../icons/Icons';


export default function Burger(props) {

    // Pass onClick which has been given by Toggle
    function onClick(e) {
        e.preventDefault();
        props.onClick(e);
    };
    return (
        <div ref={props.ref} style={{cursor: "pointer"}} className="p-0 burger" onClick={onClick}>
            <BurgerIcon width="2.5rem" height="2.5rem" />
        </div>
    );
}