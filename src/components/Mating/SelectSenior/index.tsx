"use client";
import { supabase } from "@/lib/supabase/supabase";
import { use, useEffect } from "react";

interface MatchingTabRecuruitSeniorSearchProps {
    location: string;
    job_type: number;
}

export default function MatchingTabRecuruitSeniorSearch({location, job_type} : MatchingTabRecuruitSeniorSearchProps) {

    console.log(location);
    console.log(job_type);

    
 // 해당 직무와 희망직종이 같고, 희망 근무지도 같은 경우만 조회
    const handleSearch = async () => {
        let { data, error } = await supabase
            .from("senior_wishlist")
            .select(`*`) //recruit 테이블과 조인
            .eq("location", location)
            .eq("job_code_name", job_type)

        if (error) console.error("Error loading data: ", error);
        console.log(data);
    };

    useEffect(() => {
        // handleSearch 한번 실행
        handleSearch();
        
    }, []);

  return <div>구직자 조회</div>;
}
