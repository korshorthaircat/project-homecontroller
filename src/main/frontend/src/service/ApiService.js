//fetch를 처리해주는 함수를 만들어 export한다.
//참고: fetch는 ajax를 구현하는 강력&최신 API. 리퀘스트와 리스폰스를 포함하여 처리함.
//ajax는 페이지 새로고침없이 서버에 요청, 서버로부터 데이터를 받고 작업 수행.
import { API_BASE_URL } from "../app-config";

//api = "/api/todo/selectTodoList"
//method = "GET", "POST", "PUT", "DELETE"
//request는 백엔드로 보내줄 데이터
export function call(api, method, request) {
  let headers = new Headers({
    //보내줄 데이터의 타입 지정
    "Content-Type": "application/json",
  });
  //로컬 스토리지에서 토큰 값 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  //토큰 값이 존재하면 헤더에 담아서 API 호출
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  //fetch 옵션 설정
  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  //보내줄 데이터가 있으면 request 바디에 담기
  if (request) {
    options.body = JSON.stringify(request);
  }

  //fetch 실행 후 결과값 리턴

  return fetch(options.url, options).then((response) => {
    //localhost:8080/api/todo에 요청을 본앴을 때 접근 거부를 받으면 /login으로 라우팅
    if (response.status === 403) {
      window.location.href = "/login";
    }

    response.json().then((json) => {
      //api 오류시 에러 리턴
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    });
  });
}

export function callForPayment(api, method, request) {
  let headers = new Headers({});
  //로컬 스토리지에서 토큰 값 가져오기
  const accessToken = sessionStorage.getItem("ACCESS_TOKEN");
  console.log(accessToken);
  //토큰 값이 존재하면 헤더에 담아서 API 호출
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  //fetch 옵션 설정
  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  //보내줄 데이터가 있으면 request 바디에 담기
  // if (request) {
  //   options.body = JSON.stringify(request);
  // }

  //fetch 실행 후 결과값 리턴
  return fetch(options.url, options).then((response) => {
    //접근 거부를 받으면 라우팅
    // if (response.status === 403) {
    //   window.location.href = "/kakaopay";
    // }
    // response.json().then((json) => {
    //   //api 오류시 에러 리턴
    //   if (!response.ok) {
    //     return Promise.reject(json);
    //   }
    //   return json;
    // });
    console.log(response);
  });
}

// export function logout() {
//   sessionStorage.setItem("ACCESS_TOKEN", null);
//   window.location.href = "/login";
// }

export function join(user) {
  return call("/api/user/join", "POST", user);
}

export function pay() {
  return callForPayment("/api/order/kakaopay", "POST", null);
}
