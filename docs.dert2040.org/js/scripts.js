				//const buttons = document.querySelectorALL('.tree-expand');

			//	buttons.forEach(function (currentBtn) {
			//					currentBtn.addEventListener('click', function () {
			//									alert('text');
			//					});
			//	});

document.addEventListener('DOMContentLoaded', addListnersToExpandButtons);

function addListnersToExpandButtons() {
				const allExpandButtons = document.querySelectorAll('.tree-expand');
				for (let expandButton of allExpandButtons) {
								expandButton.addEventListener('click', clickHandler);
				}
}


function clickHandler(event)
{
				const levelOneElements = document.querySelectorAll('.l1-tree');
				for (let levelOneElement of levelOneElements) {
								if (levelOneElement.classList.contains('current'))
												levelOneElement.classList.remove('current');
				}
				event.currentTarget.parentElement.parentElement.classList.add('current');

}