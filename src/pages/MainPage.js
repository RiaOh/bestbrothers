import MainAllPhotolist from "../components/MainAllPhotolist";

function MainPage() {
  return (
    // TODO:: 클래스 네이밍 규칙에 따라 첫번째 글짜는 영문 소문자로 시작해야하며, 연결은 (-)하이폰으로, 대문자는 사용하지 않습니다.
    // 모든 클래스명 간의 통일이 필요합니다.
    <div className="MainPage">
      <MainAllPhotolist />
    </div>
  );
}

export default MainPage;
