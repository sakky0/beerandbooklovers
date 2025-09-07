import type { Member } from "../../models/member";
import "./ClubMember.css";

export type IClubMember = Omit<Member, "lvl" | "joined"> & {
    joined: Date;
};

const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

const IMG_BASE = "https://aconto.fra1.digitaloceanspaces.com/images/1/";

const ClubMember = ({ name, lastName, guid, joined }: IClubMember) => {
    return (
        <div className="member-container">
            <img className="member-image" src={`${IMG_BASE}${guid}`} />
            <div className="details">
                <h4>
                    {name} {lastName}
                </h4>
                <p>Član od:</p>
                <p>{joined.toLocaleDateString("hr-HR", dateOptions)}</p>
            </div>
        </div>
    );
};

export default ClubMember;
