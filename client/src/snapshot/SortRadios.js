import Form from 'react-bootstrap/Form';


export default function SortRadios({algIndex, setSortId}) {
    function onSort(e) {
        try {
            if (e.target.id === '' || e.target.id === null) {
                return;
            }
            const id = parseInt(e.target.id);
            setSortId(id);
        } catch (error) {
            // Ok
        }
    }
    let checks = [{}, {}, {}, {}];
    checks[algIndex] = {defaultChecked: true};
    return (
        <Form>
            <div key="radio" className="justify-content-start" onClick={onSort}>
                <Form.Check style={{width: '6rem'}}
                    {...checks[0]}
                    inline
                    label="SB Queen"
                    name="group1"
                    type={"radio"}
                    id="0"
                />
                <Form.Check style={{width: '6rem'}}
                    {...checks[1]}
                    inline
                    label="Earle"
                    name="group1"
                    type={"radio"}
                    id="1"
                />
                <Form.Check style={{width: '6rem'}}
                    {...checks[2]}
                    inline
                    label="U Titan"
                    name="group1"
                    type={"radio"}
                    id="2"
                />
                <Form.Check style={{width: '6rem'}}
                    {...checks[3]}
                    inline
                    label="Average"
                    name="group1"
                    type={"radio"}
                    id="3"
                />
            </div>
        </Form>
    );
}