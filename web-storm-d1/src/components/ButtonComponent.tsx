

export default function ButtonComponent(props) {
    // const name = props.name;
    return (
        <>
            <button onClick={() => {props.onClick(name)}}>{props.children}</button>
        </>
    )
}