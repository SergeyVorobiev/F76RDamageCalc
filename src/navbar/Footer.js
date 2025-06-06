import Global from '../helpers/Global';
import { WarningPopoverBadge } from '../helpers/WarningPopover';


export default function Footer() {
    return (
        <div className="pb-2 ps-2 pe-2 pt-3 ms-1 me-1 footer">
            <table className="mb-3">
                <tbody>
                    <tr>
                        <td className="version-text">
                            <div>{Global.version1}</div>
                            <div>{Global.version2}</div>
                            <div>{Global.version3}</div>
                        </td>
                        <td>
                            <WarningPopoverBadge className="ms-3" sign="?" message={Global.versionMessage} header={'Game Version'} placement={'top'} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="w-100 mt-1 d-flex justify-content-end">
                <div className="version-text-2">{Global.webVersion}</div>
            </div>
        </div>
    );
}