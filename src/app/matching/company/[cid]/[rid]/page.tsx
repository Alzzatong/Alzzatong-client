import MatchingTabRecuruitSeniorSearch from "@/components/Mating/SelectSenior";

export default function CompanyMatchingRecruitsSeniorPage(props: any) {
    return (
        <div>
            사람조회 페이지
            <MatchingTabRecuruitSeniorSearch location={"서울"} job_type={11}/>
        </div>
    );
}