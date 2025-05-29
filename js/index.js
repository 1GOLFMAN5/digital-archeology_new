const typesContainer = document.querySelectorAll('.type')
typesContainer.forEach(element => {
	element.addEventListener('click', function () {
		const classType = element.parentNode.lastElementChild
		classType.style.display = 'flex'
	})
})
