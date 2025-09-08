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
        <>
            <FancyContainer className="about-container">
                <div className="about-title-container">
                    <h2 className="about-title">O klubu</h2>
                </div>
                <p>
                    Kao što je Eric Cantona jednom rekao, možeš promijenit svog partnera, politiku,
                    religiju al nikad, baš nikad ne mijenjaš svoj klub. Osnivači Kluba Ljubitelja
                    Pive & Knjige, vodili su se sličnim principom u svojoj želji da oforme zajednicu
                    koja nadilazi hobi odnosno aktivnost uz koju samo prolazi vrijeme. Klub
                    Ljubitelja Pive & Knjige stoga je mjesto pripadanja. Mjesto koje ne mijenjaš,
                    već ga gradiš i oblikuješ s ostalim članovima. Kak? Pak, uz dobru kapljicu,
                    originalnu ideju i mnoštvo rasprave.
                </p>
                <p>So, if you can think and drink, do consider to join!</p>
            </FancyContainer>

            <FancyContainer className="about-container">
                <div className="about-title-container">
                    <h2 className="about-title">Članovi</h2>
                </div>
                <MemberGroup members={members} lvl="founder" name="OSNIVAČI" />
                <MemberGroup members={members} lvl="honorary" name="POČASNI ČLANOVI" />
                <MemberGroup last members={members} lvl="regular" name="OSTALI" />
            </FancyContainer>
        </>
    );
};

export default About;
