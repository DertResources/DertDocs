document.addEventListener('DOMContentLoaded', addListnersToExpandButtons);

function addListnersToExpandButtons() {
				const allExpandButtons = document.querySelectorAll('.tree-expand');
				for (let expandButton of allExpandButtons) {
								expandButton.addEventListener('click', clickHandler);
				}
}

function clickHandler(event) {
				if (event.currentTarget.parentElement.parentElement.classList.contains('current')) {
								removeAllCurrent();
				} else {
								removeAllCurrent();
								event.currentTarget.parentElement.parentElement.classList.add('current');
				}
}

function removeAllCurrent() {
				const levelOneElements = document.querySelectorAll('.l1-tree');
				for (let levelOneElement of levelOneElements) {
								if (levelOneElement.classList.contains('current'))
												levelOneElement.classList.remove('current');
				}
}