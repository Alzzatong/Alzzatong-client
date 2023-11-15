import MatchingTabSeniorSearch from "@/components/Matching/Search/MatchingTabSeniorSearch";
import BigTitle from "@/components/Template/LabelText/BigTitle";

export default function SeniorMatchingPage(props: any) {
    return (
        <div className="pageContent">
            <div className="border-l border-gray-300" >
                <main>
                    <MatchingTabSeniorSearch />
                </main>
            </div>
        </div>
    );
}