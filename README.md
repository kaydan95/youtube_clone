# :tv: Youtube_Clone [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

<img src="https://user-images.githubusercontent.com/85853145/210492588-1b0f67e4-6cdf-44a4-9228-a9db1542b5f2.png" width="1000" height="600">

## Summary / 요약

- **목적** : DreamCoding React강의 일부 및 다양한 라이브러리 연습
- **라이브러리 종류** : tanstack-query / tailwind / react-router
- **메인 개발 환경** : React / JavaScript
- **Data Api** : [Youtube Api](https://developers.google.com/youtube/v3)
- **Publish** : [유튜브_클론](https://kyoutube.netlify.app/)
- **프로젝트 정리노트** : [유튜브_클론 프로젝트 정리노트](https://www.notion.so/Netflix_clone-d45cb519d6384de3b7accb2295ab33eb)

## Features
### 1. UI
- 기존 강의 영상에서는 조금 부족하다고 생각했던 UI 부분을 보충했다.
- 실제 유튜브 페이지 우측에 있는 nav 바를 구현하는 것과 채널 프로필 이미지와 채널명, 영상 제목 등의 배치도 실제와 유사하게 구현했다. 간단한 작업이지만 그래도 보이는게 비슷하니 마음이 편해지는 그런 느낌..?

### 2. 반응형
<img src="https://user-images.githubusercontent.com/85853145/210500073-3349efda-b891-45b6-8380-eaad82f32407.gif" width="1000" height="600">

- 이전까지는 잘 와닿지 않았던 tailwind css 의 장점을 최대로 느낄 수 있었던 부분!
```javascript
  {videos && (
    <ul className="w-full pl-1 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  )}
```

### 3. Context 활용법 익히기
- React 를 좀 더 세밀하게 배우기 시작하면서 접했던 개념, Context
```javascript
export const YoutubeApiContext = createContext();

const client = new ApiClient();
const api = new Api(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ api }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
```
- Data Api 를 많이 사용했던 다른 프로젝트들을 리팩토링하면서 더 코드를 깔끔하게 만들 수 있겠다고 생각했다.


## Publish / 배포 😌
- 개인적인 API 키가 포함된 부분은 `dotenv`를 이용해서 `gitignore` 로 처리해준 뒤 Netlify로 배포완료.!


## Review / 보충하고 싶은 점
- tanstack query 를 이용하는게 아직 쉽게 느껴지진 않느다. :pensive: 더 공부하고싶다.
- context 도 마찬가지. 좀 더 공부해서 다른 프로젝트들 코드를 수정하고 싶음..!
