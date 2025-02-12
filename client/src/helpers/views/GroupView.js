export default function GroupView(props) {
    return (
        <div className="d-flex justify-content-center">
            <div>
                <div className={props.className} style={{width: 'max-content', borderRadius: '6px'}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}