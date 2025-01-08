export function Modal(props, children) {
    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                placeholder='name'
                onChange={(e) => props.setName(e.target.value)}
                className="border border-sky-400 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            />
            <input
                type="text"
                placeholder='email'
                onChange={(e) => props.setEmail(e.target.value)}
                className="border border-sky-400 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            />
            <input
                type="text"
                placeholder='phone'
                onChange={(e) => props.setPhone(e.target.value)}
                className="border border-sky-400 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            />
            <br/>
            <button
                onClick={props.handleSubmit}
                className="text-black rounded p-2 hover:bg-blue-300 border-blue-300 border-2"
            >
                {props.children}
            </button>
        </div>

    );
}