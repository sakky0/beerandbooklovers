import type { Member } from "../../models/member";
import { useMembers } from "../../services/dataService";
import FancyContainer from "../../components/FancyContainer/FancyContainer";
import ClubMember from "../../components/ClubMember/ClubMember";
import Separator from "../../components/Separator/Separator";
import "./About.css";

const compareByLastName = (a: Member, b: Member) => {
    return a.lastName > b.lastName ? 1 : -1;
};

type IMemberGroup = {
    members: Member[];
    name: string;
    lvl: Member["lvl"];
    last?: boolean;
};

const MemberGroup = ({ members, name, lvl, last = false }: IMemberGroup) => (
    <>
        <h3>{name}:</h3>
        <div className="members-container">
            {members
                .filter(x => x.lvl === lvl)
                .sort(compareByLastName)
                .map((x, i) => (
                    <ClubMember
                        key={i}
                        name={x.name}
                        lastName={x.lastName}
                        guid={x.guid}
                        joined={new Date(x.joined)}
                    />
                ))}
        </div>
        {!last && <Separator />}
    </>
);

const About = () => {
    const { isLoading, data: members } = useMembers();

    if (isLoading || !members || members.length === 0) return null;

    return (
        <FancyContainer className="about-container">
            <div className="about-title-container">
                <h2 className="about-title">A klub čine</h2>
            </div>
            <MemberGroup members={members} lvl="founder" name="OSNIVAČI" />
            <MemberGroup members={members} lvl="honorary" name="POČASNI ČLANOVI" />
            <MemberGroup last members={members} lvl="regular" name="ČLANOVI" />
        </FancyContainer>
    );
};

export default About;
