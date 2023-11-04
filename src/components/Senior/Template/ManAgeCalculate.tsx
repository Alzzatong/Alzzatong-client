interface Props {
  firstPart: string;
  secondPart: string;
}

export default function ManAgeCalculate({firstPart, secondPart}: Props) {

    // 현재 년도 가져오기
    const today = new Date();
    const thisYear = today.getFullYear();

    // 생년월일에서 년도, 월, 일 추출
    const year = firstPart.substring(0, 2);
    const month = firstPart.substring(2, 4);
    const day = firstPart.substring(4, 6);

    // 출생년도 계산
    let birthYear = (secondPart[0] <= "2") ? "19" + year : "20" + year;

    // 만 나이 계산
    let age = thisYear - Number(birthYear);

    // 생일이 지났는지 확인
    if (today < new Date(`${thisYear}-${month}-${day}`)) {
        age -= 1; // 생일이 지나지 않았다면 만 나이에서 1을 빼준다.
    }

    return age;
}