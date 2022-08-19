const panels = document.querySelectorAll('.panel')

// forEach() 메서드는 배열에 활용이 가능한 메서드로, 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드이다.
// map() 메서드와 거의 비슷하지만 차이점은 따로 return 하는 값이 없다는 점이다.
// 그래서 forEach 메서드는 변수에 할당하기 보다는 반복문이나 조건문과 같이 그냥 바로 호출되는 것이 일반적이다.
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove('active'))
}
