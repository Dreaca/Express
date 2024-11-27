export default function Item(props: {title: string; desc: string}){
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        </>
    )
}